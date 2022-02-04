var num1 , num2;
function setnumber() {
  num1 = document.getElementById("num1").value; //value
  num2 = document.getElementById("num2").value;
};
function sum() {
  setnumber();
  let xy = parseFloat(num1) + parseFloat(num2);
  let sum = document.getElementById("Result");
  sum.innerHTML = xy;
  //document.getElementById("Result").innerHTML = xy;
}
function taghsim() {
  setnumber();
  let xy = parseInt(num1) / parseInt(num2);
  let taghsim = document.getElementById("Result");
  taghsim.innerHTML = xy;
}
function Hi() {
  var s = 2 - 2;
  var s = parseInt(s); // no .  1.676 => 1
  var s = Boolean(s); // 0 = false  1=true
  document.getElementById("TorF").innerHTML = s;
}
function ret(y, u) {
  var g = parseInt(y) / parseInt(u);
  return g + parseInt(y);
}
function wellcome() {
  var Name = document.getElementById("Name").value;
  var family = document.getElementById("family").value;
  return "wellcome " + Name + " " + family;
}
var person = {
  //object person.name or person.fullname
  name: document.getElementById("Name").value, // : ,
  family: document.getElementById("family").value,
  age: 30,
  fullname: function () {
    return this.name + " " + this.family;
  },
};
function time() {
  document.getElementById("time").innerHTML = Date();
}
//if (num1 > num2) {  // ==  ===  !=  !==  >  <  >=  <=
//    alert("true")
//} else {
//    alert("false")
//}
//---------------------------------------
var x = 12;
if (x > 8 && x > 13) {
  // && va    || ya
  //alert("true");
} else {
  //alert("false");
}
//--------------------------------------
var Time = new Date().getHours();
if (Time <= 10) {
  document.getElementById("Time").innerHTML = "good morning";
} else if (Time < 18) {
  document.getElementById("Time").innerHTML = "good day";
} else if (Time < 22) {
  document.getElementById("Time").innerHTML = "good evening";
} else {
  document.getElementById("Time").innerHTML = "good night";
}
//-------------------------------------
switch (new Date().getDay()) {
  case 0: {
    document.getElementById("day").innerHTML = "Sunday";
    break; //khili mohem hast case badi dige test nemikone
  }
  case 1: {
    document.getElementById("day").innerHTML = "Monday";
    break;
  }
  case 2: {
    document.getElementById("day").innerHTML = "Tuesday";
    break;
  }
  case 3: // mishe {} ham nazasht
    document.getElementById("day").innerHTML = "Wednsday";
    break;
  case 4:
    document.getElementById("day").innerHTML = "Thursday";
    break;
  case 5:
    document.getElementById("day").innerHTML = "Friday";
    break;
  case 6:
    document.getElementById("day").innerHTML = "Saturday";
    break;
  default: {
    document.getElementById("day").innerHTML = "you are livving in wirred day";
    break;
  }
}
//----------------------------------------
var jame = ["ali", "mmd", "jafar"];
//document.getElementById("names").innerHTML = jame[0] + "</br>" + jame[1] + "</br>" + jame[2];
// code bala be sorate zir ham mishe nevesht
var text = ""; //inam bayad bashe vase code zir
for (var i = 0; i < jame.length; i++) {
  // ya if(i in jame)
  text += jame[i] + "</br>";
}
document.getElementById("names").innerHTML = text;
// (meghdar avalie ; shart tamam shodan barresi ; baad az har barresi ejra mishe)
// ba in ravesh age esm ham ezaf beshe niaz be cod nevisi nist
// var a = "mmd" + "rezaii"  =>  var a = "mmd"  a+= "rezaii"
var numser = [1, 2];
for (n in numser) {
  //alert(numser[n]);
}
//-------------------------------------
function tavan() {
  var num3 = document.getElementById("num3").value;
  var num4 = document.getElementById("num4").value;
  var num3 = parseInt(num3);
  var num4 = parseInt(num4);
  var javab = 1;
  var i = 0;
  while (i < num4) {
    javab = javab * num3;
    i++;
  }
  document.getElementById("resultt").innerHTML = javab;
}
//------------------------------------
var k = 0;
while (jame[k]) {
  //document.write(jame[k]);
  k++;
}
// az kode break; baraye payane barresi estefade mishe
for (var t = 0; t <= 10; t++) {
  if (t == 5 || t == 3 || t == 7) {
    // break;
    continue; // in halghe ro ejra nemikone mire soragh bade
  }
  //document.write(t);
}
//-------------------
var y = 0;
do {
  //document.write(y + "x");
  y++;
} while (y <= 5);
//-------------------
function barresi() {
  var x = document.getElementById("intorfloat").value;
  var x = parseInt(x);
  if (x === parseInt(x)) {
    document.getElementById("barresi").innerHTML = "number";
  } else {
    document.getElementById("barresi").innerHTML = "matne";
  }
} // bug dare 90mmfdsf ham int mizane
//------------------
//amozeshi
try {
// chizi ke test mishe
}
catch{
// age khata bod ejra mishe
}
finally{
// dar har sorat ejra mishe , mitone ham nabashe
}
//------------------------------------
function Register() {
  var age , Result;
  age = document.getElementById("age").value;
  Result = document.getElementById("Register");
  try {
    if (age == "") throw "are dont have age?";
    if (isNaN(age)) throw "age its number! Not a ...";
    age = Number(age)
    if (age < 20) throw " are a kid just wait";
    if (20 <= age && age <= 40 ) throw "are Registered";
    if (age > 40) throw "are so old its to late";
  }
  catch (error){
    Result.innerHTML = error;
  }
  finally {
    document.getElementById("age").value = "";
  }
};
//------------------------------------    14
// this be on function , var ya code ke dakhelesh hast barmigarde
var person = {
  firtsName: "ariyan",
  lastName: 'kermani',
  myname: function() {
    return this.firtsName + " " + this.lastName;
  }
};
// ye mesal ham dakhel code dokme
//---------------
var testx = 10;
{
  var testx = 20; //var birone block ham mishe sedash kard (bejoz function)
}
function ad() {
  var testx = 30;
}
ad();
document.getElementById("test1").innerHTML = testx;
//--------------
var testy = 5;
{
  let testy = 5;  // meghdare let faghad makhsos hamon block hast
}
document.getElementById("test2").innerHTML = testy;
//-------------
var g = 5 // its var g = 5
for (var g = 0 ; g < 10 ; g++) {
}  // its var g = 10
for (let g = 20 ; g < 30 ; g++) {
} // its var g = 29 "in block"
document.getElementById("test3").innerHTML = g;
//------------------------------------ 15
const h = 100; // meghdare const dige taghir nemikone
//var h = 200; // error mide chon meghdar "const h" ghabel taghir nist
var ax = 0
function change() {
  ax = 6;
};
change(); // change ax from 0 to 6
//alert(ax);
//--------------------------------------
