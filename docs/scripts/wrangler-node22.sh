#!/bin/sh

set -eu

if [ -n "${WRANGLER_NODE:-}" ] && [ -x "${WRANGLER_NODE}" ]; then
  NODE_BIN="${WRANGLER_NODE}"
elif command -v node22 >/dev/null 2>&1; then
  NODE_BIN="$(command -v node22)"
elif [ -x "/Users/toka/.local/share/mise/installs/node/22.22.0/bin/node" ]; then
  NODE_BIN="/Users/toka/.local/share/mise/installs/node/22.22.0/bin/node"
elif command -v brew >/dev/null 2>&1; then
  BREW_NODE22="$(brew --prefix node@22 2>/dev/null)/bin/node"
  if [ -x "${BREW_NODE22}" ]; then
    NODE_BIN="${BREW_NODE22}"
  else
    NODE_BIN=""
  fi
else
  NODE_BIN=""
fi

if [ -z "${NODE_BIN}" ]; then
  echo "Wrangler requires Node 22.x. Set WRANGLER_NODE to a Node 22 binary." >&2
  exit 1
fi

exec "${NODE_BIN}" ./node_modules/wrangler/bin/wrangler.js "$@"
