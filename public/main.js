import './style.css'
import { createCloud } from './cloud.js'
import { createAndPositionStickers } from './sticker.js';

window.onload = (() => {

  const app = document.querySelector('#app');
  const canvas = createCanvas()
  app.appendChild(canvas);
  resizeAndDrawCanvas();
  window.addEventListener('resize', resizeAndDrawCanvas);

  const clouds = createAndPositionClouds(40);
  clouds.forEach(cloud => app.appendChild(cloud));

  const stickerElements = createAndPositionStickers();
  stickerElements.forEach(sticker => app.appendChild(sticker));


 
});



const resizeAndDrawCanvas = () => {
  const canvas = document.querySelector('.canvas');
  const canvasDimensions = canvas.getBoundingClientRect();
  canvas.width = canvasDimensions.width;
  canvas.height = canvasDimensions.height;
  drawBackground(canvas);
  drawFrills(canvas);
};

const createCanvas = () => {
  const canvasContainer = document.createElement('div');
  const canvas = document.createElement('canvas');
  canvasContainer.appendChild(canvas);
  canvasContainer.className = 'canvas-container';
  canvas.className = 'canvas';
  return canvasContainer;
};

const drawBackground = (canvas) => {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ff999e'; // light Pink
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const drawFrills = (canvas) => {
  const ctx = canvas.getContext('2d');
  const frillSpacing = 20;
  const frillRadius = 5;
  const frillColor = '#fa70b5'; // Orchid Pink

  // Draw top and bottom frills
  for (let x = frillSpacing; x < canvas.width - frillSpacing; x += frillSpacing) {
    drawFrill(ctx, x, frillSpacing, frillRadius, frillColor);
    drawFrill(ctx, x, canvas.height - frillSpacing, frillRadius, frillColor);
  }

  // Draw left and right frills
  for (let y = frillSpacing; y < canvas.height - frillSpacing; y += frillSpacing) {
    drawFrill(ctx, frillSpacing, y, frillRadius, frillColor);
    drawFrill(ctx, canvas.width - frillSpacing, y, frillRadius, frillColor);
  }
};


const drawFrill = (ctx, x, y, radius, color) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
};

const createAndPositionClouds = (totalClouds) => {
  const clouds = [];

  for (let i = 0; i < totalClouds; i++) {
    const cloud = createCloud();
    clouds.push(cloud);
  }

  const positionClouds = () => {
    const aspectRatio = window.innerHeight / window.innerWidth;
    let edgeCloudsHorizontal, edgeCloudsVertical;

    if (aspectRatio > 1) {
      edgeCloudsVertical = Math.round(totalClouds / 3);
      edgeCloudsHorizontal = (totalClouds - edgeCloudsVertical * 2) / 2;
    } else {
      edgeCloudsHorizontal = Math.round(totalClouds / 3);
      edgeCloudsVertical = (totalClouds - edgeCloudsHorizontal * 2) / 2;
    }
    clouds.forEach((cloud, i) => {

      if (i < edgeCloudsHorizontal) {
        cloud.style.top = '0';
        cloud.style.left = `${(i / edgeCloudsHorizontal) * 100}%`;
        cloud.style.right = '';
        cloud.style.bottom = '';
      } else if (i < edgeCloudsHorizontal + edgeCloudsVertical) {
        cloud.style.top = `${((i - edgeCloudsHorizontal) / edgeCloudsVertical) * 100}%`;
        cloud.style.right = '0';
        cloud.style.left = '';
        cloud.style.bottom = '';
      } else if (i < edgeCloudsHorizontal * 2 + edgeCloudsVertical) {
        cloud.style.bottom = '0';
        cloud.style.left = `${((i - edgeCloudsHorizontal - edgeCloudsVertical) / edgeCloudsHorizontal) * 100}%`;
        cloud.style.top = '';
        cloud.style.right = '';
      } else {
        cloud.style.top = `${((i - edgeCloudsHorizontal * 2 - edgeCloudsVertical) / edgeCloudsVertical) * 100}%`;
        cloud.style.left = '0';
        cloud.style.right = '';
        cloud.style.bottom = '';
      }
    });
  };
  window.addEventListener('resize', positionClouds);
  positionClouds();
  return clouds;
};

