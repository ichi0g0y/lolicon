# プロジェクト概要

## 目的

かわいい React アイコンコンポーネントライブラリ（491アイコン）を提供する。

## 現在の状態

- パッケージ名: lolicon
- 技術スタック: React 18, TypeScript, Bun, tsdown
- アイコン数: 491
- ドキュメントサイト: Vite ベース (`docs/`)
- ホスティング: lolicon.ichi0g0y.io

## ディレクトリ構成

- `.ai/`: AI共通ルール
- `.claude/`: Claude用コマンド
- `.context/`: エージェント間の共有作業領域
- `docs/`: ドキュメントサイト (Vite + React + Tailwind CSS)
- `docs/guides/`: ガイド・規約ドキュメント
- `original/`: オリジナルアイコンデザインファイル (.ai, SVG)
- `scripts/`: コード生成スクリプト
- `src/`: ソースコード
  - `src/Icon.tsx`: ダイナミックアイコンコンポーネント
  - `src/glyphs.tsx`: 🔄 自動生成 - グリフデータ
  - `src/icons/`: 🔄 自動生成 - 個別アイコンコンポーネント (491ファイル)
  - `src/index.ts`: 🔄 自動生成 - バレルエクスポート
- `docs/app/datas/icons.ts`: 🔄 自動生成 - ドキュメント用アイコンリスト

## 自動生成コード

以下のファイルは `scripts/migrate.mjs` で自動生成される。**直接編集禁止**。

- `src/glyphs.tsx`
- `src/icons/*.tsx`
- `src/index.ts`
- `docs/app/datas/icons.ts`

再生成コマンド: `bun run generate`

## ビルド・公開

- ビルド: `bun run build` (tsdown + tsc)
- フォーマット: `bun run format`
- Lint: `bun run lint`
- npm公開: public access
