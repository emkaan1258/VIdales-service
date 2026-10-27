// Downloads every image used by the site from the reference origin into public/assets/images
// so the app can run offline. Usage: npm run fetch-assets  (then set VITE_ASSET_BASE=/assets/images)
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { ASSET_PATHS } from '../src/data/assets.js'

const ORIGIN = 'https://securebooksinc.com/assets/images'
for (const rel of ASSET_PATHS) {
  const res = await fetch(`${ORIGIN}/${rel}`)
  if (!res.ok) { console.warn('MISSING', rel, res.status); continue }
  const out = join('public/assets/images', rel)
  await mkdir(dirname(out), { recursive: true })
  await writeFile(out, Buffer.from(await res.arrayBuffer()))
  console.log('saved', rel)
}
