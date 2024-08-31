function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const projectsWrappers = document.querySelectorAll("#projects-wrapper");

  projectsWrappers.forEach((wrapper) => {
    const scrollContainer = wrapper.querySelector("#scroll-container");
    const scrollLeftButton = wrapper.querySelector(".scroll-left");
    const scrollRightButton = wrapper.querySelector(".scroll-right");

    const updateButtonVisibility = () => {
      scrollLeftButton.style.display =
        scrollContainer.scrollLeft > 0 ? "block" : "none";
      scrollRightButton.style.display =
        scrollContainer.scrollWidth - scrollContainer.clientWidth >
        scrollContainer.scrollLeft
          ? "block"
          : "none";
    };

    scrollContainer.addEventListener("scroll", updateButtonVisibility);
    updateButtonVisibility(); // Initial check

    scrollLeftButton.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -200, behavior: "smooth" }); // Adjust scroll amount as needed
    });

    scrollRightButton.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: 200, behavior: "smooth" }); // Adjust scroll amount as needed
    });
  });
});

const textArray = [
  "A Fullstack Developer",
  "An emerging App Developer",
  "A passionate Game Developer",
  "An AI Enthusiast",
];
let currentTextIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 85; // Time in ms between each character
const erasingSpeed = 85; // Time in ms between each character when erasing
const delayBetweenTexts = 1500; // Time to wait before starting the next text

const typedTextSpan = document.getElementById("typed-text");
const cursorSpan = document.querySelector(".cursor");

function type() {
  if (currentCharIndex < textArray[currentTextIndex].length) {
    typedTextSpan.textContent +=
      textArray[currentTextIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (currentCharIndex > 0) {
    typedTextSpan.textContent = textArray[currentTextIndex].substring(
      0,
      currentCharIndex - 1
    );
    currentCharIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    currentTextIndex = (currentTextIndex + 1) % textArray.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, typingSpeed);
});
