let students = ['John', 'Jane', 'Dodel'];
let scores = [70, 85, 100];
var result = prompt("type your name");

let index = students.indexOf(result);
if (index == -1) console.error('Name not found');
else {
    let score = scores[index];

    let color = 'red';
    if (score == 100) color = 'blue';
    else if (score > 70) color = 'green';
    else if (score > 60) color = 'yellow';

    document.write(`<div style="color: ${color}">${students[index]} has reached ${score} in Math this season.</div>`);
}