var timer = document.getElementsByClassName("timer")[0];
var start = Date.now();
var hours = localStorage.getItem("hours");
var minutes = localStorage.getItem("minutes");
var startTime = ((hours*60) + minutes) * 60000
setInterval(function(){
  var delta = Date.now() - start;
  var timeleft = startTime - delta;
  timer.innerHTML = "<h1>" + new Date(timeleft).toISOString().substr(11, 8) + "</h1>";
}, 100);
