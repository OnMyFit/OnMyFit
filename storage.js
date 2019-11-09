//
//
// whale.storage.local.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });
//
// whale.storage.local.get(['key'], function(result) {
//   console.log('Value currently is ' + result.key);
// });


// switch (document.getElementById()) {
//   case expression:
//
//     break;
//   default:

// }

var objTop = {};
// var objBottom = {};
// var objSkirt = {};
// var objOnepiece = {};
// var objLong = {};

// guthub browser-lock
var topData = document.getElementById("insertTopData");
var key = objTop.length;

topData.addEventListener("click", function() {
  var top_name = document.getElementById("top_name").value;
  var top_chest = document.getElementById("top_chest").value;
  var top_shoulder = document.getElementById("top_shoulder").value;
  var top_arm = document.getElementById("top_arm").value;
  var top_height = document.getElementById("top_height").value;
  saveTop(key, {top_name, top_chest, top_shoulder, top_arm, top_height});
  console.log(key);
})

function saveTop(key, {top_name, top_chest, top_shoulder, top_arm, top_height}) {
  var item = {
    top_name : top_name,
    top_shoulder : top_shoulder,
    top_chest : top_chest,
    top_arm : top_arm,
    top_height : top_height
  };
  objTop[key] = item;
  chrome.storage.local.set(objTop[key]);
}
//
// function saveBottom(key, item) {
//   var item = {
//     bottom_name,
//     bottom_height,
//     bottom_waist,
//     bottom_thigh,
//     bottom_under,
//     bottom_edge
//   }
//   objBottom[key] = item;
//   chrome.storage.local.set(objBottom, function () {
//   });
// }
//
// function saveSkirt(key, item) {
//   var item = {
//     skirt_name,
//     skirt_height,
//     skirt_waist,
//     skirt_edge
//   }
//   objSkirt[key] = item;
//   chrome.storage.local.set(objSkirt, function () {
//   });
// }
//
// function saveOnepiece(key, item) {
//   var item = {
//     onpiece_name,
//     onepiece_shoulder,
//     onepiece_Chest,
//     onepiece_arm,
//     onepiece_heigth
//   }
//   objOnepiece[key] = item;
//   chrome.storage.local.set(objOnepiece, function () {
//   });
// }
//
// function saveLong(key, item) {
//   var item = {
//     Long_name,
//     Long_shoulder,
//     Long_Chest,
//     Long_arm,
//     Long_height,
//     Long_waist,
//     Long_edge
//   }
//   objLong[key] = item;
//   chrome.storage.local.set(objLong, function () {
//   });
// }

function get(key, success) {
  whale.storage.local.get(key, function (items) {
    success(items);
  });
  whale.storage.local.remove(key);
}

function clear() {
  whale.storage.local.clear();
}
