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



export const createAndPositionClouds = (totalClouds) => {
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

