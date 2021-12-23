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

//Menu bar scroll control

// const header = document.getElementById("header");
// const sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

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


