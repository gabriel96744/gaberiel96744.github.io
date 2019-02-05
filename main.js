sessionStorage.clear();

var p = Mydata;
var $ = document;
var subtotal = [];
var menu = {

  "name1": "Kinako mochi",
  "price1": 2.50,

  "name2": "Katakuriko mochi",
  "price2": 1.75,

  "name3": "Udon",
  "price3": 6.50,

  "name4": "Ramen",
  "price4": 5.75,


  "name5": "Ton-Katsu",
  "price5": 7.50,


  "name6": "Chicken-Katsu-Curry",
  "price6": 7.75,

  "tax": 0.04712,
};

var menu = JSON.stringify(menu);
var Mydata = JSON.parse(menu);
var tax = Mydata.tax;
$.getElementById('foodDesc1').innerHTML = "$" + Mydata.price1.toFixed(2);
$.getElementById('foodDesc2').innerHTML = "$" + Mydata.price2.toFixed(2);
$.getElementById('foodDesc3').innerHTML = "$" + Mydata.price3.toFixed(2);
$.getElementById('foodDesc4').innerHTML = "$" + Mydata.price4.toFixed(2);
$.getElementById('foodDesc5').innerHTML = "$" + Mydata.price5.toFixed(2);
$.getElementById('foodDesc6').innerHTML = "$" + Mydata.price6.toFixed(2);
$.getElementById('fooditem6').innerHTML = Mydata.name6;
$.getElementById('fooditem5').innerHTML = Mydata.name5;
$.getElementById('fooditem4').innerHTML = Mydata.name4;
$.getElementById('fooditem3').innerHTML = Mydata.name3;
$.getElementById('fooditem2').innerHTML = Mydata.name2;
$.getElementById('fooditem1').innerHTML = Mydata.name1;
console.log("JSON Operation completed");

function addfoodrm1() {

  //var food = Menu1Name

  var q1 = $.getElementById('quant1').value;
 q1.isNaN(){
   return=0;}

  var c = Mydata.price1;

  var subtotal1 = q1 * c;



  subtotal.push(subtotal1);

  $.getElementById('statusbar1').innerHTML = "Subtotal : " + "$" + subtotal1.toFixed(2) + " = " + "" + q1 + Mydata.name1;

  $.getElementById('foodName1').innerHTML = " ";

  sessionStorage.setItem("a1",subtotal1);
  sessionStorage.setItem("kinako", q1);
}

function addfoodrm2() {

  //var food = Menu1Name

  var q2 = $.getElementById('quant2').value;
q2.isNaN(){
  return=0;}
  
  var c = Mydata.price2;

  var subtotal2 = q2 * c;


  subtotal.push(subtotal2);

  $.getElementById('statusbar2').innerHTML = "Subtotal : " + "$" + subtotal2.toFixed(2) + " = " + "" + q2 + Mydata.name2;

  $.getElementById('foodName2').innerHTML = " ";
  //foodsRm1.push(food);
  sessionStorage.setItem("a2",subtotal2);
  sessionStorage.setItem("katakuriko", q2);
}

function addfoodrm3() {

  //var food = Menu1Name

  var q2 = $.getElementById('quant3').value;
q2.isNaN(){return=0}
  var c = Mydata.price3;

  var subtotal2 = q2 * c;


  subtotal.push(subtotal2);

  $.getElementById('statusbar3').innerHTML = "Subtotal : " + "$" + subtotal2.toFixed(2) + " = " + "" + q2 + Mydata.name3;

  $.getElementById('foodName3').innerHTML = " ";
  //foodsRm1.push(food);
  sessionStorage.setItem("a3",subtotal2);
  sessionStorage.setItem("Udon", q2);
}

function addfoodrm4() {

  //var food = Menu1Name

  var q2 = $.getElementById('quant4').value;
q2.isNaN(){return=0}
  var c = Mydata.price4;

  var subtotal2 = q2 * c;


  subtotal.push(subtotal2);

  $.getElementById('statusbar4').innerHTML = "Subtotal : " + "$" + subtotal2.toFixed(2) + " = " + "" + q2 + Mydata.name4;

  $.getElementById('foodName4').innerHTML = " ";
  //foodsRm1.push(food);
  sessionStorage.setItem("a4",subtotal2);
  sessionStorage.setItem("ramen", q2);
}

function addfoodrm5() {

  //var food = Menu1Name

  var q2 = $.getElementById('quant5').value;
q2.isNaN(){return=0}
  var c = Mydata.price5;

  var subtotal2 = q2 * c;


  subtotal.push(subtotal2);

  $.getElementById('statusbar5').innerHTML = "Subtotal : " + "$" + subtotal2.toFixed(2) + " = " + "" + q2 + Mydata.name5;

  $.getElementById('foodName5').innerHTML = " ";
  //foodsRm1.push(food);
  sessionStorage.setItem("a5",subtotal2);
  sessionStorage.setItem("Ton-katsu", q2);
}

function addfoodrm6() {

  //var food = Menu1Name

  var q2 = $.getElementById('quant6').value;
q2.isNaN(){return=0}
  var c = Mydata.price6;

  var subtotal2 = q2 * c;


  subtotal.push(subtotal2);

  $.getElementById('statusbar6').innerHTML = "Subtotal : " + "$" + subtotal2.toFixed(2) + " = " + "" + q2 + Mydata.name6;

  $.getElementById('foodName6').innerHTML = " ";
  //foodsRm1.push(food);
  sessionStorage.setItem("a6",subtotal2);
  sessionStorage.setItem("Chicken-Katsu-Curry", q2);
}

function done() {
  var subtotal0 = subtotal[0] + subtotal[1] + subtotal[2] + subtotal[3] + subtotal[4] + subtotal[5];

  sessionStorage.setItem('total', subtotal0);
  location.href = "checkout.html";
}
