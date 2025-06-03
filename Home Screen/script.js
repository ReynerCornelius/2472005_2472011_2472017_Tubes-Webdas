// Program JS dasar untuk menampilkan konten dari objek pages
const pages = {

  about: `
  <main>
    <div class="container">
      <div class="card-container">
        <div class="card">
          <img src="assets/imgs/profile-reza.webp" alt="Profile Reza" class="profile-img" />
          <h2>Ahmad Reza Aulia Siregar</h2>
          <p>
            I am Ahmad Reza Aulia Siregar. A Web developer, and Junior Pentester. I am currently learning frontend (HTML, CSS and JS) and learning Backend
            (PHP). I am in my 2nd semester at Politeknik Negeri Medan.
          </p>
          <div class="icon-wrapper">
            <a href="https://github.com/RezaAS14" target="_blank"><img src="assets/icons/github.svg" alt="GitHub" /></a>
            <a href="mailto:ahmadrezaauliasiregar@gmail.com" target="_blank">
              <img src="assets/icons/gmail.svg" alt="Mail" />
            </a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/profile-shiddiq.webp" alt="Profile Shiddiq" class="profile-img" />
          <h2>M. Sibawaihi Shiddiq Tarigan</h2>
          <p>
            I'm Shiddiq. With 5 years of experience as a Full Stack Developer, I specialize in creating and optimizing web applications. From front-end design
            to back-end functionality, I handle every aspect of coding with expertise. Based in North Sumatra, I am adept at delivering comprehensive
            solutions for diverse web development needs.
          </p>
          <div class="icon-wrapper">
            <a href="https://github.com/FORDIDODI" target="_blank"><img src="assets/icons/github.svg" alt="GitHub" /></a>
            <a href="mailto:tibbitarigan@gmail.com" target="_blank">
              <img src="assets/icons/gmail.svg" alt="Mail" />
            </a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/profile-farid.webp" alt="Profile Farid" class="profile-img" />
          <h2>Muhammad Farid Yamin</h2>
          <p>
            Hey there! I'm Muhammad Farid Yamin, studying Software Engineering and working as a web developer. I'm from North Sumatra, Indonesia. I actively
            participate in the programming community and always stay up to date with the latest technological developments. I have learned a lot of new
            technologies in the last few years on the Internet.
          </p>
          <div class="icon-wrapper">
            <a href="https://github.com/faridreaming" target="_blank"><img src="assets/icons/github.svg" alt="GitHub" /></a>
            <a href="mailto:muhammad.farid.yamin@gmail.com" target="_blank">
              <img src="assets/icons/gmail.svg" alt="Mail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
  `,
  contact: `
  <main>
    <div class="container">
      <div class="contact">
        <div class="contact-text">
          <h1>Kontak Kami</h1>
          <p>Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami. Kami akan dengan senang hati membantu Anda.</p>
          <a href="https://wa.me/6282273197018" class="btn" target="_blank">Hubungi Kami</a>
        </div>
        <form class="contact-form">
          <h2>Kirim Pertanyaan/Keluhan</h2>
          <p>Kami akan menghubungi anda 1x24 jam setelah data anda kami terima.</p>
          <div class="input-group-wrapper">
            <div class="input-group">
              <label for="name"><h3>Nama Kamu:</h3></label>
              <input type="text" id="name" name="name" placeholder="Nama Lengkap" required />
            </div>
            <div class="input-group">
              <label for="email"><h3>Alamat Email:</h3></label>
              <input type="email" id="email" name="email" placeholder="someone@example.com" required />
            </div>
            <div class="input-group">
              <label for="subject"><h3>Subject Masalah</h3></label>
              <input type="text" id="subject" name="subject" placeholder="Subject" required />
            </div>
            <div class="input-group">
              <label for="keluhan"><h3>Tuliskan Keluhan:</h3></label>
              <textarea id="keluhan" name="keluhan" placeholder="Keluhan Anda" rows="8" required></textarea>
            </div>
            <button class="btn">Kirim Pesan</button>
          </div>
        </form>
      </div>
    </div>
  </main>
  `
};

// Ambil parameter page dari URL
function getPageParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get("page") || "home";
}

// Tampilkan konten ke elemen dengan class .content
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
