window.addEventListener('DOMContentLoaded', function() {
if (document.getElementById("listCon")){
  check();
} else {
  // checkmate();
}
})

// function checkmate() {
//   var mateDiv = document.createElement("div");
//   var dressData = JSON.parse(localStorage["dressData"])
//   mateDiv.name =
// }

function check() {
  var currentDiv = document.getElementsByClassName("container")[0];
  if (JSON.parse(localStorage.getItem("dressData"))[0] == null) {
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
      var iconDB = Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[1]
      var contentDB = Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[2]
      var idDB = Object.values(JSON.parse(localStorage.getItem("dressData"))[i])[0]
      var listDiv = document.createElement("div");
      listDiv.className = "box";
      var listImg = document.createElement("img");
      var listA = document.createElement("a");
      switch (iconDB) {
        case "1":
          listImg.src = "../images/top_icon.png"
          listA.href = "../templates/topShow.html"
          break;

        case "2":
          listImg.src = "../images/bottom_icon.png"
          listA.href = "../templates/topShow.html"
          break;

        case "3":
          listImg.src = "../images/skirt_icon.png"
          listA.href = "../templates/topShow.html"
          break;

        case "4":
          listImg.src = "../images/onepiece_icon.png"
          listA.href = "../templates/topShow.html"
          break;

        case "5":
          listImg.src = "../images/success_icon.png"
          listA.href = "../templates/topShow.html"
          break;

        default:
          break;
      }
      var listSpan = document.createElement("span");
      listSpan.className = "clothlist";
      listSpan.setAttribute("value", idDB);
      var listContent = document.createTextNode(contentDB);
      var listContent2 = document.createTextNode("  (으로)비교하기");
      listSpan.appendChild(listContent);
      listSpan.appendChild(listContent2);
      listA.appendChild(listSpan);



      var delImg = document.createElement("img");
      delImg.className = "deletedate";
      delImg.id = i;
      delImg.src = "../images/nothing.png";
      delImg.addEventListener('click', function (){
        deleteDB(this.id);
      });
      listDiv.appendChild(listImg);
      listDiv.appendChild(listA);
      listDiv.appendChild(delImg);
      currentDiv.appendChild(listDiv);

      function deleteDB(value){
         var arr = JSON.parse(localStorage["dressData"]);
         arr.splice(value, 1);

         var id = 0;
         arr.forEach(value => {
             value.id = id;
             id++;
         });

         localStorage.setItem("dressData", JSON.stringify(arr));
         location.reload();
          listSpan.addEventListener("click", function(){
            console.log(JSON.parse(localStorage.getItem("dressData"))[this.getAttribute("value")]);
    })}
  }
}
}
