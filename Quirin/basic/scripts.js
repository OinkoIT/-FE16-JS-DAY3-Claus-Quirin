function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('EXAMPLE 1 ----------------');
let random = getRandomInt(0, 30) - 5;
if (random >= -5 && random <= 10) {
    console.log('The weather is cold (' + random + ' degrees)');
} else console.log('The weather is hot (' + random + ' degrees)');


console.log('EXAMPLE 2 ----------------');
let values = [1, 7, -3, 9];
console.log(Math.max(...values));

console.log('EXAMPLE 3 ----------------');
console.log('No thank you');