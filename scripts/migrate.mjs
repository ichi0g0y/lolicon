import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..')
const SUPERCONS_PATH = path.join(ROOT, '.context/supercons-glyphs.tsx')
const ICONS_DIR = path.join(ROOT, 'src/icons')
const GLYPHS_OUT = path.join(ROOT, 'src/glyphs.tsx')
const INDEX_OUT = path.join(ROOT, 'src/index.ts')

// ── Name conversion helpers ──

function pascalToKebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

function kebabToPascal(name) {
  let result = name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
  // If starts with a digit, prefix with underscore for valid identifier
  if (/^[0-9]/.test(result)) {
    result = '_' + result
  }
  return result
}

// ── Parse Supercons glyphs ──

function parseSupercons() {
  const content = fs.readFileSync(SUPERCONS_PATH, 'utf-8')
  const glyphs = {}

  // Find the start of the glyphs object
  const objStart = content.indexOf('export const glyphs = {')
  if (objStart === -1) {
    throw new Error('Could not find glyphs object')
  }

  // Find the end - look for the closing } of the object
  // We know it ends before `export const glyphNames`
  const glyphNamesIdx = content.indexOf('export const glyphNames')
  const objBody = content.substring(objStart, glyphNamesIdx)

  // Parse entries: key: ( ... ),
  // Keys can be unquoted identifiers or single-quoted strings
  let pos = objBody.indexOf('{') + 1

  while (pos < objBody.length) {
    // Skip whitespace
    while (pos < objBody.length && /\s/.test(objBody[pos])) pos++

    if (objBody[pos] === '}') break // end of object

    // Skip line comments (// ...)
    if (objBody[pos] === '/' && objBody[pos + 1] === '/') {
      while (pos < objBody.length && objBody[pos] !== '\n') pos++
      continue
    }

    // Read the key
    let key
    if (objBody[pos] === "'") {
      // Quoted key
      const keyEnd = objBody.indexOf("'", pos + 1)
      key = objBody.substring(pos + 1, keyEnd)
      pos = keyEnd + 1
    } else {
      // Unquoted key
      const keyMatch = objBody.substring(pos).match(/^([a-zA-Z0-9_-]+)/)
      if (!keyMatch) break
      key = keyMatch[1]
      pos += key.length
    }

    // Skip to colon
    while (pos < objBody.length && objBody[pos] !== ':') pos++
    pos++ // skip colon

    // Skip whitespace
    while (pos < objBody.length && /\s/.test(objBody[pos])) pos++

    // Now we should be at '(' - find matching ')' while skipping quoted strings
    if (objBody[pos] !== '(') {
      console.error(`Expected '(' at position ${pos}, got '${objBody[pos]}' for key '${key}'`)
      break
    }

    let depth = 1
    let start = pos + 1
    pos++ // skip opening '('

    while (pos < objBody.length && depth > 0) {
      const ch = objBody[pos]
      if (ch === '"') {
        // Skip double-quoted string
        pos++
        while (pos < objBody.length && objBody[pos] !== '"') {
          if (objBody[pos] === '\\') pos++ // skip escaped char
          pos++
        }
      } else if (ch === "'") {
        // Skip single-quoted string
        pos++
        while (pos < objBody.length && objBody[pos] !== "'") {
          if (objBody[pos] === '\\') pos++ // skip escaped char
          pos++
        }
      } else if (ch === '(') {
        depth++
      } else if (ch === ')') {
        depth--
        if (depth === 0) break
      }
      pos++
    }

    const svgContent = objBody.substring(start, pos).trim()
    glyphs[key] = svgContent

    pos++ // skip closing ')'

    // Skip comma and whitespace
    while (pos < objBody.length && /[\s,]/.test(objBody[pos])) pos++
  }

  return glyphs
}

// ── Parse Lolicon icons (from main branch via git) ──

function parseLoliconIcons() {
  const icons = {}

  // Get file list from main branch
  let fileList
  try {
    fileList = execSync('git show main:src/icons/', { cwd: ROOT, encoding: 'utf-8' })
      .split('\n')
      .filter(f => f.endsWith('.tsx'))
  } catch {
    console.warn('  Warning: Could not read icons from main branch, skipping Lolicon-only icons')
    return icons
  }

  for (const file of fileList) {
    const name = file.replace('.tsx', '')
    const kebab = pascalToKebab(name)

    let content
    try {
      content = execSync(`git show main:src/icons/${file}`, { cwd: ROOT, encoding: 'utf-8' })
    } catch {
      continue
    }

    // Find children={ and extract content using brace counting
    const childrenIdx = content.indexOf('children={')
    if (childrenIdx === -1) continue

    const braceStart = childrenIdx + 'children={'.length
    let depth = 1
    let pos = braceStart

    while (pos < content.length && depth > 0) {
      if (content[pos] === '{') depth++
      else if (content[pos] === '}') depth--
      if (depth > 0) pos++
    }

    const svgContent = content.substring(braceStart, pos).trim()
    icons[kebab] = { pascalName: name, svgContent }
  }

  return icons
}

// ── Main ──

console.log('Parsing Supercons glyphs...')
const supercons = parseSupercons()
const superconKeys = Object.keys(supercons)
console.log(`  Found ${superconKeys.length} Supercons glyphs`)

console.log('Parsing Lolicon icons...')
const lolicon = parseLoliconIcons()
const loliconKeys = Object.keys(lolicon)
console.log(`  Found ${loliconKeys.length} Lolicon icons`)

// Compute sets
const superconSet = new Set(superconKeys)
const loliconSet = new Set(loliconKeys)

const overlapping = loliconKeys.filter(k => superconSet.has(k))
const loliconOnly = loliconKeys.filter(k => !superconSet.has(k))
const superconOnly = superconKeys.filter(k => !loliconSet.has(k))

// Note: case collisions are counted in the overlap
// (will be adjusted after collision detection)

// Handle case-insensitive filename collisions (e.g., checkbox vs check-box)
// When a supercons key without hyphens collides with a lolicon key with hyphens,
// merge them under the hyphenated key, using supercons' SVG content.
const caseCollisionMap = {} // maps unhyphenated supercons key → hyphenated lolicon key
for (const sk of superconKeys) {
  const skPascal = kebabToPascal(sk).toLowerCase()
  for (const lk of loliconKeys) {
    if (sk !== lk && kebabToPascal(lk).toLowerCase() === skPascal) {
      // Collision: prefer the hyphenated form, use supercons content
      caseCollisionMap[sk] = lk
      console.log(`  Case collision: supercons '${sk}' → lolicon '${lk}' (merged under '${lk}')`)
    }
  }
}

// Merge: all unique keys, resolving collisions
const allKeysSet = new Set([...superconKeys, ...loliconKeys])
// Remove unhyphenated supercons keys that collide
for (const sk of Object.keys(caseCollisionMap)) {
  allKeysSet.delete(sk)
}
const allKeys = [...allKeysSet].sort()

// Build merged glyphs: supercons wins for overlaps
const mergedGlyphs = {}
for (const key of allKeys) {
  if (superconSet.has(key)) {
    mergedGlyphs[key] = supercons[key]
  } else if (lolicon[key]) {
    // Check if a supercons collision maps to this lolicon key
    const collisionKey = Object.keys(caseCollisionMap).find(sk => caseCollisionMap[sk] === key)
    if (collisionKey) {
      // Use supercons SVG content under the lolicon key name
      mergedGlyphs[key] = supercons[collisionKey]
    } else {
      mergedGlyphs[key] = lolicon[key].svgContent
    }
  }
}

// ── Add Retro variants for overlapping icons that have originals ──

const ORIGINAL_DIR = path.join(ROOT, 'original')
const originalFiles = fs.readdirSync(ORIGINAL_DIR).filter(f => f.endsWith('.ai'))
const originalKebabNames = originalFiles.map(f => {
  const name = f.replace('.ai', '')
  // Normalize: underscore/camelCase → kebab-case
  return name
    .replace(/_/g, '-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
})

const retroKeys = []
for (const origKebab of originalKebabNames) {
  // Check if this original icon overlaps with Supercons
  if (superconSet.has(origKebab) && lolicon[origKebab]) {
    const retroKey = `${origKebab}-retro`
    mergedGlyphs[retroKey] = lolicon[origKebab].svgContent
    allKeys.push(retroKey)
    retroKeys.push(retroKey)
    console.log(`  Retro variant: '${origKebab}' → '${retroKey}'`)
  }
}
allKeys.sort()

if (retroKeys.length > 0) {
  console.log(`  Added ${retroKeys.length} Retro variant(s)`)
}

// ── Generate src/glyphs.tsx ──

console.log('Generating src/glyphs.tsx...')
let glyphsFile = `export const glyphs = {\n`

for (const key of allKeys) {
  const needsQuote = key.includes('-')
  const keyStr = needsQuote ? `'${key}'` : key
  glyphsFile += `  ${keyStr}: (\n`
  // Indent the SVG content
  const lines = mergedGlyphs[key].split('\n')
  for (const line of lines) {
    glyphsFile += `    ${line}\n`
  }
  glyphsFile += `  ),\n`
}

glyphsFile += `}\n\nexport const glyphNames = Object.keys(glyphs)\n\nexport type GlyphName = keyof typeof glyphs\n`

fs.writeFileSync(GLYPHS_OUT, glyphsFile)
console.log(`  Written to ${GLYPHS_OUT}`)

// ── Generate individual component files ──

console.log('Generating individual icon components...')

// Delete existing icon files
const existingFiles = fs.readdirSync(ICONS_DIR).filter(f => f.endsWith('.tsx'))
for (const file of existingFiles) {
  fs.unlinkSync(path.join(ICONS_DIR, file))
}
console.log(`  Deleted ${existingFiles.length} existing icon files`)

for (const key of allKeys) {
  const pascalName = kebabToPascal(key)
  const svgContent = mergedGlyphs[key]

  // Indent SVG content for inside the <svg> element
  const indentedContent = svgContent
    .split('\n')
    .map(line => `      ${line}`)
    .join('\n')

  const component = `import { forwardRef } from 'react'
import type { SVGProps } from 'react'

export interface ${pascalName}IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

export const ${pascalName}Icon = forwardRef<SVGSVGElement, ${pascalName}IconProps>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="${pascalName}"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
${indentedContent}
    </svg>
  ),
)

${pascalName}Icon.displayName = '${pascalName}Icon'
`

  const fileName = `${pascalName}.tsx`
  fs.writeFileSync(path.join(ICONS_DIR, fileName), component)
}

console.log(`  Generated ${allKeys.length} icon components`)

// ── Generate src/index.ts ──

console.log('Generating src/index.ts...')

let indexFile = `export { Icon } from './Icon'
export type { IconProps } from './Icon'
export { glyphNames } from './glyphs'
export type { GlyphName } from './glyphs'

`

for (const key of allKeys) {
  const pascalName = kebabToPascal(key)
  indexFile += `export { ${pascalName}Icon } from './icons/${pascalName}'\n`
  indexFile += `export type { ${pascalName}IconProps } from './icons/${pascalName}'\n`
}

fs.writeFileSync(INDEX_OUT, indexFile)
console.log(`  Written to ${INDEX_OUT}`)

// ── Generate docs/app/datas/icons.ts ──

const DOCS_ICONS_OUT = path.join(ROOT, 'docs/app/datas/icons.ts')
console.log('Generating docs/app/datas/icons.ts...')

let docsFile = 'import {\n'
for (const key of allKeys) {
  const pascalName = kebabToPascal(key)
  docsFile += `  ${pascalName}Icon,\n`
}
docsFile += `} from 'lolicon'\n\n`

docsFile += `export const Icons = [\n`
for (const key of allKeys) {
  const pascalName = kebabToPascal(key)
  docsFile += `  { name: '${pascalName}', icon: ${pascalName}Icon },\n`
}
docsFile += `]\n`

fs.writeFileSync(DOCS_ICONS_OUT, docsFile)
console.log(`  Written to ${DOCS_ICONS_OUT}`)

// ── Summary ──

console.log('\n=== Migration Summary ===')
console.log(`Total icons:            ${allKeys.length}`)
console.log(`Overlapping:            ${overlapping.length}`)
console.log(`Lolicon-only:           ${loliconOnly.length}`)
console.log(`Supercons-only (new):   ${superconOnly.length}`)
