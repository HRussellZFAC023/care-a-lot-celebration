export const drawCareOMeter = (canvas) => {
    const ctx = canvas.getContext('2d');

    drawHeart(ctx, canvas);
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    ctx.font = '24px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Care-O-Meter', canvas.width / 2 - ctx.measureText('Care-O-Meter').width / 2, canvas.height / 4 + 80);

    ctx.shadowColor = 'transparent';


    drawRainbow(ctx, canvas.width, canvas.height);
    drawRaincloud(ctx, canvas.width, canvas.height);
};

function drawHeart(ctx, canvas) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 4);
    ctx.bezierCurveTo(canvas.width / 2 + 160, canvas.height / 4 - 120, canvas.width / 2 + 160, canvas.height / 4 + 120, canvas.width / 2, canvas.height / 4 + 160);
    ctx.bezierCurveTo(canvas.width / 2 - 160, canvas.height / 4 + 120, canvas.width / 2 - 160, canvas.height / 4 - 120, canvas.width / 2, canvas.height / 4);
    ctx.fillStyle = '#ff6161'; // Heart color
    ctx.fill();
}


const drawRainbow = (ctx, canvasWidth, canvasHeight) => {
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

export const drawArrow = (canvas, angle) => {
    const ctx = canvas.getContext('2d');
    const arrowLength = 50;
    const arrowWidth = 10;
    const arrowX = canvas.width / 2;
    const arrowY = canvas.height / 4 + 40;

    ctx.save();
    ctx.translate(arrowX, arrowY);
    ctx.rotate(angle);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -arrowLength);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-arrowWidth / 2, -arrowLength);
    ctx.lineTo(0, -arrowLength - arrowWidth);
    ctx.lineTo(arrowWidth / 2, -arrowLength);
    ctx.fillStyle = '#000000';
    ctx.fill();

    ctx.restore();
};
