// @ts-nocheck
import p0 from "./legend.part0.js";
import p1 from "./legend.part1.js";
import p2 from "./legend.part2.js";
import p3 from "./legend.part3.js";
import p4 from "./legend.part4.js";
import p5 from "./legend.part5.js";

const src = (p0 + p1 + p2 + p3 + p4 + p5).replace("export function mountDinoLegend", "function mountDinoLegend");
const mount = new Function(src + "\n; return mountDinoLegend;")();

export function mountDinoLegend(root) {
  return mount(root);
}
