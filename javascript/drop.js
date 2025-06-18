$(document).ready(function(){
    $('#vid').click(function(){
        $('#yt').slideToggle();
    });
    $('#jbahan').click(function(){
        $('#bahan').slideToggle();
    });
    $('#jInstruksi').click(function(){
        $('#instruksi').slideToggle();
    });
});
function toggleNavbar() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("show");
}
