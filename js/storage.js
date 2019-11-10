class Top {
  constructor(id, cloth_id, top_name, top_chest, top_arm, top_shoulder, top_height) {
    this.id = id;
    this.cloth_id = cloth_id;
    this.top_name = top_name;
    this.top_chest = top_chest;
    this.top_arm = top_arm;
    this.top_shoulder = top_shoulder;
    this.top_height = top_height;
  }
}

class Bottom {
  constructor(id, cloth_id, bottom_name, bottom_edge, bottom_waist, bottom_under, bottom_thigh, bottom_height) {
    this.id = id;
    this.cloth_id = cloth_id;
    this.bottom_name = bottom_name;
    this.bottom_edge = bottom_edge;
    this.bottom_waist = bottom_waist;
    this.bottom_under = bottom_under;
    this.bottom_thigh = bottom_thigh;
    this.bottom_height = bottom_height;
  }
}

class Skirt {
  constructor(id, cloth_id, skirt_name, skirt_edge, skirt_waist, skirt_height) {
    this.id = id;
    this.cloth_id = cloth_id;
    this.skirt_name = skirt_name;
    this.skirt_edge = skirt_edge;
    this.skirt_waist = skirt_waist;
    this.skirt_height = skirt_height;
  }
}

class Onepiece {
  constructor(id, cloth_id, onepiece_name, onepiece_Chest, onepiece_shoulder, onepiece_arm, onepiece_heigth) {
    this.id = id;
    this.cloth_id = cloth_id;
    this.onepiece_name = onepiece_name;
    this.onepiece_Chest = onepiece_Chest;
    this.onepiece_shoulder = onepiece_shoulder;
    this.onepiece_arm = onepiece_arm;
    this.onepiece_heigth = onepiece_heigth;
  }
}

class Long {
  constructor(id, cloth_id, longDress_name, longDress_Chest, longDress_shoulder, longDress_arm, longDress_edge, longDress_height, longDress_waist) {
    this.id = id;
    this.cloth_id = cloth_id;
    this.longDress_name = longDress_name;
    this.longDress_Chest = longDress_Chest;
    this.longDress_shoulder = longDress_shoulder;
    this.longDress_arm = longDress_arm;
    this.longDress_edge = longDress_edge;
    this.longDress_height = longDress_height;
    this.longDress_waist = longDress_waist;
  }
}



var button_delete = document.getElementById("button_delete");
button_delete.addEventListener("click", deleteDB);
function deleteDB(value) {
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


var uploadData = document.getElementById("upload");
uploadData.addEventListener("click", function() {
  var s = document.getElementsByClassName("size")[0].getAttributeNode("value").value;
  console.log(s);
  var dressData;
  try {
    dressData = JSON.parse(localStorage["dressData"]);
  } catch (e) {
    dressData = new Array();
  }
  switch (s) {
    case "1":
      var top_name = document.getElementById("top_name").value;
      var top_chest = document.getElementById("top_chest").value;
      var top_shoulder = document.getElementById("top_shoulder").value;
      var top_arm = document.getElementById("top_arm").value;
      var top_height = document.getElementById("top_height").value;

      if (top_name == "" || top_chest == "" || top_shoulder == "" || top_arm == "" || top_height == "") {
        alert("빈칸을 채워주세요 !")
      } else {
        insertTopData(top_name, top_chest, top_shoulder, top_arm, top_height);

        function insertTopData(top_name, top_chest, top_shoulder, top_arm, top_height) {
          var topItem = new Top(dressData.length, s, top_name, top_chest, top_arm, top_shoulder, top_height);
          dressData.push(topItem);
        }
      }
      break;

      case "2":
        var bottom_name = document.getElementById("bottom_name").value;
        var bottom_edge = document.getElementById("bottom_edge").value;
        var bottom_waist = document.getElementById("bottom_waist").value;
        var bottom_under = document.getElementById("bottom_under").value;
        var bottom_thigh = document.getElementById("bottom_thigh").value;
        var bottom_height = document.getElementById("bottom_height").value;

        if (bottom_name == "" || bottom_edge == "" || bottom_waist == "" || bottom_under == "" || bottom_thigh == "" || bottom_height == "") {
          alert("빈칸을 채워주세요 !")
        } else {
          insertBottomData(bottom_name, bottom_edge, bottom_waist, bottom_under, bottom_thigh, bottom_height);

          function insertBottomData(bottom_name, bottom_edge, bottom_waist, bottom_under, bottom_thigh, bottom_height) {
            var bottomItem = new Bottom(dressData.length, s, bottom_name, bottom_edge, bottom_waist, bottom_under, bottom_thigh, bottom_height);
            dressData.push(bottomItem);
          }
        }
        break;

        case "3":
          var skirt_name = document.getElementById("skirt_name").value;
          var skirt_edge = document.getElementById("skirt_edge").value;
          var skirt_waist = document.getElementById("skirt_waist").value;
          var skirt_height = document.getElementById("skirt_height").value;

          if (skirt_name == "" || skirt_edge == "" || skirt_waist == "" || skirt_height == "") {
            alert("빈칸을 채워주세요 !")
          } else {
            insertSkirtData(skirt_name, skirt_edge, skirt_waist, skirt_height);

            function insertSkirtData(skirt_name, skirt_edge, skirt_waist, skirt_height) {
              var skirtItem = new Skirt(dressData.length, s, skirt_name, skirt_edge, skirt_waist, skirt_height);
              dressData.push(skirtItem);
            }
          }
          break;

          case "4":
            var onepiece_name = document.getElementById("onepiece_name").value;
            var onepiece_Chest = document.getElementById("onepiece_Chest").value;
            var onepiece_shoulder = document.getElementById("onepiece_shoulder").value;
            var onepiece_arm = document.getElementById("onepiece_arm").value;
            var onepiece_heigth = document.getElementById("onepiece_heigth").value;

            if (onepiece_name == "" || onepiece_Chest == "" || onepiece_shoulder == "" || onepiece_arm == "" || onepiece_heigth == "") {
              alert("빈칸을 채워주세요 !")
            } else {
              insertOnepieceData(onepiece_name, onepiece_Chest, onepiece_shoulder, onepiece_arm, onepiece_heigth);

              function insertOnepieceData(onepiece_name, onepiece_Chest, onepiece_shoulder, onepiece_arm, onepiece_heigth) {
                var onepieceItem = new Onepiece(dressData.length, s, onepiece_name, onepiece_Chest, onepiece_shoulder, onepiece_arm, onepiece_heigth);
                dressData.push(onepieceItem);
              }
            }
            break;

            case "5":
              var longDress_name = document.getElementById("longDress_name").value;
              var longDress_Chest = document.getElementById("longDress_Chest").value;
              var longDress_shoulder = document.getElementById("longDress_shoulder").value;
              var longDress_arm = document.getElementById("longDress_arm").value;
              var longDress_edge = document.getElementById("longDress_edge").value;
              var longDress_height = document.getElementById("longDress_height").value;
              var longDress_waist = document.getElementById("longDress_waist").value;

              if (longDress_name == "" || longDress_Chest == "" || longDress_shoulder == "" || longDress_arm == "" || longDress_edge == "" || longDress_height == "" || longDress_waist == "") {
                alert("빈칸을 채워주세요 !")
              } else {
                insertLongData(longDress_name, longDress_Chest, longDress_shoulder, longDress_arm, longDress_edge, longDress_height, longDress_waist);

                function insertLongData(longDress_name, longDress_Chest, longDress_shoulder, longDress_arm, longDress_edge, longDress_height, longDress_waist) {
                  var longItem = new Long(dressData.length, s, longDress_name, longDress_Chest, longDress_shoulder, longDress_arm, longDress_edge, longDress_height, longDress_waist);
                  dressData.push(longItem);
                }
              }
              break;

              default:
                break;
  }
  localStorage.setItem("dressData", JSON.stringify(dressData));
  // location.reload(); // 설정 필요.
})
