export const drawCareOMeter = (canvas) => {
    const ctx = canvas.getContext('2d');

    drawHeart(ctx, canvas);
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    ctx.font = '30px Emilys Candy';
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
    ctx.fillStyle = '#ff6161';
    ctx.strokeStyle = shadeColor('#ff6161', -10);
    ctx.lineWidth = 5;
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

const drawRainbow = (ctx, canvasWidth, canvasHeight) => {
    const pastelRainbowColors = [
        '#FFDFB5',
        '#FFFFB5',
        '#94FBAB',
        '#9EDEFF',
        '#B5B9FF',
        '#FFB5E8',
        '#FF9CEE',
    ];

    const borderWidth = 4;

    for (let i = 0; i < pastelRainbowColors.length; i++) {
        const radius = 40 + i * 10;
        const borderColor = shadeColor(pastelRainbowColors[i], -10);

        ctx.beginPath();
        ctx.arc(canvasWidth * 0.75, canvasHeight * 0.2, radius + borderWidth, Math.PI, 2 * Math.PI, false);
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(canvasWidth * 0.75, canvasHeight * 0.2, radius, Math.PI, 2 * Math.PI, false);
        ctx.strokeStyle = pastelRainbowColors[i];
        ctx.lineWidth = 8;
        ctx.stroke();
    }
};

function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    const RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}

const drawRaincloud = (ctx, canvasWidth, canvasHeight) => {
    const centerX = canvasWidth * 0.25 - 30;
    const centerY = canvasHeight * 0.2 - 40;
    const radius = 30;

    const cloudColor = '#555555';
    const rainColor = '#ADD8E6';
    const lightningColor = '#FFFACD';

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI * 0.5, Math.PI * 1.5, false);
    ctx.arc(centerX + 30, centerY - 20, radius, Math.PI * 1.15, Math.PI * 2, false);
    ctx.arc(centerX + 60, centerY, radius, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.closePath();
    ctx.fillStyle = cloudColor;
    ctx.fill();

    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX + 5 + i * 10, centerY + 10);
        ctx.bezierCurveTo(
            centerX + 5 + i * 10, centerY + 20,
            centerX + 10 + i * 10, centerY + 20,
            centerX + 5 + i * 10, centerY + 30
        );
        ctx.strokeStyle = rainColor;
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(centerX + 55, centerY + 10);
    ctx.lineTo(centerX + 65, centerY + 25);
    ctx.lineTo(centerX + 58, centerY + 25);
    ctx.lineTo(centerX + 65, centerY + 40);
    ctx.strokeStyle = lightningColor;
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
