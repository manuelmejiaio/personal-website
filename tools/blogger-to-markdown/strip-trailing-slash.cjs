/**
 * Strip trailing slash from canonical URLs (use with trailingSlash: 'never').
 */
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '../..')

function walk(dir, fn) {
  if (!fs.existsSync(dir)) return
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, fn)
    else fn(p)
  }
}

walk(path.join(root, 'blog/src/content/blog'), (p) => {
  if (!p.endsWith('.md')) return
  let t = fs.readFileSync(p, 'utf8')
  const n = t.replace(/^(canonicalPath:\s+.+)\/$/m, '$1')
  if (n !== t) fs.writeFileSync(p, n)
})

walk(path.join(root, 'blog/public'), (p) => {
  if (!p.endsWith('.html')) return
  let t = fs.readFileSync(p, 'utf8')
  let n = t
  n = n.replace(/(href="https:\/\/manuelmejia\.io\/blog\/[^"]+)\//g, '$1')
  n = n.replace(/(content="0;url=\/blog\/[^"]+)\//g, '$1')
  n = n.replace(/(<a href="\/blog\/[^"]+)\//g, '$1')
  if (n !== t) fs.writeFileSync(p, n)
})

console.log('Stripped trailing slashes from canonical paths and redirect HTML.')
