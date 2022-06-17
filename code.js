var myArray = [1, 5, 6, 2, 3, 4, 7];
document.getElementById("myArray").innerHTML = myArray;


var min = Math.min(...myArray);
document.getElementById("min").innerHTML = min;


var max = Math.max(...myArray);
document.getElementById("max").innerHTML = max;

// check the console for the min and max values of the array