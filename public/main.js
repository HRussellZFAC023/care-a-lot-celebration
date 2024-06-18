import './style.css'
import { createAndPositionClouds } from './cloud.js'
import { createAndPositionStickers } from './sticker.js';
import { drawArrow, drawCareOMeter } from './care-o-meta.js';
import { createCanvas, drawBackground, drawFrills } from './canvasBg.js';
import banner from "./assets/banner.png";

const messages = [
  "Mary, would you let me make your post-birthday celebration extra special?",
  "How about we continue the celebration when you're back?",
  "Would you like to extend your birthday with a special day out?",
  "Just us two, creating moments to remember...",
  "It's a date, right? 😊🌹"
];

let currentMessageIndex = 0;


const displayBirthdayMessage = () => {
  if (currentMessageIndex < messages.length) {
    const message = messages[currentMessageIndex];
    document.querySelector('.message').textContent = message;
    currentMessageIndex++;
  } else {
    console.log("No more messages");
  }
}

window.onload = (() => {
  const app = document.querySelector('#app');
  const bannerImage = new Image();
  bannerImage.src = banner;
  bannerImage.className = 'banner';
  app.appendChild(bannerImage);

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

  const messageParagraph = document.createElement('p');
  messageParagraph.className = 'message';
  contentContainer.appendChild(messageParagraph);

  const yesButton = createButton('Yes', 'up');
  yesButton.className = 'cute-button yes-button';
  const noButton = createButton('No', 'down');
  noButton.className = 'cute-button no-button';

  buttonContainer.appendChild(noButton);
  buttonContainer.appendChild(yesButton);
  contentContainer.appendChild(buttonContainer);

  app.appendChild(contentContainer);
  displayBirthdayMessage();
});


let arrowAngle = Math.PI * 2;
let interval;
export const animateArrow = (direction) => {
  const upAngleChange = 0.3;
  const downAngleChange = -0.3;
  const startAngle = Math.PI * 2;
  const tikTokDisplayAngle = startAngle - 0.3 * 3;
  const messageDisplayAngle = startAngle + 0.3 * 4;

  const angleChange = direction === 'up' ? upAngleChange : downAngleChange;
  arrowAngle += angleChange;

  if (direction === 'down' && arrowAngle >= messageDisplayAngle) {
    clearInterval(interval);
    interval = null;
    arrowAngle = startAngle;
    resizeAndDrawCanvas();
  }

  if (arrowAngle <= tikTokDisplayAngle) {
    console.log("show tiktok");
    document.querySelector('.tiktok-embed').style.display = 'block';
    arrowAngle = startAngle;
  }

  if (arrowAngle >= messageDisplayAngle) {
    console.log("All messages have been displayed");
    clearInterval(interval);

    interval = setInterval(() => {
      arrowAngle += angleChange;
      resizeAndDrawCanvas();
    }, 10);

    setTimeout(() => {
      clearInterval(interval);
      interval = null;
      arrowAngle = resetAngle;
      resizeAndDrawCanvas();
    }, 1000);
  }

  resizeAndDrawCanvas();
};
const createButton = (text, direction) => {
  const button = document.createElement('button');
  button.textContent = text;
  if (text === 'Yes') {
    button.onclick = () => {
      animateArrow(direction);
      displayBirthdayMessage();
    };
  } else {
    button.onclick = () => animateArrow(direction);
  }
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