// @ts-nocheck
function _u8(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
async function _inflate(u8) {
  const stream = new Blob([u8]).stream().pipeThrough(new DecompressionStream("gzip"));
  return await new Response(stream).text();
}
const FILES = ["/payload/0.txt", "/payload/r0.txt", "/payload/r1.txt", "/payload/r2.txt", "/payload/r3.txt"];
let _mountPromise;
function _resolveMount() {
  if (!_mountPromise) {
    _mountPromise = (async () => {
      const texts = await Promise.all(
        FILES.map((url) =>
          fetch(url).then((r) => {
            if (!r.ok) throw new Error("missing " + url);
            return r.text();
          })
        )
      );
      const b64 = texts.join("").replace(/\s+/g, "");
      let src = await _inflate(_u8(b64));
      src = src.replace("export function mountDinoLegend", "function mountDinoLegend");
      return new Function(src + "\n; return mountDinoLegend;")();
    })();
  }
  return _mountPromise;
}
export function mountDinoLegend(root) {
  let cleanup = () => {};
  let dead = false;
  _resolveMount().then((mount) => {
    if (dead) return;
    cleanup = mount(root) || (() => {});
  }).catch((err) => {
    console.error(err);
    if (root) root.innerHTML = "<p style=\"padding:16px;font-family:monospace\">Legend II failed to load.</p>";
  });
  return () => { dead = true; cleanup(); };
}
