
function getPageParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get("page") || "home";
}

function showPage() {
  const page = getPageParam();
  const content = pages[page] || pages.home;
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
}
}

document.addEventListener("DOMContentLoaded", function() {
  showPage();
  // Dark mode dasar
  var badan = document.body;
  var tombolToggle = document.querySelector('.toggle-dark-mode');
  var modeGelap = localStorage.getItem('darkMode');
  if (modeGelap === 'true') {
    badan.classList.add('dark');
    if (tombolToggle) tombolToggle.src = 'assets/icons/light-mode.svg';
  } else {
    if (tombolToggle) tombolToggle.src = 'assets/icons/dark-mode.svg';
  }
  if (tombolToggle) {
    tombolToggle.addEventListener('click', function() {
      badan.classList.toggle('dark');
      var sedangGelap = badan.classList.contains('dark');
      tombolToggle.src = sedangGelap ? 'assets/icons/light-mode.svg' : 'assets/icons/dark-mode.svg';
      localStorage.setItem('darkMode', sedangGelap);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Get all sections that need animation
  const sections = document.querySelectorAll('.animate-section');
  
  // Create Intersection Observer
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

