import { getRandom } from "./getRandom";
import sticker1 from './assets/sticker1.png';
import sticker2 from './assets/sticker2.png';
import sticker3 from './assets/sticker3.png';
import sticker4 from './assets/sticker4.png';

export const createAndPositionStickers = () => {
    let stickers = [sticker1, sticker2, sticker3, sticker4];
    const stickerElements = [];

    stickers = stickers.sort(() => Math.random() - 0.5);

    const positionStickers = (index, img) => {
        let positions;
        if (window.innerWidth <= 768) {
            positions = [
                { left: getRandom(0, window.innerWidth - img.width), top: 0 },
                { left: window.innerWidth - img.width, top: getRandom(0, window.innerHeight - img.height) },
                { left: getRandom(0, window.innerWidth - img.width), top: window.innerHeight - img.height },
                { left: 0, top: getRandom(0, window.innerHeight - img.height) }
            ];
        } else {
            const outerThirdWidth = window.innerWidth / 3;
            const outerThirdHeight = window.innerHeight / 3;
            positions = [
                { left: getRandom(0, outerThirdWidth - img.width), top: getRandom(0, outerThirdHeight - img.height) },
                { left: getRandom(2 * outerThirdWidth, window.innerWidth - 2 * img.width), top: getRandom(0, outerThirdHeight - img.height) },
                { left: getRandom(0, outerThirdWidth - img.width), top: getRandom(2 * outerThirdHeight, window.innerHeight - 2 * img.height) },
                { left: getRandom(2 * outerThirdWidth, window.innerWidth - 2 * img.width), top: getRandom(2 * outerThirdHeight, window.innerHeight - 2 * img.height) }
            ];
        }

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

    window.addEventListener('resize', () => stickers.forEach((sticker, index) => positionStickers(index, stickerElements[index])));

    return stickerElements;
};