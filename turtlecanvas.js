const html = `
<style>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}
canvas {
  background-color: white;
  width: min(98vw, 98dvh);
  height: min(98vw, 98dvh);
  border: 1px solid #ccc;
}
</style>
`;
const body = document.createElement("div");
document.body.style.margin = 0;
body.className = "body";
body.innerHTML = html;
document.body.appendChild(body);
const canvas = document.createElement("canvas");
body.appendChild(canvas);
const g = canvas.getContext("2d");
const resize = () => {
  const dpr = devicePixelRatio ?? 1;
  const w = canvas.clientWidth * dpr;
  const h = canvas.clientHeight * dpr;
  const bkw = canvas.width;
  const bkh = canvas.height;
  if (bkw == w && bkh == h) return;
  const bk = g.getImageData(0, 0, bkw, bkh);
  canvas.width = w;
  canvas.height = h;

  const tmp = document.createElement("canvas");
  tmp.width = bkw;
  tmp.height = bkh;
  const gt = tmp.getContext("2d");
  gt.putImageData(bk, 0, 0);

  g.save();
  const scale = w / bkw;
  g.translate(w / 2, h / 2);
  g.scale(w / bkw, h / bkh);
  g.drawImage(tmp, -bkw / 2, -bkh / 2);
  g.restore();

  g.bkx = g.bkx * scale;
  g.bky = g.bky * scale;
};
addEventListener("resize", resize);
resize();
const size = canvas.width;
const cx = x => x / 1000 * canvas.width;
const cy = y => y / 1000 * canvas.height;
const move = (x, y) => {
  g.bkx = cx(x);
  g.bky = cy(y);
};
export const penUp = () => {
  g.enablePen = false;
};
export const penDown = () => {
  g.enablePen = true;
};
export const forward = (u) => {
  u = cx(u);
  const th = g.bkth / 180 * Math.PI;
  const x2 = g.bkx + Math.cos(th) * u;
  const y2 = g.bky + Math.sin(th) * u;
  if (g.enablePen) {
    g.beginPath();
    g.moveTo(g.bkx, g.bky);
    g.lineTo(x2, y2);
    g.stroke();
  }
  g.bkx = x2;
  g.bky = y2;
};
export const backward = (u) => {
  forward(-u);
};
export const right = (dth = 90) => {
  g.bkth += dth;
};
export const left = (dth = 90) => {
  right(-90);
};
export const rotate = (dth) => { // same a right
  right(dth);
};
export const clear = (color) => {
  g.fillStyle = "white";
  g.fillRect(0, 0, canvas.width, canvas.height);
};
export const sleep = (msec) => {
  return new Promise(resolve => setTimeout(resolve, msec));
};
export const random = (n) => {
  return Math.floor(Math.random() * n);
};
export const hue = (h) => { // 0-360
  g.bkh = h;
  g.strokeStyle = `hsl(${g.bkh} ${g.bks} ${g.bkl})`
};
export const satu = (s) => { // 0-100
  g.bks = s;
  g.strokeStyle = `hsl(${g.bkh} ${g.bks} ${g.bkl})`
};
export const light = (l) => { // 0-100
  g.bkl = l;
  g.strokeStyle = `hsl(${g.bkh} ${g.bks} ${g.bkl})`
};
export const getX = () => g.bkx;
export const getY = () => g.bky;
export const getAngle = () => g.bkth;
export const includes = (x = 0, y = 0, w = 1000, h = 1000) => {
  x = cx(x);
  y = cy(y);
  const x2 = cx(x + w);
  const y2 = cy(y + h);
  return g.bkx >= x && g.bkx < x2 && g.bky >= y && g.bky < y2;
};
g.bkx = 0;
g.bky = 0;
g.bkth = -90;
g.bkh = 0;
g.bks = 50;
g.bkl = 50;
g.enablePen = true;
move(500, 500);
