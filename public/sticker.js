import { getRandom } from "./getRandom";

export const createAndPositionStickers = () => {
    let stickers = ['sticker1.png', 'sticker2.png', 'sticker3.png', 'sticker4.png'];
    const stickerElements = [];

    stickers = stickers.sort(() => Math.random() - 0.5);

    const positionStickers = (index, img) => {
        const outerThirdWidth = window.innerWidth / 3;
        const outerThirdHeight = window.innerHeight / 3;

        const positions = [
            { left: getRandom(0, outerThirdWidth - img.width), top: getRandom(0, outerThirdHeight - img.height) },
            { left: getRandom(2 * outerThirdWidth, window.innerWidth - 2 * img.width), top: getRandom(0, outerThirdHeight - img.height) },
            { left: getRandom(0, outerThirdWidth - img.width), top: getRandom(2 * outerThirdHeight, window.innerHeight - 2 * img.height) },
            { left: getRandom(2 * outerThirdWidth, window.innerWidth - 2 * img.width), top: getRandom(2 * outerThirdHeight, window.innerHeight - 2 * img.height) }
        ];


        img.style.left = `${positions[index].left}px`;
        img.style.top = `${positions[index].top}px`;
        img.style.transform = `rotate(${getRandom(-25, 25)}deg)`;

    };

    stickers.forEach((sticker, index) => {
        const img = new Image();
        img.src = sticker;
        img.className = 'sticker';
        img.onload = () => positionStickers(index, img);
        stickerElements.push(img);
    });

    window.addEventListener('resize', positionStickers);

    return stickerElements;
};
