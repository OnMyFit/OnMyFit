var btn_change = document.getElementById("button_change");
var id_path_01 = document.getElementById("path_01");
var id_path_02 = document.getElementById("path_02");
var id_path_03 = document.getElementById("path_03");

btn_change.addEventListener("click",function(){
    if(btn_change.value=="옆면보기"){
        id_path_01.setAttribute("display", "");
        id_path_02.setAttribute("display", "none");
        id_path_03.setAttribute("display", "none");
        btn_change.value="앞면보기";
    }else{
        id_path_01.setAttribute("display", "none");
        id_path_02.setAttribute("display", "");
        id_path_03.setAttribute("display", "");
        btn_change.value="옆면보기";
    }    
});

