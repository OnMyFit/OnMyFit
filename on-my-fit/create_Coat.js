var cloth = {
    btn_create : null,
    data_shoulder : null,
    data_chest : null,
    data_sleeve : null,
    data_height : null
};

cloth.btn_create = document.getElementById("compare");

cloth.btn_create.addEventListener("click",function(){
    
    cloth.data_shoulder = document.getElementById("longDress_shoulder").value;
    cloth.data_chest = document.getElementById("longDress_Chest").value;
    cloth.data_sleeve = document.getElementById("longDress_arm").value;
    cloth.data_height = document.getElementById("longDress_height").value;
    
    if(isNaN(cloth.data_shoulder)||isNaN(cloth.data_chest)||isNaN(cloth.data_sleeve)||isNaN(cloth.data_height)){
        alert("숫자를 입력해주세요");
    }else if(cloth.data_shoulder.length==0||cloth.data_chest.length==0||cloth.data_sleeve.length==0||cloth.data_height.length==0){
        alert("숫자를 입력해주세요");
    }
    else{
        var point_start_x = 100;
        var point_start_y = 50;
        var fixed_length = 3;
    
        
        d_path = "M "+point_start_x+" "+point_start_y;
    
        var point_shoulder_x = point_start_x+cloth.data_shoulder*0.5;
        var point_shoulder_y = point_start_y+5;

        var point_shoulder_control_01_x = point_start_x+cloth.data_shoulder*0.5*0.4;
        var point_shoulder_control_01_y = point_start_y+1;
        var point_shoulder_control_02_x = point_start_x+cloth.data_shoulder*0.5*0.8;
        var point_shoulder_control_02_y = point_start_y+2;

        d_path = d_path+"C "+point_shoulder_control_01_x+" "+point_shoulder_control_01_y+" "+point_shoulder_control_02_x+" "+point_shoulder_control_02_y+" "+point_shoulder_x+" "+point_shoulder_y;

        var point_sleeve_top_x = point_shoulder_x+parseFloat((cloth.data_sleeve*Math.cos(67.5*(Math.PI/180))).toFixed(fixed_length));
        var point_sleeve_top_y = point_shoulder_y+parseFloat((cloth.data_sleeve*Math.sin(67.5*(Math.PI/180))).toFixed(fixed_length));

        d_path = d_path+"L "+point_sleeve_top_x+" "+point_sleeve_top_y;

        var point_sleeve_bottom_x = point_sleeve_top_x-parseFloat((10*Math.cos(10*(Math.PI/180)).toFixed(fixed_length)));
        var point_sleeve_bottom_y = point_sleeve_top_y+parseFloat((10*Math.sin(10*(Math.PI/180)).toFixed(fixed_length)));

        d_path = d_path+"L "+point_sleeve_bottom_x+" "+point_sleeve_bottom_y;

        var point_cloth_bottom_center_x = point_start_x;
        var point_cloth_bottom_center_y = point_start_y+cloth.data_height*1;

        d_path = d_path+"M "+point_cloth_bottom_center_x+" "+point_cloth_bottom_center_y;

        var point_cloth_bottom_right_x = point_cloth_bottom_center_x+cloth.data_chest*0.5-10;
        var point_cloth_bottom_right_y = point_cloth_bottom_center_y;

        d_path = d_path+"L "+point_cloth_bottom_right_x+" "+point_cloth_bottom_right_y;

        var point_chest_right_x = point_start_x+cloth.data_chest*0.5-11;
        var point_chest_right_y = point_start_y+30;

        var point_chest_control_01_x = point_start_x+cloth.data_chest*0.5-8;
        var point_chest_control_01_y = point_start_y+cloth.data_height*0.85;
        var point_chest_control_02_x = point_start_x+cloth.data_chest*0.5-6;
        var point_chest_control_02_y = point_start_y+cloth.data_height*0.65;

        d_path = d_path+"C "+point_chest_control_01_x+" "+point_chest_control_01_y+" "+point_chest_control_02_x+" "+point_chest_control_02_y+" "+point_chest_right_x+" "+point_chest_right_y;

        d_path = d_path+"L "+point_sleeve_bottom_x+" "+point_sleeve_bottom_y;
        d_path = d_path+"M "+point_shoulder_x+" "+point_shoulder_y;
        d_path = d_path+"L "+point_chest_right_x+" "+point_chest_right_y;

        //d_path = d_path+"M "+point_shoulder_x+" "+point_shoulder_y;
        //d_path = d_path+"L "+point_chest_right_x+" "+point_chest_right_y;
    
        document.getElementById("path_03").setAttribute("d", d_path);
        document.getElementById("path_03").setAttribute("stroke-width", "0.5");
        document.getElementById("path_04").setAttribute("d", d_path);
        document.getElementById("path_04").setAttribute("stroke-width", "0.5");
        
        //document.getElementById("textarea_01").value = d_path;
    }
})