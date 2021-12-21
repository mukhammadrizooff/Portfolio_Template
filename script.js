function main() {
  const menu = document.querySelector("#menu-container");
  const closeButton = document.querySelector(".close-btn");
  const hamburger = document.querySelector("#humburger-btn");
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
}

main();
