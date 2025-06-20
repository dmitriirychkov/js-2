const array = [17, 12, 54, 80, 10, 2, 25, 93, 83, 15];

let min = array[0]; 
let max = array[0]; 

for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
    if (array[i] > max) {
        max = array[i];
    }
}

console.log(min); 
console.log(max); 
