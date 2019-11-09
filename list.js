window.addEventListener('DOMContentLoaded', function() {
  check();
})

function check() {
  whale.storage.local.get('keyTop', function (result) {
      check = result.keyTop
  });
  var currentDiv = document.getElementsByClassName("container")[0];
  if (check != null) {
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
    
    Object.values(JSON.parse(localStorage.getItem("dressData"))[0]);
    Object.keys(JSON.parse(localStorage.getItem("dressData"))[0]);
    });
  }
}
