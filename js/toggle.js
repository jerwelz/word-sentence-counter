"use strict";

toggleBtn.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");

    const type = toggle.dataset.toggle;

    if (type === "adv__options") {
      advOptionsContainer.classList.toggle("active");
    }

    if (type === "darkmode") {
      darkmodeBody.classList.toggle("darkmode");
    }

    if (type === "advanced") {
      ADV_OPTIONS.classList.toggle("hidden");
    }

    if (type === "extend-input") {
      inputFieldEl.classList.tFoggle("extended");
    }
  });
});

const mobileMenu = document.querySelector(".mobile__menu");
const mobileMenuBarOne = document.querySelector(".bar__one");
const mobileMenuBarTwo = document.querySelector(".bar__two");
const mobileMenuBarThree = document.querySelector(".bar__three");
const mobileMenuContainer = document.querySelector(".mobile__slider");
const mobileSidebar = document.querySelector(".mobile__sidebar");

mobileMenu.addEventListener("click", function () {
  mobileMenuBarOne.classList.toggle("change__mobile__menu");
  mobileMenuBarTwo.classList.toggle("change__mobile__menu");
  mobileMenuBarThree.classList.toggle("change__mobile__menu");

  mobileMenuContainer.classList.toggle("active");
  darkOverlay.classList.toggle("active");
  mobileSidebar.classList.toggle("active");
});

const closeMobileMenu = document.querySelector(".close-menu");
const darkOverlay = document.querySelector(".dark__overlay");

closeMobileMenu.addEventListener("click", function () {
  mobileSidebar.classList.toggle("active");

  darkOverlay.classList.remove("active");
});
