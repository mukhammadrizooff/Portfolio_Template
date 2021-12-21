function main() {
  let menu = document.querySelector("#menu-container");
  let closeButton = document.querySelector(".close-btn");
  let hamburguer = document.querySelector("#humburger-btn");
  let body = document.querySelector("body");
  let anchorTags = document.querySelectorAll(".mobile-menu-ul li");
  
  function openMenuIcon() {
    menu.classList.add("visible");
    body.classList.add("overflow-hidden");
  }

  function closeMenuIcon() {
    menu.classList.remove("visible");
    body.classList.remove("overflow-hidden");
  }

  hamburguer.addEventListener("click", openMenuIcon);
  closeButton.addEventListener("click", closeMenuIcon);
  anchorTags.forEach((link) => {
    link.addEventListener("click", closeMenuIcon);
  });
}

main();
