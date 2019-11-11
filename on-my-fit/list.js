window.addEventListener('DOMContentLoaded', function() {
  check();
})

function check() {
  var currentDiv = document.getElementsByClassName("container")[0];
  if (JSON.parse(localStorage.getItem("dressData")) == null || JSON.parse(localStorage.getItem("dressData")).length == 0) {
    var nothingImg = document.createElement("img");
    nothingImg.src = "nothing.png";

    var nothingP = document.createElement("p");
    var nothingContent = document.createTextNode("등록된 옷이 없습니다.");
    nothingP.appendChild(nothingContent);
    var sizeDiv = document.createElement("div");
    sizeDiv.className = "cloth-size";
    var toDressHref = document.createElement("a");
    toDressHref.href = "dress.html"
    var makeButton = document.createElement("button");
    makeButton.type = "button";
    makeButton.style="background-image: linear-gradient(to right,  rgb(0, 96, 124), rgb(0, 29, 85))";
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
          listImg.src = "top_icon.png"
          listA.href = "topShow.html"
          break;

        case "2":
          listImg.src = "bottom_icon.png"
          listA.href = "bottomShow.html"
          break;

        case "3":
          listImg.src = "skirt_icon.png"
          listA.href = "skirtShow.html"
          break;

        case "4":
          listImg.src = "onepiece_icon.png"
          listA.href = "topShow.html"
          break;

        case "5":
          listImg.src = "success_icon.png"
          listA.href = "longShow.html"
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

      listSpan.addEventListener("click", function(){
        console.log(this.getAttribute("value"));
        var myKey = this.getAttribute("value");
        var id_cloth = JSON.parse(localStorage.getItem("dressData"))[this.getAttribute("value")].cloth_id;
        var addr = ""
        switch (id_cloth) {
          case "1":
            addr = "topShow.html"
            break;
          case "2":
            addr = "bottomShow.html"
            break;
          case "3":
            addr = "skirtShow.html"
            break;
          case "4":
            addr = "topShow.html"
            break;
          case "5": 
            addr = "longShow.html"
            break;
          default:
            break;
        }
        console.log(addr);
        location.href=addr+"?"+"data"+":"+myKey;
        
        //this.getAttribute("value")
        
      })
      //listA.appendChild(listSpan);
//
      //listA.addEventListener("click", function(){
      //  console.log(this.children[0].getAttribute("value"));
      //  var myid = this.children[0].getAttribute("value");
      //  var myKey = JSON.parse(localStorage.getItem("dressData"))[myid].cloth_id;
      //  var nextHref= ""
      //  switch (myKey) {
      //    case "1":
      //      nextHref = "../templates/topShow.html"
      //      break;
      //    case "2":
      //      nextHref = "../templates/bottomShow.html"
      //      break;
      //    case "3":
      //      nextHref = "../templates/skirtShow.html"
      //      break;
      //    case "4":
      //      nextHref = "../templates/topShow.html"
      //      break;
      //    case "5":
      //      nextHref = "../templates/longShow.html"
      //      break;
      //    default:
      //      break;
      //  }
      //  location.href=nextHref+"?"+"data"+":"+myKey;
      //})
//
      var delImg = document.createElement("img");
      delImg.className = "deletedate";
      delImg.id = i;
      delImg.src = "nothing.png";
      delImg.addEventListener('click', function (){
        deleteDB(this.id);
      });
      listDiv.appendChild(listImg);
      listDiv.appendChild(listSpan);
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
          }
  }
}
}
