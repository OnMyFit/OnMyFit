var dressData = JSON.parse(localStorage["dressData"]);

var currentDiv = document.getElementsByClassName("sidenav")[0];

window.addEventListener('DOMContentLoaded', function() {
  navBar();
});

// 최대 갯수 8개
function navBar() {
  var brush;
  var cn = 0;
  if (dressData.length < 7) {
    cn = dressData.length;
  } else {
    cn = 7
  }
  for (var i = 0; i < cn; i++) {
    var contentDB = Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[2]
    var idDB = Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[0]

    var navBarA = document.createElement("a");
    var navBarContent = document.createTextNode(contentDB);
    navBarA.appendChild(navBarContent);
    navBarA.id = idDB;
    currentDiv.insertAdjacentElement("afterBegin", navBarA);

    navBarA.addEventListener("click", function() {
      drawing(this.id);
    });
  }
}
