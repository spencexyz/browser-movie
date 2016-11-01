var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var header = document.getElementById('header');
var button = document.getElementById('playButton');

function playMovie() {
  document.getElementById('soundtrack').play();
  var newWindow = window.open('scenes/scene1.html', 'scene1', 'height=500, width=900, right=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  setTimeout(function(){
    newWindow.close();
    playScene2();
  }, 6500); //6500
};

function playScene2() {
  var adjustedWidth = width - 800;
  var newWindow = window.open('scenes/scene2.html', 'scene2', 'height=400, width=800, left=' + adjustedWidth + ', top=' + height + ', toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  setTimeout(function(){
    newWindow.close();
    playScene3();
  }, 6500); //6500
};

function playScene3() {
  var psuedoCenter = ((width - 600) / 2);
  var newWindow = window.open('scenes/scene3.html', 'scene3', 'height=520, width=600, left=' + psuedoCenter + ', top=100, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  setTimeout(function(){
    newWindow.close();
    playScene5();

    setTimeout(function(){
      playScene4();
    }, 100)
  }, 6500); //6500
};

function playScene4() {
  var adjustedHeight = (height + 150);
  var newWindow = window.open('scenes/scene4.html', 'scene4', 'height=' + adjustedHeight + ', width=500, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  setTimeout(function(){
    newWindow.close();
    playScene6();
  }, 4800); //4800
}

function playScene5() {
  var adjustedWidth = width - 800;
  var cameraWidth = width - 500;
  var secondWindow = window.open('scenes/scene5.html', 'scene5', 'height=300, left=' + width + ', top=' + height + ', width=' + cameraWidth + ', toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  setTimeout(function(){
    secondWindow.close();
  }, 3500); //3500
}

function playScene6() {
  var newWindow = window.open('scenes/scene6.html', 'scene6', 'height=500, left=' + width + ', top=0, width=450, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  setTimeout(function(){
    newWindow.close();
    playScene8();
  }, 13000); //13000
  setTimeout(function(){
    playScene7();
  }, 1000); //1000
}

function playScene7() {
  var newWindow = window.open('scenes/scene7.html', 'scene7', 'height=500, left=0, top=' + height + ', width=940, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  setTimeout(function(){
    newWindow.close();
  }, 9000); //9000
}

function playScene8() {
  var newWindow = window.open('scenes/scene8.html', 'scene8', 'height=500, left=0, top=' + height + ', width=800, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  setTimeout(function(){
    newWindow.close();
    playScene9();
  }, 7500); //7200
}

function playScene9() {
  var newWindow = window.open('scenes/scene9.html', 'scene9', 'height=400, left=' + width + ', top=0, width=600, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  setTimeout(function(){
    newWindow.close();
    playScene10();
  }, 3000); //6500
}

function playScene10() {
  var psuedoCenter = ((width - 800) / 2);
  var newWindow = window.open('scenes/scene10.html', 'scene10', 'height=530, left=' + psuedoCenter + ', top=100, width=800, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  setTimeout(function(){
    newWindow.close();
  }, 9000); //6500
  setTimeout(function(){
    theEnd();
  }, 8500);
}

function theEnd() {
  header.innerHTML = "The End";
  playButton.innerHTML = "Again?";
}





