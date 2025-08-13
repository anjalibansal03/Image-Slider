const slides = document.querySelectorAll(".slide");
const pagination = document.querySelector(".pagination");

let counter = 0;
// console.log(slides)


slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
 
// Create dots dynamically
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    counter = index;
    slideImage();
  });
  pagination.appendChild(dot);
});

// Show first active dot
updatePagination();

const goPrev =()=>{
  counter--
  if (counter < 0) {
    counter = slides.length - 1; // go to last slide
  }
  slideImage();
};

const goNext =() =>{
  counter++
  if (counter >= slides.length) {
    counter = 0; // go back to first slide
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
updatePagination();
};

// Update active dot
function updatePagination() {
  document.querySelectorAll(".pagination span").forEach((dot, index) => {
    dot.classList.toggle("active", index === counter);
  });
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    goPrev();
  } else if (e.key === "ArrowRight") {
    goNext();
  }
});
