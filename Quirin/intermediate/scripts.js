function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('EXAMPLE 1 ----------------');

let grades = {
    'Martin': {
        points: 76
    },
    'Thomas': { points: 85 },
    'Klaus': { points: 65 },
    'Maria': { points: 93 },
    'David': { points: 81 }
};
let thresholds = {
    0: 'F',
    60: 'D',
    70: 'C',
    80: 'B',
    90: 'A'
}
let sum = 0;

for (let name in grades) {
    let point = grades[name].points;
    let curr_grade = 'F';
    sum += point;
    for (let grade in thresholds) {
        if (point >= grade) curr_grade = thresholds[grade];
        else break;
    }
    grades[name]['grade'] = curr_grade;
}
console.log(grades);

let avg = sum / Object.keys(grades).length;
let avg_grade = 'F';
for (let grade in thresholds) {
    if (avg >= grade) avg_grade = thresholds[grade];
    else break;
}

console.log('Class average score: ', avg);
console.log('Class average grade: ', avg_grade);


console.log('EXAMPLE 2 ----------------');
for (let i = 0; i <= 20; i++) {
    let message = '';
    let multiple = false;
    if (i % 3 == 0) {
        message += 'Fizz';
        multiple = true;
    }
    if (i % 5 == 0) {
        message += 'Buzz';
        multiple = true;
    }
    if (!multiple) message = i;
    console.log(message);
}


console.log('EXAMPLE 3 ----------------');
for (let i = 1; i <= 6; i++) {
    let msg = '';
    for (let c = 0; c < i; c++) {
        msg += '*';
    }
    console.log(msg);
}