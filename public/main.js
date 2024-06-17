import './style.css'
import { createCloud } from './cloud.js'
import { createAndPositionStickers } from './sticker.js';

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

// Function to draw the care-o-meter heart and text
const drawCareOMeter = (canvas) => {
  const ctx = canvas.getContext('2d');
  // Draw the heart
  drawHeart(ctx, canvas);


  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  // Draw the "care-o-meter" text
  ctx.font = '24px Arial';
  ctx.fillStyle = '#ffffff'; // Text color
  ctx.fillText('Care-O-Meter', canvas.width / 2 - ctx.measureText('Care-O-Meter').width / 2, canvas.height / 4 + 80);

  // Reset shadow for other elements
  ctx.shadowColor = 'transparent';

  // Draw the "More Caring" side with a rainbow and sun
  drawRainbowAndSun(ctx, canvas.width, canvas.height);

  // Draw the "Less Caring" side with a raincloud
  drawRaincloud(ctx, canvas.width, canvas.height);
};



const drawRainbowAndSun = (ctx, canvasWidth, canvasHeight) => {
  const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  for (let i = 0; i < rainbowColors.length; i++) {
    ctx.beginPath();
    ctx.arc(canvasWidth * 0.75, canvasHeight * 0.2, 40 + i * 10, Math.PI, 2 * Math.PI, false);
    ctx.strokeStyle = rainbowColors[i];
    ctx.lineWidth = 10;
    ctx.stroke();
  }
};
const drawRaincloud = (ctx, canvasWidth, canvasHeight) => {
  const centerX = canvasWidth * 0.25 - 30;
  const centerY = canvasHeight * 0.2 - 40;
  const radius = 30;
  const startAngle = Math.PI * 0.5;
  const endAngle = Math.PI * 1.5;
  const curveStartX = centerX + 5;
  const curveStartY = centerY + 10;
  const curveControlX = centerX + 5;
  const curveControlY = centerY + 30;
  const curveEndX = centerX + 5 + 5;
  const curveEndY = centerY + 40;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
  ctx.arc(centerX + 30, centerY - 20, radius, Math.PI * 1.15, Math.PI * 2, false);
  ctx.arc(centerX + 60, centerY, radius, endAngle, startAngle, false);
  ctx.closePath();
  ctx.fillStyle = 'grey';
  ctx.fill();

  // Draw the rain with a slight curve
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(curveStartX + i * 10, curveStartY);
    ctx.bezierCurveTo(
      curveControlX + i * 10, curveControlY,
      curveEndX + i * 10, curveControlY,
      curveStartX + i * 10, curveEndY
    );
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.moveTo(centerX + 55, centerY + 10);
  ctx.lineTo(centerX + 65, centerY + 25);
  ctx.lineTo(centerX + 58, centerY + 25);
  ctx.lineTo(centerX + 65, centerY + 40);
  ctx.strokeStyle = 'yellow';
  ctx.lineWidth = 5;
  ctx.stroke();
};

// Function to draw the arrow
const drawArrow = (canvas, angle) => {
  const ctx = canvas.getContext('2d');
  const arrowLength = 50;
  const arrowWidth = 10;
  const arrowX = canvas.width / 2;
  const arrowY = canvas.height / 4 + 40;

  ctx.save();
  ctx.translate(arrowX, arrowY);
  ctx.rotate(angle);

  // Draw the arrow line
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -arrowLength);
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw the arrow head
  ctx.beginPath();
  ctx.moveTo(-arrowWidth / 2, -arrowLength);
  ctx.lineTo(0, -arrowLength - arrowWidth);
  ctx.lineTo(arrowWidth / 2, -arrowLength);
  ctx.fillStyle = '#000000';
  ctx.fill();

  ctx.restore();
};

// Initial arrow angle pointing to the left
let arrowAngle = Math.PI; // 180 degrees

// Function to animate the arrow movement
const animateArrow = (canvas, direction) => {
  const angleChange = direction === 'up' ? -0.1 : 0.1;
  const animationInterval = setInterval(() => {
    arrowAngle += angleChange;
    drawBackground(canvas); // Redraw the background to clear previous arrow
    drawFrills(canvas); // Redraw the frills
    drawArrow(canvas, arrowAngle); // Draw the arrow at the new angle
    drawCareOMeter(canvas); // Redraw the care-o-meter

    // Stop the animation if the arrow points straight up or down
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
  // Call the draw functions to add the care-o-meter and arrow to the canvas
  drawCareOMeter(canvas);
  drawArrow(canvas, Math.PI  *2);
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

function drawHeart(ctx, canvas) {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 4);
  ctx.bezierCurveTo(canvas.width / 2 + 160, canvas.height / 4 - 120, canvas.width / 2 + 160, canvas.height / 4 + 120, canvas.width / 2, canvas.height / 4 + 160);
  ctx.bezierCurveTo(canvas.width / 2 - 160, canvas.height / 4 + 120, canvas.width / 2 - 160, canvas.height / 4 - 120, canvas.width / 2, canvas.height / 4);
  ctx.fillStyle = '#ff6161'; // Heart color
  ctx.fill();
}

