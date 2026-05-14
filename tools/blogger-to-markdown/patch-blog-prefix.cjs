/**
 * One-off patch: canonical + redirect HTML under manuelmejia.io/blog/
 * (when Takeout is gone and yarn migrate cannot be re-run)
 */
const fs = require('fs')
const path = require('path')

function walk(dir, fn) {
  if (!fs.existsSync(dir)) return
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, fn)
    else fn(p)
  }
}

const root = path.join(__dirname, '../..')

walk(path.join(root, 'blog/src/content/blog'), (p) => {
  if (!p.endsWith('.md')) return
  let t = fs.readFileSync(p, 'utf8')
  const n = t.replace(/^canonicalPath: \//m, 'canonicalPath: /blog/')
  if (n !== t) fs.writeFileSync(p, n)
})

walk(path.join(root, 'blog/public'), (p) => {
  if (!p.endsWith('.html')) return
  let t = fs.readFileSync(p, 'utf8')
  let n = t.replace(/https:\/\/blog\.manuelmejia\.io\//g, 'https://manuelmejia.io/blog/')
  n = n.replace(/content="0;url=\//g, 'content="0;url=/blog/')
  n = n.replace(/<a href="\/(\d{4}\/)/g, '<a href="/blog/$1')
  n = n.replace(/\/blog\/blog\//g, '/blog/')
  if (n !== t) fs.writeFileSync(p, n)
})

console.log('Patched blog paths for /blog/ prefix.')
