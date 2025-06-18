window.addEventListener('message', function(event) {
    if (event.data.action === 'home') {
    window.location.href = '/taiwan_food.html';
    }
});
window.addEventListener('message', function(event) {
    if (event.data.action === 'resep') {
    window.location.href = '/resep/re.html';
    }
});
window.addEventListener('message', function(event) {
    if (event.data.action === 'contact') {
    window.location.href = '/contact us/contactus.html';
    }
});
window.addEventListener('message', function(event) {
    if (event.data.action === 'about') {
    window.location.href = '/aboutus/about_us.html';
    }
});
window.addEventListener('message', function(event) {
    if (event.data.action === 'detail') {
    window.location.href = 'detail.html';
    }
});
    window.addEventListener('message', function(event) {
    if (event.data.action === 'minced') {
    window.location.href = '/resep/Minced.html';
    }
});
window.addEventListener('message', function(event) {
    if (event.data.action === 'soup') {
    window.location.href = '/resep/Soup.html';
    }
});
window.addEventListener('message', function(event) {
    if (event.data.action === 'oyster') {
    window.location.href = '/resep/slender.html';
    }
});
window.addEventListener('message', function(event) {
    if (event.data.action === 'beefnoodle') {
    window.location.href = '/resep/Beef-Noodles.html';
    }
});
window.addEventListener('message', function(event) {
    if (event.data.action === 'drunken') {
    window.location.href = '/resep/Drunken.html';
    }
});
function toggleNavbar() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("show");
}