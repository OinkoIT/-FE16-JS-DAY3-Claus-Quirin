/* ex 1 | Compare two numbers


Create a JavaScript program that will show the average grade for each student. Here are the points for each student:

Martin = 76

Thomas = 85

Klaus = 65

Maria = 93

David = 81

Based on their points, output the grade, according to the following table:

< 60 F

< 70 D

< 80 C

< 90 B

< 100 A

Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C). */

// var studentPoints = [["Martin", "Thomas", "Klaus", "Maria", "David"], [76, 85, 65, 93, 81]];

// for (i = 0; i < 5; i++ ) {
//     if (studentPoints[1][i] < 60) {
//         console.log((studentPoints[0][i]) + ", you have " + (studentPoints[1][i]) + " points. Your grade is F.");
//     }
//     if (studentPoints[1][i] < 70 && studentPoints[1][i] >= 60 ) {
//         console.log(studentPoints[0][i] + ", you have " + studentPoints[1][i] + " points. Your grade is D.");
//     }
//     if (studentPoints[1][i] < 80 && studentPoints[1][i] >= 70 ) {
//         console.log(studentPoints[0][i] + ", you have " + studentPoints[1][i] + " points. Your grade is C.");
//     }
//     if (studentPoints[1][i] < 90 && studentPoints[1][i] >= 80 ) {
//         console.log(studentPoints[0][i] + ", you have " + studentPoints[1][i] + " points. Your grade is B.");
//     }
//     if (studentPoints[1][i] <= 100 && studentPoints[1][i] >= 90 ) {
//         console.log(studentPoints[0][i] + ", you have " + studentPoints[1][i] + " points. Your grade is A.");
//     }
// }

// var average = (studentPoints[1][0] + studentPoints[1][1] + studentPoints[1][2] + studentPoints[1][3] + studentPoints[1][4])/5;

// if (average < 60) {
//     console.log("Class, you have " + average + " points on avaerage. Your average grade is F.");
// }
// if (average < 70 && average >= 60 ) {
//     console.log("Class, you have " + average + " points on avaerage. Your average grade is D.");
// }
// if (average < 80 && average >= 70 ) {
//     console.log("Class, you have " + average + " points on avaerage. Your average grade is C.");
// }
// if (average < 90 && average >= 80 ) {
//     console.log("Class, you have " + average + " points on avaerage. Your average grade is B.");
// }
// if (average <= 100 && average >= 90 ) {
//     console.log("Class, you have " + average + " points on avaerage. Your average grade is A.");
// }

/* Create a JavaScript program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

e.g. 

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
etc. */

// for (i=1; i<=100; i++) {
//     if (i%3==0 && i%5==0) {
//         console.log("FizzBuzz")
//     } else if ( i%3==0) {
//         console.log("Fizz")
//     } else if ( i%5==0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

/* ex 3
try to recreate this form using a loop :

*

**

***

****

*****

****** */

var asterix = []

for (i=1; i<=6; i++) {
    asterix.push("*");
    console.log(asterix);
}
