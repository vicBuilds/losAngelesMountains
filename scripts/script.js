//Smooth Scroll

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

const carousel = document.querySelector(".carousel");
const cardsContainer = carousel.querySelector(".cards-container");
const dots = Array.from(carousel.querySelectorAll(".dot"));
const cardWidth = carousel.offsetWidth / 3;
let currentIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

function updateCarousel() {
  const offset = -currentIndex * cardWidth * 3;
  cardsContainer.style.transform = `translateX(${offset}px)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Initialize carousel
updateCarousel();

const mountainLinks = document.querySelectorAll(".mountain-link");
const mountains = document.querySelectorAll(".mountain");

mountainLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const target = this.dataset.target;
    mountains.forEach((mountain) => {
      mountain.style.display = mountain.id === target ? "block" : "none";
    });
  });
});
