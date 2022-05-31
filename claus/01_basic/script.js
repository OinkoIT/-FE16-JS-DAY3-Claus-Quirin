/* ex 1 | Temperature v1.0
Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. This program should generate a different random number every time, which should be between -5c and 25c. If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate". 

Hint: Math.random() will give you a random number between 0 and 1, but it will not reach number 0 or 1, so any value between these two numbers (for example 0,315 , 0,91239 0,1) so if you try to multiply it with 10, you can have a random number between 0 and 10 :). */

// var temp = (Math.floor(Math.random() * 30)) -5;

// console.log(temp);

// if (temp >= 11) {
//     document.write("The weather is moderate");
// } else {
//     document.write("The weather is cold");
// }

/* ex 2 | Highest value in an array
Create a program to find the highest value in an array. 

E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9. */

var array = [1, 7, -3, 9];

console.log(Math.max(...array));

/* ex 3 | Temperature v2.0
Now when you have program Temperature v1.0 done it time to upgrade it to the version 2.0. Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition. */

var temp = (Math.floor(Math.random() * 40)) -5;

document.getElementById("temp").innerHTML = "Es hat " + temp + " Grad.";


if (temp >= 11) {
    document.getElementById("interpret").innerHTML = "Das Wetter ist schön.";
    document.getElementById("img").innerHTML = "<img src=\"https://images.unsplash.com/photo-1465577512280-1c2d41a79862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1747&q=80\" width=\"400px\" height=\"150px\">";
} else {
    document.getElementById("interpret").innerHTML = "Das Wetter ist schirch.";
    document.getElementById("img").innerHTML = "<img src=\"https://images.unsplash.com/photo-1484834762280-66a18a5a8f0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80\" width=\"400px\" height=\"150px\">";
}
