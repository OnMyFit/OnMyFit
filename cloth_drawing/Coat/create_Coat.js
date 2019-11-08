var cloth = {
    btn_create : null,
    data_shoulder : null,
    data_chest : null,
    data_sleeve : null,
    data_height : null
};

cloth.btn_create = document.getElementById("button_create");

cloth.btn_create.addEventListener("click",function(){
    
    cloth.data_shoulder = parseInt(document.getElementById("text_shoulder").value);
    cloth.data_chest = parseInt(document.getElementById("text_chest").value);
    cloth.data_sleeve = parseInt(document.getElementById("text_sleeve").value);
    cloth.data_height = parseInt(document.getElementById("text_height").value);
    
    var point_start_x = 100;
    var point_start_y = 50;
    var fixed_length = 3;

    
    d_path = "M "+point_start_x+" "+point_start_y;

    
    var point_shoulder_x = point_start_x+cloth.data_shoulder * 0.5;
    var point_shoulder_y = point_start_y+5;
    var point_shoulder_control_01_x = point_start_x+(cloth.data_shoulder*0.5*0.48);
    var point_shoulder_control_01_y = point_start_y+1;
    var point_shoulder_control_02_x = point_start_x+(cloth.data_shoulder*0.5*0.88);
    var point_shoulder_control_02_y = point_start_y+2;

    d_path = d_path+"C "+point_shoulder_control_01_x+" "+point_shoulder_control_01_y+" "+point_shoulder_control_02_x+" "+point_shoulder_control_02_y+" "+point_shoulder_x+" "+point_shoulder_y;
    
    var angle_arm_middle = 60;
    var point_arm_middle_x = point_shoulder_x+parseFloat(cloth.data_sleeve*0.5*Math.cos(angle_arm_middle*(Math.PI/180)).toFixed(fixed_length));
    var point_arm_middle_y = point_shoulder_y+parseFloat(cloth.data_sleeve*0.5*Math.sin(angle_arm_middle*(Math.PI/180)).toFixed(fixed_length));

    var point_arm_control_01_x = point_shoulder_x+7;
    var point_arm_control_01_y = point_shoulder_y+parseFloat(cloth.data_sleeve*0.5*Math.sin(angle_arm_middle*(Math.PI/180)).toFixed(fixed_length))*0.3;

    var point_arm_control_02_x = point_arm_middle_x-2;
    var point_arm_control_02_y = point_shoulder_y+parseFloat(cloth.data_sleeve*0.5*Math.sin(angle_arm_middle*(Math.PI/180)).toFixed(fixed_length))*0.6;

    d_path = d_path+"C "+point_arm_control_01_x+" "+point_arm_control_01_y+" "+point_arm_control_02_x+" "+point_arm_control_02_y+" "+point_arm_middle_x+" "+point_arm_middle_y;

    var angle_arm_bottom = 80;
    var point_arm_bottom_x = point_arm_middle_x+parseFloat((cloth.data_sleeve*0.5+10)*Math.cos(angle_arm_bottom*(Math.PI/180)).toFixed(fixed_length));
    var point_arm_bottom_y = point_arm_middle_y+parseFloat((cloth.data_sleeve*0.5+10)*Math.sin(angle_arm_bottom*(Math.PI/180)).toFixed(fixed_length));

    d_path = d_path+"L "+point_arm_bottom_x+" "+point_arm_bottom_y;

    var angle_sleeve = 10;
    var point_sleeve_bottom_x = point_arm_bottom_x-parseFloat(10*Math.cos(angle_sleeve*(Math.PI/180)).toFixed(fixed_length));
    var point_sleeve_bottom_y = point_arm_bottom_y+parseFloat(10*Math.sin(angle_sleeve*(Math.PI/180)).toFixed(fixed_length));

    d_path = d_path+"L "+point_sleeve_bottom_x+" "+point_sleeve_bottom_y;

    var point_cloth_bottom_center_x = point_start_x;
    var point_cloth_bottom_center_y = point_start_y+cloth.data_height;

    d_path = d_path+"M "+point_cloth_bottom_center_x+" "+point_cloth_bottom_center_y;

    var point_cloth_bottom_right_x = point_cloth_bottom_center_x+cloth.data_chest*0.5+1;
    var point_cloth_bottom_right_y = point_cloth_bottom_center_y-3;

    var point_cloth_bottom_control_01_x = point_cloth_bottom_center_x+cloth.data_chest*0.5*0.3;
    var point_cloth_bottom_control_01_y = point_cloth_bottom_center_y;
    var point_cloth_bottom_control_02_x = point_cloth_bottom_center_x+cloth.data_chest*0.5*0.7;
    var point_cloth_bottom_control_02_y = point_cloth_bottom_center_y;

    d_path = d_path+"C "+point_cloth_bottom_control_01_x+" "+point_cloth_bottom_control_01_y+" "+point_cloth_bottom_control_02_x+" "+point_cloth_bottom_control_02_y+" "+point_cloth_bottom_right_x+" "+point_cloth_bottom_right_y;

    var point_chest_right_x = point_start_x+cloth.data_chest*0.5;
    var point_chest_right_y = point_start_y+40;

    var point_chest_control_01_x = point_chest_right_x-2;
    var point_chest_control_01_y = point_chest_right_y+50;

    var point_chest_control_02_x = point_chest_right_x-4;
    var point_chest_control_02_y = point_chest_right_y+25;

    d_path = d_path+"C "+point_chest_control_01_x+" "+point_chest_control_01_y+" "+point_chest_control_02_x+" "+point_chest_control_02_y+" "+point_chest_right_x+" "+point_chest_right_y;

    d_path = d_path+"L "+point_sleeve_bottom_x+" "+point_sleeve_bottom_y;

    //d_path = d_path+"M "+point_shoulder_x+" "+point_shoulder_y;
    //d_path = d_path+"L "+point_chest_right_x+" "+point_chest_right_y;

    document.getElementById("path_01").setAttribute("d", d_path);
    document.getElementById("path_01").setAttribute("stroke-width", "0.5");
    document.getElementById("path_02").setAttribute("d", d_path);
    document.getElementById("path_02").setAttribute("stroke-width", "0.5");
    
    document.getElementById("textarea_01").value = d_path;
})