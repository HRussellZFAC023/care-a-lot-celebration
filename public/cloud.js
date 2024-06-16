import { getRandom } from "./getRandom";

export function createCloud() {
    const colorVariants = ['sunny-yellow', 'lemonade-yellow', 'daffodil-yellow', 'marigold-yellow', 'sunflower-yellow', 'tangerine-yellow', 'apricot-orange', 'pumpkin-orange', 'persimmon-orange', 'coral-red', 'watermelon-red', 'tomato-red', 'strawberry-red', 'raspberry-pink', 'orchid-pink', 'lavender-pink', 'lilac-purple', 'amethyst-purple', 'periwinkle-blue', 'cornflower-blue', 'sky-blue', 'aqua-blue', 'azure-blue', 'light-green', 'mint-green', 'seafoam-green'];
    const colorVariant = colorVariants[getRandom(0, colorVariants.length - 1)];

    const cloud = document.createElement('div');
    cloud.className = `cloud`;
    cloud.style.backgroundColor = `var(--${colorVariant})`;
    const animationDuration = getRandom(4, 8);
    cloud.style.animationDuration = `${animationDuration}s`;

    const puffCount = getRandom(1, 12);
    for (let i = 0; i < puffCount; i++) {
        const puff = document.createElement('div');
        puff.className = `puff`;
        puff.style.backgroundColor = `var(--${colorVariant})`;
        

        puff.style.left = `${getRandom(-50, 50)}%`;
        puff.style.top = `${getRandom(-50, 50)}%`;

        cloud.appendChild(puff);
    }

    return cloud;
}