/**
 * Step 3: Blogger Takeout → Markdown
 *
 * Reads: Takeout/Blogger/Blogs/Manuel_s Blog/feed.atom (relative to repo root)
 * Writes: blog/src/content/blog/... (canonical /blog/YYYY/MM/slug/)
 *
 * Run from this folder: yarn install && yarn migrate
 */
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { XMLParser } from 'fast-xml-parser'
import { decode } from 'html-entities'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '../..')
const FEED_PATH = join(
  REPO_ROOT,
  'Takeout/Blogger/Blogs/Manuel_s Blog/feed.atom'
)
/** Markdown posts consumed by Astro (see blog/) */
const OUT_ROOT = join(REPO_ROOT, 'blog/src/content/blog')
/** Legacy *.html URLs → static redirect pages under blog/public/ */
const REDIRECT_PUBLIC = join(REPO_ROOT, 'blog/public')
const SITE_ORIGIN = 'https://manuelmejia.io'
const BLOG_PREFIX = '/blog'

function yamlString(value) {
  if (value == null || value === '') return '""'
  const s = String(value)
  if (!/[\n":#]/.test(s) && s.trim() === s) return s
  return JSON.stringify(s)
}

function parseLegacyPath(filename) {
  const raw = String(filename || '').trim()
  if (!raw.startsWith('/')) return null
  const withoutLeading = raw.slice(1)
  if (!withoutLeading.endsWith('.html')) return null
  const parts = withoutLeading.slice(0, -'.html'.length).split('/')
  if (parts.length < 3) return null
  const [year, month, ...slugParts] = parts
  if (!/^\d{4}$/.test(year) || !/^\d{2}$/.test(month)) return null
  const slug = slugParts.join('/')
  if (!slug) return null
  return { year, month, slug, legacyPath: raw }
}

function main() {
  if (!existsSync(FEED_PATH)) {
    console.error('Missing feed file:\n', FEED_PATH)
    process.exit(1)
  }

  const xml = readFileSync(FEED_PATH, 'utf8')
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    removeNSPrefix: true,
    isArray: (name) => name === 'entry',
    // Long HTML posts exceed default entity expansion cap (~1000)
    processEntities: false,
    htmlEntities: false,
  })
  const doc = parser.parse(xml)
  const feed = doc.feed || doc
  const rawEntries = feed.entry
  const entries = Array.isArray(rawEntries)
    ? rawEntries
    : rawEntries
      ? [rawEntries]
      : []

  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
  })
  turndown.use(gfm)

  let written = 0
  let skipped = 0

  for (const entry of entries) {
    const type = entry.type
    const status = entry.status
    if (type !== 'POST') {
      skipped++
      continue
    }
    if (status && status !== 'LIVE') {
      skipped++
      continue
    }

    const filename = entry.filename
    const parsed = parseLegacyPath(filename)
    if (!parsed) {
      console.warn('Skip POST (no blogger:filename path):', entry.title)
      skipped++
      continue
    }

    const title = entry.title?.['#text'] ?? entry.title ?? 'Untitled'
    const published = entry.published ?? entry.updated
    const metaDesc =
      entry.metaDescription?.['#text'] ?? entry.metaDescription ?? ''
    const contentNode = entry.content
    let html = ''
    if (typeof contentNode === 'string') html = contentNode
    else if (contentNode && typeof contentNode === 'object') {
      html = contentNode['#text'] ?? contentNode['@_text'] ?? ''
    }
    html = decode(html || '')

    let bodyMd = ''
    try {
      bodyMd = turndown.turndown(html || '').trim()
    } catch (e) {
      console.warn('Turndown failed for:', parsed.legacyPath, e.message)
      bodyMd = ''
    }

    const relMd = join(parsed.year, parsed.month, `${parsed.slug}.md`)
    const absMd = join(OUT_ROOT, relMd)
    mkdirSync(dirname(absMd), { recursive: true })

    const canonicalPath = `${BLOG_PREFIX}/${parsed.year}/${parsed.month}/${parsed.slug}`
    const frontmatter = `---
title: ${yamlString(title)}
pubDate: ${yamlString(published)}
description: ${yamlString(metaDesc || '')}
legacyPath: ${yamlString(parsed.legacyPath)}
canonicalPath: ${yamlString(canonicalPath)}
---

`
    writeFileSync(absMd, frontmatter + (bodyMd ? bodyMd + '\n' : ''), 'utf8')
    console.log('Wrote', relative(REPO_ROOT, absMd))
    written++

    const legacy = parsed.legacyPath.replace(/^\//, '')
    const redirectAbs = join(REDIRECT_PUBLIC, legacy)
    mkdirSync(dirname(redirectAbs), { recursive: true })
    const target = canonicalPath
    const canonicalUrl = new URL(target, `${SITE_ORIGIN}/`).href
    const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Redirecting…</title>
  <link rel="canonical" href="${canonicalUrl}">
  <meta http-equiv="refresh" content="0;url=${target}">
</head>
<body>
  <p>Moved permanently. <a href="${target}">Continue to the post</a>.</p>
</body>
</html>
`
    writeFileSync(redirectAbs, redirectHtml, 'utf8')
  }

  console.log('\nDone. Posts written:', written, 'entries skipped:', skipped)
  console.log('Redirects written under', relative(REPO_ROOT, REDIRECT_PUBLIC))
}

main()
