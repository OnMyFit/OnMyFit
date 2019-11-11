var dressData = JSON.parse(localStorage["dressData"]);
window.addEventListener('DOMContentLoaded', function() {
  navBar();
});

function navBar() {
  var listCn = [];
  // topShow.html
  if (document.getElementById("topnav")) {
    var currentLocation = document.getElementById("topnav");
    for (var i = 0; i < dressData.length; i++) {
      if (Object.values(dressData[i])[1] == 1) {
        listCn.push(Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[0]);
      }
    }
  }

  // bottomShow.html
  if (document.getElementById("bottomnav")) {
    var currentLocation = document.getElementById("bottomnav");
    for (var i = 0; i < dressData.length; i++) {
      if (Object.values(dressData[i])[1] == 2) {
        listCn.push(Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[0]);
      }
    }
  }

  // skirtShow.html
  if (document.getElementById("skirtnav")) {
    var currentLocation = document.getElementById("skirtnav");
    for (var i = 0; i < dressData.length; i++) {
      if (Object.values(dressData[i])[1] == 3) {
        listCn.push(Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[0]);
      }
    }
  }

  // longShow.html
  if (document.getElementById("longnav")) {
    var currentLocation = document.getElementById("longnav");
    for (var i = 0; i < dressData.length; i++) {
      if (Object.values(dressData[i])[1] == 5) {
        listCn.push(Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[0]);
      }
    }
  }

  var cn = 0;
  if (listCn.length < 5) {
    cn = listCn.length;
  } else {
    cn = 5
  }
  for (var i = 0; i < cn; i++) {
    var t = listCn[i]
    var contentDB = Object.values(dressData[t])[2]
    var id_cloth = Object.values(dressData[t])[1]
    var idDB = Object.values(dressData[t])[0]
    var navBarA = document.createElement("a");
    switch (id_cloth) {
      case "1":
        var addr = "topShow.html"
        break;
      case "2":
        var addr = "bottomShow.html"
        break;
      case "3":
        var addr = "skirtShow.html"
        break;
      case "4":
        var addr = "topShow.html"
        break;
      case "5":
        var addr = "longShow.html"
        break;
      default:
        break;
    }
    navBarA.href=addr+"?"+"data"+":"+idDB;
    var navBarContent = document.createTextNode(contentDB);
    navBarA.appendChild(navBarContent);
    navBarA.style = "background-image: linear-gradient(to right, rgb(0, 56, 125), rgb(0, 126, 169));"
    currentLocation.insertAdjacentElement("afterEnd", navBarA);
  }
}
