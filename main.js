// declare vaiarble kelvin and assign a value of 293
var kelvin = 293;

//Decare and initialize celsius. Value of Celisius is 273 less than Kelvin
var celsius = kelvin - 273;
// var kelvinToCelsius = - 273;
// var celsius = kelvin + kelvinToCelsius; 

//  variable for celisus to farenhiet conversion
var fahrenheit = celsius * (9/5) + 32;
var newton = celsius * (33/100);

// Fahrenheit redelcared as a rounded down integer 
var fahrenheit = Math.floor(fahrenheit)
var newton = Math.floor(newton)

var fahrenheitStr = `The temperature is ${fahrenheit}\u00B0F.`

var celsiusStr = `The temperature is ${celsius}\u00B0C.`

var kelvinStr = `The temperature is ${kelvin}\u00B0K.`

// WHY & WHEN would interpolation need to happen like this?
var newtonTemp = {newton}
var newtonStr = `The temperature is ${newtonTemp.newton}\u00B0K.`

console.log(fahrenheitStr)
// console.log(celsiusStr)
// console.log(kelvinStr)
// console.log(newtonStr)
// console.log(celsius);
// console.log(fahrenheit);
// console.log(newton)
