
const getPos = navigator.geolocation.getCurrentPosition(function(position) {
  console.log("it works" position.coords.latitude, position.coords.longitude);
});

// OR

const getPosByIP = function(){
  // let userIP = logic for grabbing userIP
  $.getJSON('freegeoip.net/{format}/{'+ userIP +'}').then(console.log)
}
export default {
  getPos,
  getPosByIP
}
