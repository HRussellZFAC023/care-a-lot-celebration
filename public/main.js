import './style.css'
import { createAndPositionClouds } from './cloud.js'
import { createAndPositionStickers } from './sticker.js';
import { drawArrow, drawCareOMeter } from './care-o-meta.js';
import { createCanvas, drawBackground, drawFrills } from './canvasBg.js';
import banner from "./assets/banner.png";


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


console.log(import.meta.env)


const messages = [
  "Mary, would you let me make your post-birthday celebration extra special?",
  "How about we continue the celebration when you're back?",
  "Would you like to extend your birthday with a special day out?",
  "Just us two, creating moments to remember...",
  "It's a date, right? 😊🌹"
];

let currentMessageIndex = 0;


const createPopoverWizard = () => {
  const popover = document.createElement('div');
  popover.className = 'popover-wizard';

  const quote = document.createElement('p');
  quote.className = 'quote';
  quote.textContent = "For each thorn, there's a rosebud... For each twilight - a dawn... For each trial - the strength to carry on, For each storm cloud - a rainbow... For each shadow - the sun... For each parting - sweet memories when sorrow is done.";
  popover.appendChild(quote);

  const form = document.createElement('form');
  form.className = 'date-form';

  const label = document.createElement('label');
  label.textContent = "Mary, you've just made me the happiest! Now, for the cherry on top, when can I steal you away for our date? 🍒";
  label.className = 'date-label';

  const datePickerContainer = document.createElement('div');
  datePickerContainer.className = 'date-picker-container';

  const datePickerInput = document.createElement('input');
  datePickerInput.type = 'date';
  datePickerInput.className = 'date-picker';
  datePickerContainer.appendChild(datePickerInput);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  submitButton.className = 'cute-button submit-button';


  const timeOfDayLabel = document.createElement('label');
  timeOfDayLabel.textContent = "What's the best time for our date? 🌅🌃";
  const timeOfDaySelect = document.createElement('select');
  timeOfDaySelect.className = 'time-of-day-select';
  ['Morning 🌅', 'Evening 🌃'].forEach((time) => {
    const option = document.createElement('option');
    option.value = time;
    option.textContent = time;
    timeOfDaySelect.appendChild(option);
  });

  const foodLabel = document.createElement('label');
  foodLabel.textContent = "What cuisine shall we indulge in? 🍽️";
  const foodSelect = document.createElement('select');
  foodSelect.className = 'food-select';
  ['Korean BBQ 🥩', 'Sushi 🍣', 'Picnic 🧺', 'Italian 🍝', 'French 🥐',].forEach((food) => {
    const option = document.createElement('option');
    option.value = food;
    option.textContent = food;
    foodSelect.appendChild(option);
  });

  const dessertLabel = document.createElement('label');
  dessertLabel.textContent = "Which sweet treat shall we share? 🍨";
  const dessertSelect = document.createElement('select');
  dessertSelect.className = 'dessert-select';
  ['Boba 🧋', 'Churro 🍫', 'Taiyaki 🐟'].forEach((dessert) => {
    const option = document.createElement('option');
    option.value = dessert;
    option.textContent = dessert;
    dessertSelect.appendChild(option);
  });
  const locationLabel = document.createElement('label');
  locationLabel.textContent = "Where shall our magical date take us? 🎠";
  const locationSelect = document.createElement('select');
  locationSelect.className = 'location-select';

  ['Aquarium 🐠', 'Movies 🎬', 'Park 🌳', 'Coffee Shop ☕', 'Exhibition 🖼️', 'Rooftop Bar 🍸', 'Helicopter Tour 🚁', 'Theme Park 🎡', 'Shopping 🛍️'].forEach((location) => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    locationSelect.appendChild(option);
  });

  form.appendChild(label);
  form.appendChild(datePickerContainer);
  form.appendChild(timeOfDayLabel);
  form.appendChild(timeOfDaySelect);
  form.appendChild(foodLabel);
  form.appendChild(foodSelect);
  form.appendChild(dessertLabel);
  form.appendChild(dessertSelect);
  form.appendChild(locationLabel);
  form.appendChild(locationSelect);
  form.appendChild(submitButton);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formValues = {
      date: datePickerInput.value,
      timeOfDay: timeOfDaySelect.value,
      cuisine: foodSelect.value,
      dessert: dessertSelect.value,
      location: locationSelect.value
    };

    console.log('Form values:', formValues);

    try {
      const docRef = await addDoc(collection(db, "responses"), formValues);
      console.log("Document written with ID: ", docRef.id);
      popover.classList.add('fade-out');

      const heartDiv = document.createElement('div');
      heartDiv.textContent = '💌';
      heartDiv.style.position = 'fixed';
      heartDiv.style.left = 'calc(50% - 25px)';
      heartDiv.style.top = 'calc(50% - 25px)';
      heartDiv.style.fontSize = '50px';
      heartDiv.style.zIndex = '9999';
      heartDiv.style.animation = 'growAndFade 2s forwards';
      document.body.appendChild(heartDiv);

      setTimeout(() => {
        popover.remove();
        heartDiv.remove();
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  });

  popover.appendChild(form);

  return popover;
};


const displayBirthdayMessage = () => {
  if (currentMessageIndex < messages.length) {
    const message = messages[currentMessageIndex];
    document.querySelector('.message').textContent = message;
    currentMessageIndex++;
  } else {
    const popover = document.querySelector('.popover-wizard');
    if (!popover) {
      const popoverWizard = createPopoverWizard();
      document.querySelector('#app').appendChild(popoverWizard);
    }
  }
};

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
  const stopAngle = startAngle * 3 + 0.3 * 6;

  const angleChange = direction === 'up' ? upAngleChange : downAngleChange;
  arrowAngle += angleChange;


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

      if (arrowAngle >= stopAngle) {
        arrowAngle = messageDisplayAngle;

        clearInterval(interval);
        interval = null;
      }
    }, 10);
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