// LIKE tombol beef nopdle
var like1 = document.getElementById("like1");
var count1 = 0;
like1.onclick = function() {
    count1++;
    like1.textContent = "❤️ Like (" + count1 + ")";
};
// LIKE tombol drunken chicken
var like2 = document.getElementById("like2");
var count2 = 0;
like2.onclick = function() {
    count2++;
    like2.textContent = "❤️ Like (" + count2 + ")";
};
// LIKE tombol minced pork 
var like3 = document.getElementById("like3");
var count3 = 0;
like3.onclick = function() {
    count3++;
    like3.textContent = "❤️ Like (" + count3 + ")";
};
// LIKE tombol slender oyster noodle
var like4 = document.getElementById("like4");
var count4 = 0;
like4.onclick = function() {
    count4++;
    like4.textContent = "❤️ Like (" + count4 + ")";
};
// LIKE tombol soup dumplings
var like5 = document.getElementById("like5");
var count5 = 0;
like5.onclick = function() {
    count5++;
    like5.textContent = "❤️ Like (" + count5 + ")";
};
// SHARE tombol pakai loop karena akan ada pembuatan input sementara untuk menyalin link lalu input tersebut akan dihapus setelah disalin
var shareButtons = document.getElementsByClassName("share");
for (var j = 0; j < shareButtons.length; j++) {
    shareButtons[j].onclick = function() {
        var input = document.createElement("input");
        input.value = window.location.href;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        alert("Link berhasil disalin!");
  };
}