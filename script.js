
function getPageParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get("page") || "home";
}

function showPage() {
  const page = getPageParam();
  const content = pages.home;
  const titleMap = { home: "Beranda", about: "Tentang Kami", contact: "Kontak" };
  var judul = "Beranda";
if (titleMap[page]) {
  judul = titleMap[page];
}
document.title = "Food Blog | " + judul;

var judulElemen = document.querySelector(".page-title");
if (judulElemen) {
  judulElemen.innerText = judul;
}

var kontenElemen = document.querySelector(".content");
if (kontenElemen) {
  kontenElemen.innerHTML = content;
  // Membalik isi HTML
  var isi = kontenElemen.innerHTML;
  var isiDibalik = isi.split("").reverse().join("");
  kontenElemen.innerHTML = isiDibalik;
}};


document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.animate-section');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          // Add 'show' class when section is visible
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
      });
  }, {
      threshold: 0.1 // Trigger when 10% of element is visible
  });

  // Observe each section
  sections.forEach(section => {
      observer.observe(section);
  });

  // Simple hover effect for food items
  const foodItems = document.querySelectorAll('.food-item');
  foodItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-5px)';
      });
      item.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
      });
  });
});

// Tambahkan pada script.js yang sudah ada
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    function showSlides() {
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = "0";
            dots[i].classList.remove("active");
        }
        
        // Increment slideIndex
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        // Show current slide
        slides[slideIndex-1].style.opacity = "1";
        dots[slideIndex-1].classList.add("active");
        
        // Change slide every 5 seconds
        setTimeout(showSlides, 5000);
    }

    // Initialize slideshow
    showSlides();

    // Add click functionality to dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            slideIndex = i;
            for (let j = 0; j < slides.length; j++) {
                slides[j].style.opacity = "0";
                dots[j].classList.remove("active");
            }
            slides[i].style.opacity = "1";
            dots[i].classList.add("active");
        });
    }

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.opacity = '0';
        });
        
        // Show current slide
        slides[n].style.opacity = '1';
    }
    
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }
    
    // Initialize first slide
    showSlide(currentSlide);
    
    // Auto advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});
});
