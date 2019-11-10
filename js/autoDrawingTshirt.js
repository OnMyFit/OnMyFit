window.addEventListener('DOMContentLoaded', function() {
  check();
})

function check() {
  var currentDiv = document.getElementsByClassName("container")[0];
  if (localStorage.getItem("dressData") === null) {
    var nothingImg = document.createElement("img");
    nothingImg.src = "../images/nothing.png";

    var nothingP = document.createElement("p");
    var nothingContent = document.createTextNode("등록된 옷이 없습니다.");
    nothingP.appendChild(nothingContent);
    var sizeDiv = document.createElement("div");
    sizeDiv.className = "cloth-size";
    var toDressHref = document.createElement("a");
    toDressHref.href = "dress.html"
    var makeButton = document.createElement("button");
    makeButton.type = "button";
    var toDressContent = document.createTextNode("새 기준옷 만들기");
    makeButton.appendChild(toDressContent)
    toDressHref.appendChild(makeButton);
    sizeDiv.appendChild(toDressHref);
    currentDiv.appendChild(nothingImg);
    currentDiv.appendChild(nothingP);
    currentDiv.appendChild(sizeDiv);

  } else {
    var dressData = JSON.parse(localStorage["dressData"])
    for (var i = 0; i < dressData.length; i++) {
      console.log(dressData.length)
      var iconDB = Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[1]
      var contentDB = Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[2]
      var idDB = Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[0]
      var listDiv = document.createElement("div");
      listDiv.className = "box";
      if (i%2 != 0){
        listDiv.style="margin-left: 180px;"
      } else {
        listDiv.style="margin-left: 40px;"
      };
      var listImg = document.createElement("img");
      switch (iconDB) {
        case "1":
          listImg.src = "../images/top_icon.png"
          break;

        case "2":
          listImg.src = "../images/bottom_icon.png"
          break;

        case "3":
          listImg.src = "../images/skirt_icon.png"
          break;

        case "4":
          listImg.src = "../images/onepiece_icon.png"
          break;

        case "5":
          listImg.src = "../images/success_icon.png"
          break;

        default:
          break;
      }
      var listA = document.createElement("a");
      listA.href = "../templates/index.html";
      var listSpan = document.createElement("span");
      listSpan.className = "clothlist";
      listSpan.setAttribute("value", idDB);
      var listContent = document.createTextNode(contentDB);
      listSpan.appendChild(listContent);
      var delImg = document.createElement("img");
      delImg.className = "deletedate";
      delImg.src = "../images/nothing.png";
      listA.appendChild(listSpan);
      listDiv.appendChild(listImg);
      listDiv.appendChild(listA);
      listDiv.appendChild(delImg);
      currentDiv.appendChild(listDiv);

      listSpan.addEventListener("click", function(){

        console.log(JSON.parse(localStorage.getItem("dressData"))[this.getAttribute("value")]);
      })
    }
  }
}

    // Object.values(JSON.parse(localStorage.getItem("dressData"))[0]);
    // Object.keys(JSON.parse(localStorage.getItem("dressData"))[0]);
