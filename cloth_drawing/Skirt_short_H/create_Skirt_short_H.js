var cloth = {
    btn_create : null,
    data_waist : null,
    data_hem : null,
    data_height : null
};

cloth.btn_create = document.getElementById("button_create");

cloth.btn_create.addEventListener("click",function(){
    
    cloth.data_waist = parseInt(document.getElementById("text_waist").value);
    cloth.data_hem = parseInt(document.getElementById("text_hem").value);
    cloth.data_height = parseInt(document.getElementById("text_height").value);
    
    
    var point_start_x = 100;
    var point_start_y = 50;
    var fixed_length = 3;

    d_path = "M "+point_start_x+" "+point_start_y;

    var point_waist_top_x = point_start_x+cloth.data_waist*0.5;
    var point_waist_top_y = point_start_y;
    
    d_path = d_path+"L "+point_waist_top_x+" "+point_waist_top_y;

    var point_waist_bottom_x = point_start_x+cloth.data_waist*0.51;
    var point_waist_bottom_y = point_start_y+5;

    var point_waist_control_01_x = point_start_x+cloth.data_waist*0.5;
    var point_waist_control_01_y = point_start_y+1;
    var point_waist_control_02_x = point_start_x+cloth.data_waist*0.51;
    var point_waist_control_02_y = point_start_y+3;

    d_path = d_path+"C "+point_waist_control_01_x+" "+point_waist_control_01_y+" "+point_waist_control_02_x+" "+point_waist_control_02_y+" "+point_waist_bottom_x+" "+point_waist_bottom_y;
    
    var point_waist_bottom_to_center_x = point_start_x;
    var point_waist_bottom_to_center_y = point_waist_bottom_y;
    
    d_path = d_path+"L "+point_waist_bottom_to_center_x+" "+point_waist_bottom_to_center_y;

    var point_hem_center_x = point_start_x;
    var point_hem_center_y = point_start_y+cloth.data_height;

    d_path = d_path+"M "+point_hem_center_x+" "+point_hem_center_y;

    var point_hem_right_x = point_start_x+cloth.data_hem*0.5;
    var point_hem_right_y = point_hem_center_y - 5;

    var point_hem_control_01_x = point_start_x+cloth.data_hem*0.3;
    var point_hem_control_01_y = point_start_y+cloth.data_height-6*0.3;
    var point_hem_control_02_x = point_start_x+cloth.data_hem*0.6;
    var point_hem_control_02_y = point_start_y+cloth.data_height-6*0.6;

    d_path = d_path+"C "+point_hem_control_01_x+" "+point_hem_control_01_y+" "+point_hem_control_02_x+" "+point_hem_control_02_y+" "+point_hem_right_x+" "+point_hem_right_y;

    d_path = d_path+"M "+point_waist_bottom_x+" "+point_waist_bottom_y;

    var point_line_control_01_x = point_start_x+cloth.data_hem*0.5;
    var point_line_control_01_y = point_start_y+cloth.data_height*0.4;
    var point_line_control_02_x = point_start_x+cloth.data_hem*0.5*1.1;
    var point_line_control_02_y = point_start_y+cloth.data_height;

    d_path = d_path+"C "+point_line_control_01_x+" "+point_line_control_01_y+" "+point_line_control_02_x+" "+point_line_control_02_y+" "+point_hem_right_x+" "+point_hem_right_y;

    
    document.getElementById("path_01").setAttribute("d", d_path);
    document.getElementById("path_01").setAttribute("stroke-width", "0.5");
    document.getElementById("path_02").setAttribute("d", d_path);
    document.getElementById("path_02").setAttribute("stroke-width", "0.5");
    
    document.getElementById("textarea_01").value = d_path;
})