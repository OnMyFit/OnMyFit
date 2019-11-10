var cloth = {
    btn_create : null,
    data_shoulder : null,
    data_chest : null,
    data_sleeve : null,
    data_height : null
};

cloth.btn_create = document.getElementById("button_create");

cloth.btn_create.addEventListener("click",function(){
    
    cloth.data_shoulder = document.getElementById("text_shoulder").value;
    cloth.data_chest = document.getElementById("text_chest").value;
    cloth.data_sleeve = document.getElementById("text_sleeve").value;
    cloth.data_height = document.getElementById("text_height").value;
    
    if(isNaN(cloth.data_shoulder)||isNaN(cloth.data_chest)||isNaN(cloth.data_sleeve)||isNaN(cloth.data_height)){
        alert("숫자를 입력해주세요");
    }
    else if(cloth.data_shoulder.length==0||cloth.data_chest==0||cloth.data_sleeve==0||cloth.data_height==0){
        alert("숫자를 입력해주세요");
    }
    else{
        var point_start_x = 100;
        var point_start_y = 50;
        var fixed_length = 3;
    
        
        d_path = "M "+point_start_x+" "+point_start_y;
    
        var point_neck_bottom_x = point_start_x;
        var point_neck_bottom_y = point_start_y+7;
        var point_neck_right_x = point_start_x+8;
        var point_neck_right_y = point_start_y;
    
        var point_neck_control_01_x = point_start_x+2;
        var point_neck_control_01_y = point_start_y+7;
        var point_neck_control_02_x = point_start_x+6;
        var point_neck_control_02_y = point_start_y+7;
    
        d_path = d_path+"M "+point_neck_bottom_x+" "+point_neck_bottom_y;
        d_path = d_path+"C "+point_neck_control_01_x+" "+point_neck_control_01_y+" "+point_neck_control_02_x+" "+point_neck_control_02_y+" "+point_neck_right_x+" "+point_neck_right_y;
        
        var point_shoulder_x = point_start_x+cloth.data_shoulder * 0.5;
        var point_shoulder_y = point_start_y+5;
        var point_shoulder_control_01_x = point_start_x+(cloth.data_shoulder*0.5*0.48);
        var point_shoulder_control_01_y = point_start_y+1;
        var point_shoulder_control_02_x = point_start_x+(cloth.data_shoulder*0.5*0.88);
        var point_shoulder_control_02_y = point_start_y+2;
    
        d_path = d_path+"C "+point_shoulder_control_01_x+" "+point_shoulder_control_01_y+" "+point_shoulder_control_02_x+" "+point_shoulder_control_02_y+" "+point_shoulder_x+" "+point_shoulder_y;
        
        var angle_sleeve_top = 40;
        var point_sleeve_top_x = point_shoulder_x+cloth.data_sleeve*parseFloat((Math.cos(angle_sleeve_top*(Math.PI/180))).toFixed(fixed_length));
        var point_sleeve_top_y = point_shoulder_y+cloth.data_sleeve*parseFloat((Math.sin(angle_sleeve_top*(Math.PI/180))).toFixed(fixed_length));
    
        d_path = d_path+"L "+point_sleeve_top_x+" "+point_sleeve_top_y;
    
        var length_sleeve = 20; 
        var angle_sleeve_bottom = 67;
        var point_sleeve_bottom_x = point_sleeve_top_x-length_sleeve*parseFloat((Math.cos(angle_sleeve_bottom*(Math.PI/180))).toFixed(fixed_length));
        var point_sleeve_bottom_y = point_sleeve_top_y+length_sleeve*parseFloat((Math.sin(angle_sleeve_bottom*(Math.PI/180))).toFixed(fixed_length));
    
        d_path = d_path+"L "+point_sleeve_bottom_x+" "+point_sleeve_bottom_y;
    
        var point_cloth_bottom_center_x = point_start_x;
        var point_cloth_bottom_center_y = point_start_y+cloth.data_height*1;
    
        d_path = d_path+"M "+point_cloth_bottom_center_x+" "+point_cloth_bottom_center_y;
    
        var point_cloth_bottom_right_x = point_cloth_bottom_center_x+cloth.data_chest*0.5+2;
        var point_cloth_bottom_right_y = point_cloth_bottom_center_y-3;
    
        var point_cloth_bottom_control_01_x = point_cloth_bottom_center_x+cloth.data_chest*0.5*0.3;
        var point_cloth_bottom_control_01_y = point_start_y+cloth.data_height*1;
        var point_cloth_bottom_control_02_x = point_cloth_bottom_center_x+cloth.data_chest*0.5*0.7;
        var point_cloth_bottom_control_02_y= point_start_y+cloth.data_height*1;
    
        d_path = d_path+"C "+point_cloth_bottom_control_01_x+" "+point_cloth_bottom_control_01_y+" "+point_cloth_bottom_control_02_x+" "+point_cloth_bottom_control_02_y+" "+point_cloth_bottom_right_x+" "+point_cloth_bottom_right_y;
    
        var point_chest_right_x = point_start_x+cloth.data_chest*0.5;
        var point_chest_right_y = point_start_y+31;
    
        var point_chest_control_01_x = point_start_x+cloth.data_chest*0.5+1.5;
        var point_chest_control_01_y = point_cloth_bottom_right_y-(point_cloth_bottom_right_y-point_chest_right_y)*0.02;
        var point_chest_control_02_x = point_start_x+cloth.data_chest*0.5+0.5;
        var point_chest_control_02_y = point_cloth_bottom_right_y-(point_cloth_bottom_right_y-point_chest_right_y)*0.75;
    
        
    
        d_path = d_path+"C "+point_chest_control_01_x+" "+point_chest_control_01_y+" "+point_chest_control_02_x+" "+point_chest_control_02_y+" "+point_chest_right_x+" "+point_chest_right_y;
        //d_path = d_path+"L "+point_chest_right_x+" "+point_chest_right_y;
        d_path = d_path+"L "+point_sleeve_bottom_x+" "+point_sleeve_bottom_y;
        d_path = d_path+"M "+point_shoulder_x+" "+point_shoulder_y;
        d_path = d_path+"L "+point_chest_right_x+" "+point_chest_right_y;
        

        //목 선은 원래 선 보다 2cm 낮게 설정
        //var point_neck_line_bottom_x = point_start_x;
        //var point_neck_line_bottom_y = point_start_y+9;
        //var point_neck_line_right_x = point_start_x+6;
        //var point_neck_line_right_y = point_start_y+4;
    //
        //var point_neck_line_control_01_x = point_start_x+2;
        //var point_neck_line_control_01_y = point_start_y+9;
        //var point_neck_line_control_02_x = point_start_x+6;
        //var point_neck_line_control_02_y = point_start_y+9;
//
        //d_path = d_path+"M "+point_neck_line_bottom_x+" "+point_neck_line_bottom_y;
        //d_path = d_path+"C "+point_neck_line_control_01_x+" "+point_neck_line_control_01_y+" "+point_neck_line_control_02_x+" "+point_neck_line_control_02_y+" "+point_neck_line_right_x+" "+point_neck_line_right_y;

        d_path = d_path+"M "+point_start_x+" "+point_start_y;
        d_path = d_path+"L "+point_neck_right_x+" "+point_neck_right_y;
        d_path = d_path+"M "+point_start_x+" "+(point_start_y+1);
        d_path = d_path+"L "+point_neck_right_x+" "+(point_neck_right_y+1);
        
        d_path = d_path+"M "+point_shoulder_x+" "+point_shoulder_y;
        
        var point_sleeve_outer_top_x = point_shoulder_x+(cloth.data_sleeve*1+2)*parseFloat((Math.cos(angle_sleeve_top*(Math.PI/180))).toFixed(fixed_length));
        var point_sleeve_outer_top_y = point_shoulder_y+(cloth.data_sleeve*1+2)*parseFloat((Math.sin(angle_sleeve_top*(Math.PI/180))).toFixed(fixed_length));

        d_path = d_path+"L "+point_sleeve_outer_top_x+" "+point_sleeve_outer_top_y;

        var point_sleeve_outer_bottom_x = point_sleeve_outer_top_x-length_sleeve*parseFloat((Math.cos(angle_sleeve_bottom*(Math.PI/180))).toFixed(fixed_length));
        var point_sleeve_outer_bottom_y = point_sleeve_outer_top_y+length_sleeve*parseFloat((Math.sin(angle_sleeve_bottom*(Math.PI/180))).toFixed(fixed_length));

        d_path = d_path+"L "+point_sleeve_outer_bottom_x+" "+point_sleeve_outer_bottom_y;
        d_path = d_path+"L "+point_sleeve_bottom_x+" "+point_sleeve_bottom_y;



        document.getElementById("path_01").setAttribute("d", d_path);
        document.getElementById("path_01").setAttribute("stroke-width", "0.5");
        document.getElementById("path_02").setAttribute("d", d_path);
        document.getElementById("path_02").setAttribute("stroke-width", "0.5");
            
        //document.getElementById("textarea_01").value = d_path;
    }
})