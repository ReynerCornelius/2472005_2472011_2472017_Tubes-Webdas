
function getPageParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get("page") || "home";
}

function showPage() {
  const page = getPageParam();
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

});

