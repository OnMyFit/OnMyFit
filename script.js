function myNav() {
  if (document.getElementById("menuicon").checked) {
    document.getElementsByClassName("sidenav")[0].style.visibility="visible";
  } else {
    document.getElementsByClassName("sidenav")[0].style.visibility="hidden";
  }
}


function myswitch() {
  if(document.getElementById("switch").checked) {
    document.getElementsByName('look')[0].style.color = "rgb(0, 230, 181)";
    document.getElementsByName('compare')[0].style.color = "black";
    document.getElementsByClassName('cloth')[0].innerHTML = '<img src="../images/man.png" alt="" style="height: 300px;">'
  } else {
    document.getElementsByName('compare')[0].style.color = "rgb(0, 230, 181)";
    document.getElementsByName('look')[0].style.color = "black";
    document.getElementsByClassName('cloth')[0].innerHTML = '<img src="../images/hood.png" alt="" style="height: 300px;">'
  }
}
