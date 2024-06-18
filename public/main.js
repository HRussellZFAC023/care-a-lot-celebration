import './style.css'
import { createAndPositionClouds } from './cloud.js'
import { createAndPositionStickers } from './sticker.js';
import { drawArrow, drawCareOMeter } from './care-o-meta.js';
import { createCanvas, drawBackground, drawFrills } from './canvasBg.js';
import banner from "./assets/banner.png";
const messages = [
  "Mary, would you let me make your post-birthday celebration extra special?",
  "How about we continue the birthday celebration when you're back?",
  "Can I have the honor of celebrating your birthday with a belated surprise?",
  "Would you like to extend your birthday celebration with a special day out?",
  "Your birthday might be over, but the celebration doesn't have to be. Shall we?",
  "How about a post-birthday adventure together?"
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
  // Display the first message when the page loads
  displayBirthdayMessage();
});


let arrowAngle = Math.PI * 2;
export const animateArrow = (canvas, direction) => {
  const angleChange = direction === 'up' ? 0.3 : -0.3;



  arrowAngle += angleChange;


  if (arrowAngle <= (Math.PI * 2) - 0.3 * 3) {
    console.log("show tiktok");
    document.querySelector('.tiktok-embed').style.display = 'block';
    arrowAngle = Math.PI * 2;
  }
  resizeAndDrawCanvas();



};

const createButton = (text, direction) => {
  const button = document.createElement('button');
  button.textContent = text;
  if (text === 'Yes') {
    button.onclick = () => {
      animateArrow(document.querySelector('.canvas'), direction);
      displayBirthdayMessage();
    };
  } else {
    button.onclick = () => animateArrow(document.querySelector('.canvas'), direction);
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