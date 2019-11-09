//DB생성
var db;
var doneDB = false;

var dressCreate = document.getElementById("isCreate");

dressCreate.addEventListener("click", function(){
  if (!doneDB) {
    doneDB = true;

    createDB();
    createTopTable();
    createBottomTable();
    createSkirtTable();
    createOnepieceTable();
    createLongDress();
  }
})

function createDB() {
  db = window.openDatabase("OnMyFit", "1.0", "테스트용DB", 4 * 1024 * 1024);
}

//Table 생성
function createTopTable() {
  db.transaction(function(tx) {
    tx.executeSql("create table Top(top_name, top_shoulder,top_chest,top_arm,top_height)");
  });
}

function createBottomTable() {
  db.transaction(function(tx) {
    tx.executeSql("create table Bottom(bottom_name,bottom_height,bottom_waist,bottom_thigh,bottom_under,bottom_edge)");
  });
}

function createSkirtTable() {
  db.transaction(function(tx) {
    tx.executeSql("create table Skirt(skirt_name,skirt_height,skirt_waist,skirt_edge)");
  });
}

function createOnepieceTable() {
  db.transaction(function(tx) {
    tx.executeSql("create table Onepiece(onpiece_name,onepiece_shoulder,onepiece_Chest,onepiece_arm,onepiece_heigth)");
  });
}

function createLongDress() {
  db.transaction(function(tx) {
    tx.executeSql("create table LongDress(LongDress_name,LongDress_shoulder,LongDress_Chest,LongDress_arm,LongDress_height,LongDress_waist,LongDress_edge)");
  });
}

var topData = document.getElementById("insertTopData");

topData.addEventListener("click", function(){
  function insertTopData() {
    db.transaction(function(tx) {
      tx.executeSql("insert into Top values(?,?,?,?,?)", [top_name.value, top_shoulder.value, top_chest.value, top_arm.value, top_height.value]);
    });
  }
})

//data 삽입
function insertTopData() {
  db.transaction(function(tx) {
    tx.executeSql("insert into Top values(?,?,?,?,?)", [top_name.value, top_shoulder.value, top_chest.value, top_arm.value, top_height.value]);
  });
}

function insertBottomData() {
  db.transaction(function(tx) {
    tx.executeSql("insert into Bottom values(?,?,?,?,?,?)", [bottom_name.value, bottom_height.value, bottom_waist.value, bottom_thigh.value, bottom_under.value, bottom_edge.value]);
  });
}

function insertSkirtData() {
  db.transaction(function(tx) {
    tx.executeSql("insert into Skirt values(?,?,?,?)", [skirt_name.value, skirt_height.value, skirt_waist.value, skirt_edge.value]);
  });
}

function insertOnepieceData() {
  db.transaction(function(tx) {
    tx.executeSql("insert into Onepiece values(?,?,?,?,?)", [onpiece_name.value, onepiece_shoulder.value, onepiece_Chest.value, onepiece_arm.value, onepiece_heigth.value]);
  });
}

function insertLongDresseData() {
  db.transaction(function(tx) {
    tx.executeSql("insert into LongDress values(?,?,?,?,?,?,?)", [LongDress_name.value, LongDress_shoulder.value, LongDress_Chest.value, LongDress_arm.value, LongDress_height.value, LongDress_waist.value, LongDress_edge.value]);
  });
}

//data 호출
function selectTopData() {
  db.transaction(function(tx) {
    tx.executeSql("select * from Top", [],
      function(tx, result) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          document.getElementById('table1').innerHTML += "<tr><td>" + row['top_name'] + "</td><td>" + row['top_shoulder'] + "</td><td>" + row['top_chest'] + "</td><td>" + row['top_arm'] + "</td><td>" + row['top_height'] + "</td></tr>";
        }
      });
  });
}

function selectBottomData() {
  db.transaction(function(tx) {
    tx.executeSql("select * from Bottom", [],
      function(tx, result) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          document.getElementById('table1').innerHTML += "<tr><td>" + row['bottom_name'] + "</td><td>" + row['bottom_height'] + "</td><td>" + row['bottom_waist'] + "</td><td>" + row['bottom_thigh'] + "</td><td>" + row['bottom_under'] + "</td><td>" + row['bottom_edge'] + "</td></tr>";
        }
      });
  });
}

function selectSkirtData() {
  db.transaction(function(tx) {
    tx.executeSql("select * from Skirt", [],
      function(tx, result) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          document.getElementById('table1').innerHTML += "<tr><td>" + row['skirt_name'] + "</td><td>" + row['skirt_height'] + "</td><td>" + row['skirt_waist'] + "</td><td>" + row['skirt_edge'] + "</td></tr>";
        }
      });
  });
}

function selectOnepieceData() {
  db.transaction(function(tx) {
    tx.executeSql("select * from Onepiece", [],
      function(tx, result) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          document.getElementById('table1').innerHTML += "<tr><td>" + row['onepiece_name'] + "</td><td>" + row['onepiece_shoulder'] + "</td><td>" + row['onepiece_Chest'] + "</td><td>" + row['onepiece_arm'] + "</td><td>" + row['onepiece_heigth'] + "</td></tr>";
        }
      });
  });
}

function selectOnepieceData() {
  db.transaction(function(tx) {
    tx.executeSql("select * from Onepiece", [],
      function(tx, result) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          document.getElementById('table1').innerHTML += "<tr><td>" + row['onepiece_name'] + "</td><td>" + row['onepiece_shoulder'] + "</td><td>" + row['onepiece_Chest'] + "</td><td>" + row['onepiece_arm'] + "</td><td>" + row['onepiece_heigth'] + "</td></tr>";
        }
      });
  });
}
