import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';

const width = 1920;
const height = 1080;
const frames = 120;
const outDir = './public/sequence';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function easeInOut(t) {
  return t * t * (3.0 - 2.0 * t);
}

for (let i = 0; i < frames; i++) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#050505';
  ctx.fillRect(0, 0, width, height);

  let progress = 0;
  if (i >= 20 && i <= 100) {
    progress = easeInOut((i - 20) / 80.0);
  } else if (i > 100) {
    progress = 1;
  }

  const cx = width / 2;
  const cy = height / 2;

  // Headband (Arc)
  const hbY = cy - 150 - (progress * 200);
  ctx.beginPath();
  ctx.arc(cx, hbY, 120, Math.PI, 0); // half circle ending at 0 rad (right), starting at PI (left)
  ctx.strokeStyle = '#1e1e23';
  ctx.lineWidth = 24;
  ctx.stroke();

  // Spread for earcups
  const spread = progress * 400;
  const leftX = cx - 130 - spread;
  const rightX = cx + 130 + spread;

  // Left earcup
  ctx.beginPath();
  ctx.ellipse(leftX - 10, cy, 40, 90, 0, 0, 2 * Math.PI);
  ctx.fillStyle = '#0f0f12';
  ctx.fill();
  ctx.strokeStyle = '#28282d';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Left driver
  const driverLX = leftX - (progress * 150);
  ctx.beginPath();
  ctx.ellipse(driverLX - 10, cy, 20, 60, 0, 0, 2 * Math.PI);
  ctx.fillStyle = '#0a0a0c';
  ctx.fill();
  ctx.strokeStyle = `rgba(0, 80, 255, ${progress})`;
  ctx.lineWidth = 3;
  ctx.stroke();

  // Left Mic board
  const micLX = driverLX - (progress * 100);
  if (progress > 0) {
    ctx.beginPath();
    ctx.ellipse(micLX - 5, cy, 5, 20, 0, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(0, 214, 255, ${progress * 0.8})`;
    ctx.fill();
  }

  // Right earcup
  ctx.beginPath();
  ctx.ellipse(rightX + 10, cy, 40, 90, 0, 0, 2 * Math.PI);
  ctx.fillStyle = '#0f0f12';
  ctx.fill();
  ctx.strokeStyle = '#28282d';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Right driver
  const driverRX = rightX + (progress * 150);
  ctx.beginPath();
  ctx.ellipse(driverRX + 10, cy, 20, 60, 0, 0, 2 * Math.PI);
  ctx.fillStyle = '#0a0a0c';
  ctx.fill();
  ctx.strokeStyle = `rgba(0, 80, 255, ${progress})`;
  ctx.lineWidth = 3;
  ctx.stroke();

  // Right Mic board
  const micRX = driverRX + (progress * 100);
  if (progress > 0) {
    ctx.beginPath();
    ctx.ellipse(micRX + 5, cy, 5, 20, 0, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(0, 214, 255, ${progress * 0.8})`;
    ctx.fill();
  }

  const filename = `frame_${i.toString().padStart(4, '0')}.jpg`;
  const outPath = path.join(outDir, filename);
  
  // Write to file
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.8 });
  fs.writeFileSync(outPath, buffer);
  
  if (i % 20 === 0) {
    console.log(`Generated ${filename}`);
  }
}
console.log('Done generating 120 frames in JS.');
