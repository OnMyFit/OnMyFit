var cloth = {
    btn_create : null,
    data_height : null,
    data_waist : null,
    data_thigh : null,
    data_under : null,
    data_edge : null
};

cloth.btn_create = document.getElementById("button_create");

cloth.btn_create.addEventListener("click",function(){

    cloth.data_height = document.getElementById("text_height").value;
    cloth.data_waist = document.getElementById("text_waist").value;
    cloth.data_thigh = document.getElementById("text_thigh").value;
    cloth.data_under = document.getElementById("text_under").value;
    cloth.data_edge = document.getElementById("text_edge").value;
    
    if(isNaN(cloth.data_height)||isNaN(cloth.data_waist)||isNaN(cloth.data_thigh)||isNaN(cloth.data_under)||isNaN(cloth.data_edge)){
        alert("숫자를 입력해주세요");
    }else if(cloth.data_height.length==0||cloth.data_waist.length==0||cloth.data_thigh.length==0||cloth.data_under.length==0||cloth.data_edge.length==0){
        alert("숫자를 입력해주세요");
    }
    else{
        var point_start_x = 100;
        var point_start_y = 50;
        var fixed_length = 3;
    
        
        //바지 옆모습
        //바지 옆모습 = d_path
        //바지 앞모습 = d_path_front
        d_path = "M "+point_start_x+" "+point_start_y;
    
        var point_waist_top_x = point_start_x + cloth.data_waist*0.5;
        var point_waist_top_y = point_start_y;
    
        d_path = d_path+"L "+point_waist_top_x+" "+point_waist_top_y;
    
        var point_waist_bottom_x = point_waist_top_x+1;
        var point_waist_bottom_y = point_waist_top_y+5;
    
        d_path = d_path+"L "+point_waist_bottom_x+" "+point_waist_bottom_y;
    
        var point_waist_bottom_to_center_x = point_start_x;
        var point_waist_bottom_to_center_y = point_waist_bottom_y;
    
        d_path = d_path+"L "+point_waist_bottom_to_center_x+" "+point_waist_bottom_to_center_y;
    
        d_path = d_path+"M "+point_start_x+" "+point_start_y;
    
        var point_cloth_bottom_center_x = point_start_x;
        var point_cloth_bottom_center_y = point_start_y+cloth.data_height*1;
    
        d_path = d_path+"L "+point_cloth_bottom_center_x+" "+point_cloth_bottom_center_y;
    
        var point_cloth_bottom_right_x = point_cloth_bottom_center_x+cloth.data_edge*1;
        var point_cloth_bottom_right_y = point_cloth_bottom_center_y;
    
        d_path = d_path+"L "+point_cloth_bottom_right_x+" "+point_cloth_bottom_right_y;
    
        d_path = d_path+"M "+point_waist_bottom_x+" "+point_waist_bottom_y;
    
        var point_thigh_x = point_start_x+cloth.data_thigh*1;
        var point_thigh_y = point_start_y+cloth.data_under*1;
    
        var point_thigh_control_01_x = point_thigh_x - 7;
        var point_thigh_control_01_y = point_thigh_y - 9;
    
        var point_thigh_control_02_x = point_thigh_x - 5;
        var point_thigh_control_02_y = point_thigh_y - 4;
    
        d_path = d_path+"C "+point_thigh_control_01_x+" "+point_thigh_control_01_y+" "+point_thigh_control_02_x+" "+point_thigh_control_02_y+" "+point_thigh_x+" "+point_thigh_y;
        
        d_path = d_path+"L "+point_cloth_bottom_right_x+" "+point_cloth_bottom_right_y;
        
    
        //-------------------------------------------------------------------------------------------------------
        //여기서 부터 바지 앞 모습
        d_path_front = "M "+point_start_x+" "+point_start_y;
        var point_front_waist_top_x = point_start_x+cloth.data_waist*0.5;
        var point_front_waist_top_y = point_start_y;
    
        d_path_front = d_path_front+"L "+point_front_waist_top_x+" "+point_front_waist_top_y;
    
        var point_front_waist_bottom_x = point_front_waist_top_x+1;
        var point_front_waist_bottom_y = point_front_waist_top_y+5;
    
        d_path_front = d_path_front+"L "+point_front_waist_bottom_x+" "+point_front_waist_bottom_y;
        d_path_front = d_path_front+"M "+point_front_waist_top_x+" "+point_front_waist_top_y;
    
        var point_front_waist_to_center_top_x = point_start_x;
        var point_front_waist_to_center_top_y = point_start_y+3;
    
        var point_front_waist_to_center_top_control_01_x = point_start_x+cloth.data_waist*0.5*0.6;
        var point_front_waist_to_center_top_control_01_y = point_start_y+3;
        var point_front_waist_to_center_top_control_02_x = point_start_x+cloth.data_waist*0.5*0.3;
        var point_front_waist_to_center_top_control_02_y = point_start_y+3;
    
        d_path_front = d_path_front+"C "+point_front_waist_to_center_top_control_01_x+" "+point_front_waist_to_center_top_control_01_y+" "+point_front_waist_to_center_top_control_02_x+" "+point_front_waist_to_center_top_control_02_y+" "+point_front_waist_to_center_top_x+" "+point_front_waist_to_center_top_y;
    
        var point_front_waist_to_center_bottom_x = point_start_x;
        var point_front_waist_to_center_bottom_y = point_start_y+8;
    
        var point_front_waist_to_center_bottom_control_01_x = point_start_x+cloth.data_waist*0.5*0.6;
        var point_front_waist_to_center_bottom_control_01_y = point_start_y+8;
        var point_front_waist_to_center_bottom_control_02_x = point_start_x+cloth.data_waist*0.5*0.3;
        var point_front_waist_to_center_bottom_control_02_y = point_start_y+8;
    
        d_path_front = d_path_front+"M "+point_front_waist_bottom_x+" "+point_front_waist_bottom_y;
        d_path_front = d_path_front+"C "+point_front_waist_to_center_bottom_control_01_x+" "+point_front_waist_to_center_bottom_control_01_y+" "+point_front_waist_to_center_bottom_control_02_x+" "+point_front_waist_to_center_bottom_control_02_y+" "+point_front_waist_to_center_bottom_x+" "+point_front_waist_to_center_bottom_y;
    
        var point_front_under_x = point_start_x;
        var point_front_under_y = point_front_waist_to_center_top_y+cloth.data_under*1;
    
        d_path_front = d_path_front+"L "+point_front_under_x+" "+point_front_under_y;
    
        var point_front_cloth_bottom_center_x = point_front_under_x+parseFloat(10*Math.tan(5*(Math.PI/180)).toFixed(fixed_length));
        var point_front_cloth_bottom_center_y = point_front_under_y+10;
    
        d_path_front = d_path_front+"L "+point_front_cloth_bottom_center_x+" "+point_front_cloth_bottom_center_y;
        
        var point_front_cloth_bottom_right_x = point_start_x+cloth.data_waist*0.5+3;
        var point_front_cloth_bottom_right_y = point_front_cloth_bottom_center_y;
    
        //d_path_front = d_path_front+"L "+point_front_cloth_bottom_right_x+" "+point_front_cloth_bottom_right_y;
        
        d_path_front = d_path_front+"M "+point_front_waist_bottom_x+" "+point_front_waist_bottom_y;
    
        var point_front_thigh_x = point_start_x+cloth.data_waist*0.5+5;
        var point_front_thigh_y = point_front_under_y-5;
    
        var point_front_waist_to_thigh_control_01_x = point_front_thigh_x;
        var point_front_waist_to_thigh_control_01_y = point_front_thigh_y-4;
        var point_front_waist_to_thigh_control_02_x = point_front_thigh_x;
        var point_front_waist_to_thigh_control_02_y = point_front_thigh_y-2;
    
        d_path_front = d_path_front+"C "+point_front_waist_to_thigh_control_01_x+" "+point_front_waist_to_thigh_control_01_y+" "+point_front_waist_to_thigh_control_02_x+" "+point_front_waist_to_thigh_control_02_y+" "+point_front_thigh_x+" "+point_front_thigh_y
        var point_front_thigh_to_bottom_control_01_x = point_front_thigh_x;
        var point_front_thigh_to_bottom_control_01_y = point_front_thigh_y+2;
        var point_front_thigh_to_bottom_control_02_x = point_front_thigh_x;
        var point_front_thigh_to_bottom_control_02_y = point_front_thigh_y+4;
    
        d_path_front = d_path_front+"C "+point_front_thigh_to_bottom_control_01_x+" "+point_front_thigh_to_bottom_control_01_y+" "+point_front_thigh_to_bottom_control_02_x+" "+point_front_thigh_to_bottom_control_02_y+" "+point_front_cloth_bottom_right_x+" "+point_front_cloth_bottom_right_y;
    
        document.getElementById("path_01").setAttribute("d", d_path);
        document.getElementById("path_01").setAttribute("stroke-width", "0.5");
        
        document.getElementById("path_02").setAttribute("d", d_path_front);
        document.getElementById("path_02").setAttribute("stroke-width", "0.5");
        document.getElementById("path_03").setAttribute("d", d_path_front);
        document.getElementById("path_03").setAttribute("stroke-width", "0.5");
    
        document.getElementById("textarea_01").value = d_path;
    }
})