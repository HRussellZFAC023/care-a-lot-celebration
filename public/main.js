import './style.css'
import { createAndPositionClouds } from './cloud.js'
import { createAndPositionStickers } from './sticker.js';
import { drawArrow, drawCareOMeter } from './care-o-meta.js';
import { createCanvas, drawBackground, drawFrills } from './canvasBg.js';

window.onload = (() => {

  const app = document.querySelector('#app');

  const canvasContainer = createCanvas()
  app.appendChild(canvasContainer);
  resizeAndDrawCanvas();
  window.addEventListener('resize', resizeAndDrawCanvas);

  const clouds = createAndPositionClouds(40);
  clouds.forEach(cloud => app.appendChild(cloud));

  const stickerElements = createAndPositionStickers();
  stickerElements.forEach(sticker => app.appendChild(sticker));

});


let arrowAngle = Math.PI * 2;

export const animateArrow = (canvas, direction) => {
  const angleChange = direction === 'up' ? -0.1 : 0.1;
  const animationInterval = setInterval(() => {
    arrowAngle += angleChange;
    resizeAndDrawCanvas();

    if (arrowAngle <= 0 || arrowAngle >= 2 * Math.PI) {
      clearInterval(animationInterval);
    }
  }, 50);
};



const resizeAndDrawCanvas = () => {
  const canvas = document.querySelector('.canvas');
  const canvasDimensions = canvas.getBoundingClientRect();
  canvas.width = canvasDimensions.width;
  canvas.height = canvasDimensions.height;
  drawBackground(canvas);
  drawFrills(canvas);
  drawCareOMeter(canvas);
  drawArrow(canvas, arrowAngle);
};

