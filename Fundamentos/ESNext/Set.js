/**
 * O SET é uma estrutura de conjunto não indexada e não aceita repetições
 */

const times = new Set(); // Inicializando, igual ao JAVA
times.add('Vasco');
times.add('Palmeiras').add('Curica').add('Bambi');
times.add('Botafogo');
times.add('Santos');

console.log(times);
console.log(times.has('vasco')); // false
console.log(times.has('Vasco')); // true
times.delete('Curica');
console.log(times.has('Curica')); // false

const escuderias = ['Ferrari', 'Mercedes', 'Red Bull', 'Alpha Tauri'];
const escuderiasSet = new Set(escuderias);
console.log(escuderias);