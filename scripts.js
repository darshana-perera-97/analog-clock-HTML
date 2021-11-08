const deg = 6;
const hrs = document.getElementById("hrs");
const mins = document.getElementById("mins");
const secs = document.getElementById("sec");

var day = new Date();
var hh = day.getHours();
var mm = day.getMinutes() * deg;
var ss = day.getSeconds() * deg;


var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var b = today.getMinutes()
var ba = 14
console.log(b);
// hrs.style.transform = 'rotateZ(${(mm)+(mm/12)}deg)'
document.getElementById('sec').style.transform = 'rotateZ(25deg)'
// document.getElementById('sec').style.background = ba
