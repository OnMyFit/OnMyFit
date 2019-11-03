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
    var point_start_y = 100;
    var fixed_length = 3;

    var d_path = "M"+point_start_x+" "+point_start_y;
    //어깨 길이 만큼 x축 방향으로 직선 그리기
    d_path = d_path+" l"+cloth.data_shoulder+" 0";

    //어깨 너비의 중간점으로 이동
    d_path = d_path+" m"+((-1)*(cloth.data_shoulder/2.0).toFixed(fixed_length))+" 0";

    //중간점에서 상하길이 만큼 y 방향으로 이동
    d_path = d_path+" m0 "+cloth.data_height;

    //현재 위치를 저장(옷 하단의 중간점)
    var point_01_x = point_start_x+parseFloat((cloth.data_shoulder/2.0).toFixed(fixed_length));
    var point_01_y = point_start_y+cloth.data_height;

    //x축의 음의 방향으로 가슴 너비의 1/2 만큼 직선 그리기
    d_path = d_path+" l"+((-1)*cloth.data_chest/2.0).toFixed(fixed_length)+" 0";

    //y축의 음의 방향으로 height의 2/3 만큼 직선 그리기 올라가는 이 길이는 임의로 정한 값이다.
    d_path = d_path+" l0 "+(-1)*((cloth.data_height*2/3.0).toFixed(fixed_length));

    //현재 위치를 저장(옷의 하단에서 2/3 올라온 왼쪽점)
    var point_02_x = point_01_x-parseFloat((cloth.data_chest/2.0).toFixed(fixed_length));
    var point_02_y = point_01_y-parseFloat(((cloth.data_height*2)/3.0).toFixed(fixed_length));

    
    //소매 부분을 그리기 위해 시작점(point_start)으로 이동
    d_path = d_path+" M"+point_start_x+" "+point_start_y;

    //sine, cosine 함수를 이용하여 이동할 소매의 윗부분 점을 찾는다. 각도는 임의로 정하였다.
    sleeve_upper_sine = parseFloat(cloth.data_sleeve*Math.sin((1/3)*Math.PI).toFixed(fixed_length));
    sleeve_upper_cosine = parseFloat(cloth.data_sleeve*Math.cos((1/3)*Math.PI).toFixed(fixed_length));

    
    //찾은 점으로 이동
    d_path = d_path+" l"+(-1)*sleeve_upper_cosine+" "+sleeve_upper_sine;

    //sine, cosine 함수를 이용하여 소매의 아랫부분 점으로 이동할 점을 찾는다. 각도는 임의로 정하였다. 이동거리느 소매 길이의 3/4로 정하였다.
    sleeve_bottom_sine = parseFloat((cloth.data_sleeve*3/4)*Math.sin((1/4)*Math.PI).toFixed(fixed_length));
    sleeve_bottom_cosine = parseFloat((cloth.data_sleeve*3/4)*Math.cos((1/4)*Math.PI).toFixed(fixed_length));

    //찾은 점으로 이동
    d_path = d_path+" l"+sleeve_bottom_cosine+" "+sleeve_bottom_sine;

    //point_02(옷의 하단에서 2/3 올라온 왼쪽점)로 직선을 잇는다.
    d_path = d_path+" L"+(point_02_x)+" "+(point_02_y);

    //이제 오른쪽 부분을 그리기 위해 point_01(하단의 중간점)으로 이동한다.
    d_path = d_path+" M"+point_01_x+" "+point_01_y;

    //x축의 양의 방향으로 가슴너비의 1/2 만큼 직선 그리기
    d_path = d_path+" l"+(cloth.data_chest/2.0).toFixed(fixed_length)+" 0";

    //y축의 음의 방향으로 height의 2/3 만큼 직선 그리기 올라가는 이 길이는 임의로 정한 값이다.
    d_path = d_path+" l0 "+(-1)*((cloth.data_height*2/3.0).toFixed(fixed_length));

    //현재 위치를 저장(옷의 하단에서 2/3 올라온 오른쪽 점)
    var point_03_x = point_01_x+parseFloat((cloth.data_chest/2.0).toFixed(fixed_length));
    var point_03_y = point_01_y-parseFloat(((cloth.data_height*2)/3.0).toFixed(fixed_length));
    
    //소매 부분을 그리기 위해 어깨의 오른쪽 점(point_start_x+cloth.data_shoulder, point_start_y)으로 이동
    d_path = d_path+" M"+(point_start_x+cloth.data_shoulder)+" "+point_start_y;

    //찾은 점으로 이동
    d_path = d_path+" l"+sleeve_upper_cosine+" "+sleeve_upper_sine;

    //찾은 점으로 이동
    d_path = d_path+" l"+((-1)*sleeve_bottom_cosine)+" "+sleeve_bottom_sine;
    
    //point_03(옷의 하단에서 2/3 올라온 오른쪽점)로 직선을 잇는다.
    d_path = d_path+" L"+(point_03_x)+" "+(point_03_y);


    //d_path = d_path+" L"+cloth.data_shoulder+" "+cloth.data_chest;
    //d_path = d_path+" L"+cloth.data_sleeve+" "+cloth.data_height;
    //document.write(d_path);
    
    document.getElementById("myPath").setAttribute("d", d_path);
    document.getElementById("myPath").setAttribute("stroke-width", "3");
    //document.getElementById("myCircle").setAttribute("cx", point_02_x);
    //document.getElementById("myCircle").setAttribute("cy", point_02_y);
    //document.getElementById("myCircle").setAttribute("r", 5);
    //document.getElementById("myCircle").setAttribute("stroke", "red");

    //document.getElementById("textarea_01").setAttribute("value",d_path);
    document.getElementById("textarea_01").value = d_path;
})