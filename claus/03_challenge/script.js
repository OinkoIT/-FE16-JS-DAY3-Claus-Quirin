/* ex Description:

To solve this task, you will need two arrays: Student and MathGrades. The arrays should have respectively in Students, the students names and in the MathGrades, in the same index, the students grade for Maths going from 0 to 100.

Students = [“John”, “Jane”]

MathGrades = [70, 85]

There should be a variable that can store a student's name. This name should be compared to the Students array and, when it is found, should output the name and grade, nicely on the screen. I.e.:
John has reached 70 points in Math this season.

The grades should also be checked and if it is less than 60 it should show it in red color, if it is between 60 and 70, it should be yellow, over 70 it should show green and if it is 100, it should be blue.

Hint: 
prompt() function will make an alert window that has an input inside, when the user types its name in it, it can be saved in a variable, for example:
var result = prompt("type your name");*/

var students =["John", "Jane", "Bauxi", "Ernsti"];
var mathGrades =[5,63,100,100];

var entered = prompt("Please enter your first name");

var index = students.indexOf(entered);

document.getElementById("greet").innerHTML =  "Hello " + entered + ".";

if (index == -1) {
    document.getElementById("info").innerHTML = entered + " could not be found within the system."
} else {
    let grade = mathGrades[index];
    document.getElementById("info").innerHTML = entered + " has reached " + grade + " points.";
    if (grade < 60 ) {
    let bad = document.getElementsByClassName("color");
    bad[0].style.color = "red";
    }
    if (grade < 70 && grade >= 60 ) {
    let okay = document.getElementsByClassName("color");
    okay[0].style.color = "yellow";
    }
    if (grade >= 70 ) {
    let good = document.getElementsByClassName("color");
    good[0].style.color = "blue";
    }
}


