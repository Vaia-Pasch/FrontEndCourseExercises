const ftoc = function(fahrenheit) {
  let farTemp = (5/9) *(fahrenheit - 32);
  let resultFar = Math.round( farTemp * 10) / 10;
  return resultFar;

}

const ctof = function(celcius) {
  let celTemp = celcius * 9/5 + 32;
  let resultCel = Math.round( celTemp * 10) / 10;
  return resultCel;

}

module.exports = {
  ftoc,
  ctof
}
