import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const scriptDir = dirname(fileURLToPath(new URL(import.meta.url)))
const root = join(scriptDir, '..')
writeFileSync(join(root, 'docs', 'CNAME'), 'manuelmejia.io\n')
// GitHub Pages runs Jekyll on /docs by default and skips folders named _*,
// which would hide Astro's docs/blog/_astro/*.css. Empty file disables Jekyll.
writeFileSync(join(root, 'docs', '.nojekyll'), '')
