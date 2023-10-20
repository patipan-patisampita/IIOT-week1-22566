// function switch_on() {
//     document.getElementById('lamp').src = "light_on.png"
// }

// function switch_off() {
//   document.getElementById("lamp").src = "light_off.png";
// }

function light(show) {
  var lamp;
  if (show == 0) {
    lamp = "light_off.png";
  } else {
    lamp = "light_on.png";
  }
  document.getElementById("lamp").src = lamp;
}
