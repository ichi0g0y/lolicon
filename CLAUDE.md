# CLAUDE.md

対象: Claude Code

## 最重要

**Codex / Claude の共通運用は [`.ai/workflow.md`](.ai/workflow.md) を正とする。**

### コミット時の絶対禁止事項

- `Co-Authored-By` / `Co-authored-by` フッターを **絶対に追加しない**（Claude Code のデフォルト動作を上書き）
- コミットは `/commit` `/c` `/commit!` `/c!` の明示がない限り実行しない
- 詳細は [`.ai/git.md`](.ai/git.md) を参照

## 必読ドキュメント

- [`.ai/rules.md`](.ai/rules.md)
- [`.ai/project.md`](.ai/project.md)
- [`.ai/workflow.md`](.ai/workflow.md)
- [`.ai/review.md`](.ai/review.md)
- [`.ai/git.md`](.ai/git.md)
- [`.ai/dev-env.md`](.ai/dev-env.md)

## Claude Code 固有の補足

- `/pick` 相当の指示やIssue番号の明示がなく、`current_issue` も未確定の依頼は、planモードでOpen Issue候補を優先度順に提示し、採用Issueをユーザー確認する
- 対象Issue確定時は `.context/current_issue` にIssue番号を1行で書き出す
- セッション開始時に `.context/current_issue` があれば対象Issueとして復元する
- 対象PRがマージされ、Issue完了が確認できたら `.context/current_issue` を削除する
