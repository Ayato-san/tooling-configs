import { execSync } from 'node:child_process'
import { readdirSync, rmSync, unlinkSync } from 'node:fs'

function removeDtsCtsFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`

    if (entry.isDirectory()) {
      removeDtsCtsFiles(path)
      continue
    }

    if (entry.name.endsWith('.d.cts')) {
      unlinkSync(path)
    }
  }
}

execSync('node ./src/prettier/generation.js', { stdio: 'inherit' })
rmSync('./build/deleted', { force: true, recursive: true })
removeDtsCtsFiles('./build')
