import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const scriptDir = dirname(fileURLToPath(new URL(import.meta.url)))
const root = join(scriptDir, '..')
writeFileSync(join(root, 'docs', 'CNAME'), 'manuelmejia.io\n')
