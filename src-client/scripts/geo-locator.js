
const getPos = navigator.geolocation.getCurrentPosition(function(position) {
  console.log("it works" position.coords.latitude, position.coords.longitude);
});
module.exports {
  getPos
}
