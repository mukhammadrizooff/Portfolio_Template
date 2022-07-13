const menu = document.querySelector('#menu-container');
const closeButton = document.querySelector('.close-btn');
const hamburger = document.querySelector('#hamburger-btn');
const body = document.querySelector('body');
const anchorTags = document.querySelectorAll('.mobile-menu-ul li');

function openMenuIcon() {
  menu.classList.add('visible');
  body.classList.add('overflow-hidden');
}

function closeMenuIcon() {
  menu.classList.remove('visible');
  body.classList.remove('overflow-hidden');
}

hamburger.addEventListener('click', openMenuIcon);
closeButton.addEventListener('click', closeMenuIcon);
anchorTags.forEach((link) => {
  link.addEventListener('click', closeMenuIcon);
});

// Project Objects

const projectObjects = [
  {
    name: 'Awesome Books',
    description:
      'In this project, I will build a basic website that allows users to add/remove books from a list.',
    descriptionPopup:
      ' I will achieve that by using JavaScript objects , arrays, modules and install webpack. I will also need to dynamically modify the DOM and add basic events.',
    image: 'images/projects/awesome-books.png',
    languages: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://mukhammadrizooff.github.io/Awesome-books/',
    source: 'https://github.com/mukhammadrizooff/Awesome-books',
  },
  {
    name: 'G20 Bali Summit',
    description:
      'The 2022 G20 Bali summit is the upcoming seventeenth meeting of Group of Twenty (G20), the summit scheduled to take place in Bali, Indonesia, in 2022.',
    descriptionPopup:
      'In this project, I built the 2020 G20 Summit’s website using a style with ECMAScript 6 functionalities and a sleek design. It has Desktop and Mobile version.',
    image: 'images/g-20.png',
    languages: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://mukhammadrizooff.github.io/2022-G20-Bali-summit/',
    source: 'https://github.com/mukhammadrizooff/2022-G20-Bali-summit',
  },
  {
    name: 'COVID-19',
    description:
      'ABOUT COVID-19: The first symptoms of the virus appeared on December 31, 2019 in Wuhan, China. Since then, the number of infections has increased across the continent and around the world. According to the latest data, the situation in China has reached 43 new cases since Thursday. In total, 4976 people were infected with the virus.',
    descriptionPopup:
      'In this project, you can see the latest updated data on people infected with the COVID-19 virus in continental states. And this project was built using JavaScript, React and Redux.',
    image: 'images/covid-19.png',
    languages: ['React', 'Redux', 'HTML&CSS', 'javaScript'],
    liveVersion: 'https://mukhammadrizooff-covid-19.netlify.app/',
    source: 'https://github.com/mukhammadrizooff/COVID-19',
  },
  {
    name: 'Pay Modus',
    description:
      'The Pay Modus App is going to be helpful to track your expenses and transactions.',
    descriptionPopup:
      'The Pay Modus App is going to be helpful to track your expenses and transactions.',
    image: 'images/pay-modus.png',
    languages: ['PostgresSQL', 'Ruby on rails', 'HTML&CSS', 'javaScript'],
    liveVersion: 'https://pay-modus-mukhammadrizooff.herokuapp.com/',
    source: 'https://github.com/mukhammadrizooff/Budget-app',
  },
];

function createCard(element) {
  return `
<figure class="snapshoot">
  <img src="${element.image}" alt="${element.name} project image">
</figure>
<section class="works__left-block">
  <div class="works__primary-text">
    <h3 class="works__project-title">${element.name}</h3>
    <div class="frame-2">
      <span class="client">CANOPY</span>
      <div class="counter"></div>
      <span class="role">Full Stack Dev</span>
      <div class="counter"></div>
      <span class="year">2022</span>
    </div>
  </div>
  <p class="works__primary-par">${element.description}</p>
  <ul class="works__tags">
    <li>${element.languages[0]}</li>
    <li>${element.languages[1]}</li>
    <li>${element.languages[2]}</li>
  </ul>
  <a href="#works_card2" class="btn works__action" id="showModal">See Project</a>
</section>
`;
}

const myProjects = projectObjects.map((element, index) => {
  const article = document.createElement('article');
  article.className = 'works__card';
  if (index % 2 === 1) {
    article.classList.add('card2');
  }
  article.innerHTML = createCard(element);
  return article;
});

const worksSection = document.getElementById('works');

for (let i = 0; i < myProjects.length; i += 1) {
  worksSection.appendChild(myProjects[i]);
}

// Create Modal elements

function createModal(element) {
  return `
    <button class="close-button-2" id="close-button-2">x</button>
    <section class="works_left-block modal_left-block">
      <div class="works__primary-text">
        <h3 class="modal__project-title">${element.name}</h3>
        <div class="frame-2">
          <span class="client">CANOPY</span>
          <div class="counter"></div>
          <span class="role">Full Stack Dev</span>
          <div class="counter"></div>
          <span class="year">2022</span>
        </div>
      </div>
      <figure class="snapshoot-modal">
        <img class="img-modal" src="${element.image}" alt="${element.name} project image">
      </figure>
      <div class="modal__description">
        <p class="modal__primary-par">${element.descriptionPopup}</p>
        <div class="block-r">
          <ul class="works_tags modal_tags">
            <li>${element.languages[0]}</li>
            <li>${element.languages[1]}</li>
            <li>${element.languages[2]}</li>
          </ul>
          <div class="modal-buttons">
            <a target="_blank" href="${element.liveVersion}" class="btn works__action modal-btn">
              See Live
              <img class="modal-icon" src="images/live-Icon.png" alt="live demo icon"/>
            </a>
            <a target="_blank" href="${element.source}" class="btn works__action modal-btn">
              See Source
              <img class="modal-icon git-modal" src="images/github_icon_blue.svg" alt="github icon"/>
            </a>
          </div>
        </div>
      </div>
    </section>
`;
}

const modalBtn = document.querySelectorAll('#showModal');
const modalSection = document.getElementById('modal-container');

function openModal() {
  modalSection.classList.add('show-modal');
  body.classList.add('overflow-hidden');
}

function closeModal() {
  modalSection.classList.remove('show-modal');
  body.classList.remove('overflow-hidden');
  modalSection.innerHTML = '';
}

modalBtn.forEach((element, index) => {
  element.addEventListener('click', () => {
    openModal();
    const modalArticle = document.createElement('article');
    modalArticle.className = 'modal-card';
    modalArticle.innerHTML = createModal(projectObjects[index]);
    modalSection.appendChild(modalArticle);
    const closeModalBtn = document.querySelector('#close-button-2');
    closeModalBtn.addEventListener('click', closeModal);
  });
});

// Validation contact form

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const invalidMsg = document.querySelector('#invalid-msg');
const pattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/;

form.addEventListener('submit', (event) => {
  const emailInput = email.value;
  if (!pattern.test(emailInput)) {
    event.preventDefault();
    invalidMsg.classList.add('showInvalid');
    invalidMsg.textContent = '!!! The content of the email field has to be in lower case !!!';
  } else {
    invalidMsg.classList.remove('showInvalid');
    invalidMsg.innerHTML = '';
  }
});

form.addEventListener('submit', (event) => {
  const emailInput = email.value;
  if (!pattern.test(emailInput)) {
    event.preventDefault();
    invalidMsg.classList.add('showInvalid');
    invalidMsg.textContent = '!!! The content of the email field has to be in lower case !!!';
  } else {
    invalidMsg.classList.remove('showInvalid');
    invalidMsg.innerHTML = '';
  }
});

// Preserve data in the browser
// Variables
const formStorage = document.querySelector('#form');
const emailId = formStorage.querySelector('#email');
const msgId = formStorage.querySelector('#valid-msg');
const nameId = formStorage.querySelector('#username');

const keepInfo = () => {
  const formInfo = {
    name: nameId.value,
    email: emailId.value,
    msg: msgId.value,
  };
  localStorage.setItem('formInfo', JSON.stringify(formInfo));
};

nameId.addEventListener('change', keepInfo);
emailId.addEventListener('change', keepInfo);
msgId.addEventListener('change', keepInfo);

window.addEventListener('load', () => {
  const formInfo = JSON.parse(localStorage.getItem('formInfo'));
  nameId.value = formInfo.name;
  emailId.value = formInfo.email;
  msgId.value = formInfo.msg;
});
