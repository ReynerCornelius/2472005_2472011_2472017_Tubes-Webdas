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


function revealOnScroll() {
    var elements = document.querySelectorAll('.food-item');
    var scrollPosition = window.scrollY + window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var elementTop = el.offsetTop;

      if (scrollPosition > elementTop) {
        el.classList.add('show');
      }
    }
  }

  // Panggil saat scroll dan saat halaman dimuat
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);


  
const audio = document.getElementById("bgMusic");
const playPauseBtn = document.getElementById("playPauseBtn");
const volumeControl = document.getElementById("volumeControl");

let isPlaying = false;

playPauseBtn.addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = "▶";
  } else {
    audio.play();
    playPauseBtn.textContent = "❚❚";
  }
  isPlaying = !isPlaying;
});

volumeControl.addEventListener("input", function () {
  audio.volume = volumeControl.value;
});