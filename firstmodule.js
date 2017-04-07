module.exports = {
  Weather: function(temp) {
    console.log('Advice for today: ' + temperature(temp) + '.');
  }
}

function temperature(x) {
  var ad = "";
  if (x > 18){
    ad = 'Warm enough, go outside!';
  } else {
    ad = 'Too cold, don\'t go outside';
  }
  return ad;
}