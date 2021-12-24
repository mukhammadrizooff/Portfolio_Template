const menu = document.querySelector("#menu-container");
const closeButton = document.querySelector(".close-btn");
const hamburger = document.querySelector("#hamburger-btn");
const body = document.querySelector("body");
const anchorTags = document.querySelectorAll(".mobile-menu-ul li");

function openMenuIcon() {
  menu.classList.add("visible");
  body.classList.add("overflow-hidden");
}

function closeMenuIcon() {
  menu.classList.remove("visible");
  body.classList.remove("overflow-hidden");
}

hamburger.addEventListener("click", openMenuIcon);
closeButton.addEventListener("click", closeMenuIcon);
anchorTags.forEach((link) => {
  link.addEventListener("click", closeMenuIcon);
});

// Project Objects

const projectObjects = [
  {
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    descriptionPopup:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?",
    image: "images/Snapshoot-Portfolio.png",
    languages: ["html", "css", "javaScript"],
    liveVersion: "#",
    source: "#",
  },
  {
    name: "Multi-Post Stories",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    descriptionPopup:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?",
    image: "images/Snapshoot-Portfolio2.png",
    languages: ["html", "Ruby on rails", "css", "javaScript"],
    liveVersion: "#",
    source: "#",
  },
  {
    name: "Facebook 360",
    description:
      "Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    descriptionPopup:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?",
    image: "images/Snapshoot-Portfolio3.png",
    languages: ["html", "Ruby on rails", "css", "javaScript"],
    liveVersion: "#",
    source: "#",
  },
  {
    name: "Uber Navigation",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    descriptionPopup:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?",
    image: "images/Snapshoot-Portfolio4.png",
    languages: ["html", "Ruby on rails", "css", "javaScript"],
    liveVersion: "#",
    source: "#",
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
      <span class="role">Back End Dev</span>
      <div class="counter"></div>
      <span class="year">2015</span>
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
  const article = document.createElement("article");
  article.className = "works__card";
  if (index % 2 === 1) {
    article.classList.add("card2");
  }
  article.innerHTML = createCard(element);
  return article;
});

const worksSection = document.getElementById("works");

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
          <span class="role">Back End Dev</span>
          <div class="counter"></div>
          <span class="year">2015</span>
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
            <a href="${element.liveVersion}" class="btn works__action modal-btn">
              See Live
              <img class="modal-icon" src="images/live-Icon.png" alt="live demo icon"/>
            </a>
            <a href="${element.source}" class="btn works__action modal-btn">
              See Source
              <img class="modal-icon git-modal" src="images/github_icon_blue.svg" alt="github icon"/>
            </a>
          </div>
        </div>
      </div>
    </section>
`;
}

const modalBtn = document.querySelectorAll("#showModal");
const modalSection = document.getElementById("modal-container");

function openModal() {
  modalSection.classList.add("show-modal");
  body.classList.add("overflow-hidden");
}

function closeModal() {
  modalSection.classList.remove("show-modal");
  body.classList.remove("overflow-hidden");
  modalSection.innerHTML = "";
}

modalBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    openModal();
    const modalArticle = document.createElement("article");
    modalArticle.className = "modal-card";
    modalArticle.innerHTML = createModal(projectObjects[index]);
    modalSection.appendChild(modalArticle);
    const closeModalBtn = document.querySelector("#close-button-2");
    closeModalBtn.addEventListener("click", closeModal);
  });
});

// Validation contact form

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const invalidMsg = document.querySelector("#invalid-msg");
const pattern =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/;

form.addEventListener("submit", (event) => {
  const emailInput = email.value;
  if (!pattern.test(emailInput)) {
    event.preventDefault();
    invalidMsg.classList.add("showInvalid");
    invalidMsg.textContent =
      "!!! The content of the email field has to be in lower case !!!";
  } else {
    invalidMsg.classList.remove("showInvalid");
    invalidMsg.innerHTML = "";
  }
});

form.addEventListener("submit", (event) => {
  const emailInput = email.value;
  if (!pattern.test(emailInput)) {
    event.preventDefault();
    invalidMsg.classList.add("showInvalid");
    invalidMsg.textContent =
      "!!! The content of the email field has to be in lower case !!!";
  } else {
    invalidMsg.classList.remove("showInvalid");
    invalidMsg.innerHTML = "";
  }
});

// Preserve data in the browser
// Variables
const formStorage = document.querySelector("#form");
const emailId = formStorage.querySelector("#email");
const msgId = formStorage.querySelector("#valid-msg");
const nameId = formStorage.querySelector("#username");

const keepInfo = () => {
  const formInfo = {
    name: nameId.value,
    email: emailId.value,
    msg: msgId.value,
  };
  localStorage.setItem("formInfo", JSON.stringify(formInfo));
};

nameId.addEventListener("change", keepInfo);
emailId.addEventListener("change", keepInfo);
msgId.addEventListener("change", keepInfo);

window.addEventListener("load", () => {
  const formInfo = JSON.parse(localStorage.getItem("formInfo"));
  nameId.value = formInfo.name;
  emailId.value = formInfo.email;
  msgId.value = formInfo.msg;
});
