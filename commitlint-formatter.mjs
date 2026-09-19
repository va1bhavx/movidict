// commitlint-formatter.mjs
export default function customFormat(report) {
  const lines = []

  lines.push("⧗   --- input ---")
  lines.push(report.input)

  for (const result of report.results) {
    for (const error of result.errors) {
      lines.push(`✖   ${error.message} [${result.name}]`)
    }
    for (const warning of result.warnings) {
      lines.push(`⚠   ${warning.message} [${result.name}]`)
    }
  }

  const errorCount = report.results.reduce((n, r) => n + r.errors.length, 0)
  const warningCount = report.results.reduce((n, r) => n + r.warnings.length, 0)

  lines.push("")
  lines.push(
    `${errorCount > 0 ? "✖" : "✔"}   found ${errorCount} problems, ${warningCount} warnings`
  )

  if (errorCount > 0) {
    lines.push("")
    lines.push("  Format: <type>(<scope>)?: <subject>")
    lines.push(
      "  Types:  feat | fix | docs | style | refactor | perf | test | build | ci | chore | revert"
    )
    lines.push('  Example: git commit -m "feat: added a navbar"')
  }

  lines.push(
    "ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint"
  )

  return lines.join("\n")
}
