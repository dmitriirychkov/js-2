const salariesOfDevelopers = [400, 500, 600, 2000, 350];

// Добавление элементов 
const newSeniorDeveloperSalary = 5000;
salariesOfDevelopers.push(newSeniorDeveloperSalary, 5010, 5050);

salariesOfDevelopers.unshift(100, 101, 102, 103);
console.log('salariesOfDevelopers', salariesOfDevelopers);

// Удаление элементов 
const firstRemovedElement = salariesOfDevelopers.shift();
salariesOfDevelopers.shift ();

const lastRemovedElement = salariesOfDevelopers.pop();

/* 
console.log('firstRemovedElement', firstRemovedElement);
console.log('salariesOfDevelopers', salariesOfDevelopers);
console.log('lastRemovedElement', lastRemovedElement); 
*/

// Изменение элементов 
salariesOfDevelopers[4] = 6000;
console.log('salariesOfDevelopers', salariesOfDevelopers);


