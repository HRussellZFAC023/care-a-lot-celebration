export const createCanvas = () => {
    const canvasContainer = document.createElement('div');
    const canvas = document.createElement('canvas');
    canvasContainer.appendChild(canvas);
    canvasContainer.className = 'canvas-container';
    canvas.className = 'canvas';
    return canvasContainer;
};

export const drawBackground = (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ff999e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

export const drawFrills = (canvas) => {
    const ctx = canvas.getContext('2d');
    const frillSpacing = 20;
    const frillRadius = 5;
    const frillColor = '#fa70b5';

    for (let x = frillSpacing; x < canvas.width - frillSpacing; x += frillSpacing) {
        drawFrill(ctx, x, frillSpacing, frillRadius, frillColor);
        drawFrill(ctx, x, canvas.height - frillSpacing, frillRadius, frillColor);
    }

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
