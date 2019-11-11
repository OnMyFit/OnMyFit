var listSpan = document.createElement("span");

listSpan.addEventListener("click", function(){
  var a = JSON.parse(localStorage.getItem("dressData"))[this.getAttribute("value")]})

  console.log(a)
