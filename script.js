
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

