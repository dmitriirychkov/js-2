// String
console.log(String(console.log)); // "function log() { [native code] }" 

// Number
console.log(Number(console.log)); // NaN 

// Boolean
console.log(Boolean(console.log)); // true 


// String
console.log(String({ name: 'Maxim' })); // "[object Object]" 

// Number
console.log(Number({ name: 'Maxim' })); // NaN 

// Boolean
console.log(Boolean({ name: 'Maxim' })); // true 


// String
console.log(String(Symbol('key'))); // "Symbol(key)" 

// Number
console.log(Number(Symbol('key'))); // Uncaught TypeError: Cannot convert a Symbol value to a number

// Boolean
console.log(Boolean(Symbol('key'))); // true


// String
console.log(String(Number)); // "function Number() { [native code] }" 

// Number
console.log(Number(Number)); // NaN 

// Boolean
console.log(Boolean(Number)); // true 


// String
console.log(String('')); // "" 

// Number
console.log(Number('')); // 0 

// Boolean
console.log(Boolean('')); // false 


// String
console.log(String(0)); // "0"

// Number
console.log(Number(0)); // 0

// Boolean
console.log(Boolean(0)); // false 


// String
console.log(String(-10)); // "-10" 

// Number
console.log(Number(-10)); // -10 

// Boolean
console.log(Boolean(-10)); // true 


// String
console.log(String('-105')); // "-105" 

// Number
console.log(Number('-105')); // -105 

// Boolean
console.log(Boolean('-105')); // true 
