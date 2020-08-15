var submit = document.getElementById("submitbutton");
var hours = document.getElementById("hours").value;
var minutes = document.getElementById("minutes").value;

submit.addEventListener("click", setLocalTimer(hours, minutes));

function setLocalTimer(hours, minutes){
  localStorage.setItem("hours", hours);
  localStorage.setItem("minutes", minutes);
  // alert("Submitted:", hours, minutes);
}
