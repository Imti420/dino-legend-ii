// @ts-nocheck
import p0 from "./legend.part0.js";
import p1 from "./legend.part1.js";
import p2 from "./legend.part2.js";
import p3 from "./legend.part3.js";
import p4 from "./legend.part4.js";
import p5 from "./legend.part5.js";
import p6 from "./legend.part6.js";
import p7 from "./legend.part7.js";
import p8 from "./legend.part8.js";
import p9 from "./legend.part9.js";
import p10 from "./legend.part10.js";
import p11 from "./legend.part11.js";
const src = (p0 + p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11).replace("export function mountDinoLegend", "function mountDinoLegend");
const mount = new Function(src + "\n; return mountDinoLegend;")();
export function mountDinoLegend(root) { return mount(root); }
