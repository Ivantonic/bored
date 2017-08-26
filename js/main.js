var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$(function () {

  showText("#msg", "Hello :) I have a question.", 0, 100);   

});

$(function() {
  setTimeout(function() {
    $("#hello-button").show();
  }, 3500);
});

//-----------------------------------------------------------

var showText3 = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

//lllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

function showDiv3() {
   showText3("#msg2", "What is the meaning of life?", 0, 66);  
}

function showDiv () {
   document.getElementById('welcomeDiv').style.display = "block";
}

//-----------------------------------------------------------

function showDiv2 () {
   document.getElementById('forty-two').style.display = "block";
   document.getElementById('love').style.display = "none";
   document.getElementById('chocolate').style.display = "none";
}

//-----------------------------------------------------------

function showDiv4() {
   document.getElementById('love').style.display = "block";
   document.getElementById('forty-two').style.display = "none";
   document.getElementById('chocolate').style.display = "none";
}

//-----------------------------------------------------------

function showDiv1() {
   document.getElementById('chocolate').style.display = "block";
   document.getElementById('forty-two').style.display = "none";
   document.getElementById('love').style.display = "none";
}

//-----------------------------------------------------------

function play(){
    var audio = document.getElementById("audio");
    audio.play();
}

function play2(){
    var audio = document.getElementById("audio2");
    audio.play();
}

function play3(){
    var audio = document.getElementById("audio3");
    audio.play();
}