

//init
var top_number = document.getElementsByName('top_number');
var bottom_number = document.getElementsByName('bottom_number');
var skirt_number = document.getElementsByName('skirt_number');
var long_number = document.getElementsByName('long_number');


var top_length = top_number.length;
var bottom_length = bottom_number.length;
var skirt_length = skirt_number.length;
var long_length = long_number.length;



for(i =0 ; i<top_length; i++){
  top_number = document.getElementsByName('top_number')[i];
  top_number.addEventListener("keyup", onlyNumber);
}

for(i =0 ; i<bottom_length; i++){
  bottom_number = document.getElementsByName('bottom_number')[i];
  bottom_number.addEventListener("keyup", onlyNumber);
}

for(i =0 ; i<skirt_length; i++){
  skirt_number = document.getElementsByName('skirt_number')[i];
  skirt_number.addEventListener("keyup", onlyNumber);
}

for(i =0 ; i<long_length; i++){
  long_number = document.getElementsByName('long_number')[i];
  long_number.addEventListener("keyup", onlyNumber);
}


function onlyNumber(event) {

  var code = event.keyCode;
  if (code > 47 && code < 58) {
    return;
  } // 숫자 입력
  else if (code === 110 || code === 190) {
    return;
  } // 점 입
  else if (event.ctrlKey || event.altKey) {
    return;
  } //단축키 입
  else if (code === 9 || code === 36 || code === 35 || code === 37 ||
      code === 39 || code === 8 || code === 46) {
    return;
  } // 특수키 입력
  else {
    alert("숫자만 입력해주세요 !");
    this.value = "";
  }
}
