import { mkdir, writeFile, access } from "node:fs/promises";
import { join } from "node:path";
const base = "https://raw.githubusercontent.com/Imti420/dino-legend/main/public/sprites";
const names = ["2x-trex.png","2x-cloud.png","2x-horizon.png","2x-obstacle-large.png","2x-obstacle-small.png","2x-restart.png"];
const dir = join(process.cwd(), "public", "sprites");
await mkdir(dir, { recursive: true });
for (const n of names) {
  const dest = join(dir, n);
  try { await access(dest); continue; } catch {}
  const res = await fetch(`${base}/${n}`);
  if (!res.ok) { console.warn("sprite miss", n); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log("fetched", n);
}
