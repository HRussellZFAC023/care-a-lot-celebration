import './style.css'
import { createAndPositionClouds } from './cloud.js'
import { createAndPositionStickers } from './sticker.js';
import { drawArrow, drawCareOMeter } from './care-o-meta.js';
import { createCanvas, drawBackground, drawFrills } from './canvasBg.js';

window.onload = (() => {
  document.querySelector('.tiktok-embed').style.display = 'none';


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
  buttonContainer.className = 'button-wrapper';
  const yesButton = createButton('Yes', 'up');
  yesButton.className = 'cute-button yes-button';
  const noButton = createButton('No', 'down');
  noButton.className = 'cute-button no-button';
  buttonContainer.appendChild(noButton);
  buttonContainer.appendChild(yesButton);

  contentContainer.appendChild(buttonContainer);

  app.appendChild(contentContainer);

});


let arrowAngle = Math.PI * 2;
let noCount = 0;
export const animateArrow = (canvas, direction) => {
  const angleChange = direction === 'up' ? 0.3 : -0.3;


  const animationInterval = setInterval(() => {
    arrowAngle += angleChange;


    if (arrowAngle <= (Math.PI * 2) - 0.3 * 3) {
      console.log("show tiktok");
      document.querySelector('.tiktok-embed').style.display = 'block';
      arrowAngle = Math.PI * 2;
    }
    resizeAndDrawCanvas();

    clearInterval(animationInterval);
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


document.querySelector('#hideTikTok').addEventListener('click', function () {
  document.querySelector('.tiktok-embed').style.display = 'none';
});