var btn_change = document.getElementById("change");
var id_path_01 = document.getElementById("path_01");
var id_path_02 = document.getElementById("path_02");
var id_path_03 = document.getElementById("path_03");
var id_path_04 = document.getElementById("path_04");
var id_path_05 = document.getElementById("path_05");
var id_path_06 = document.getElementById("path_06");

btn_change.addEventListener("click",function(){
    if(btn_change.value=="옆면보기"){
        id_path_01.setAttribute("display", "");
        id_path_02.setAttribute("display", "none");
        id_path_03.setAttribute("display", "none");
        id_path_04.setAttribute("display", "");
        id_path_05.setAttribute("display", "none");
        id_path_06.setAttribute("display", "none");
        btn_change.value="앞면보기";
    }else{
        id_path_01.setAttribute("display", "none");
        id_path_02.setAttribute("display", "");
        id_path_03.setAttribute("display", "");
        id_path_04.setAttribute("display", "none");
        id_path_05.setAttribute("display", "");
        id_path_06.setAttribute("display", "");
        btn_change.value="옆면보기";
    }    
});

