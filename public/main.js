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

  const contentContainer = document.createElement('div');
  const buttonContainer = document.createElement('div');
  contentContainer.className = 'content-container';
  buttonContainer.className = 'button-container';
  const yesButton = createButton('Yes', 'up');
  yesButton.className = 'yes-button';
  const noButton = createButton('No', 'down');
  noButton.className = 'no-button';
  buttonContainer.appendChild(noButton);
  buttonContainer.appendChild(yesButton);

  contentContainer.appendChild(buttonContainer);

  app.appendChild(contentContainer);

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

const createButton = (text, direction) => {
  const button = document.createElement('button');
  button.textContent = text;
  button.onclick = () => animateArrow(document.querySelector('.canvas'), direction);
  return button;
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

