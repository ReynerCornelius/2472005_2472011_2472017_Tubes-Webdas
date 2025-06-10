let slideIndex = 1;

function showSlides() {
  const slides = document.getElementsByClassName("slide-fade");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  slideIndex++;
  setTimeout(showSlides, 3000);
}

window.onload = showSlides;
