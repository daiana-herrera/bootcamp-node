/*
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50
 */

const fs = require('fs');

console.clear();
console.log('=============');
console.log (' Tabla del 5');
console.log('=============');

 const base = 5;
 let salida = '';

for(let i = 1; i<=10; i++) {
salida += `${ base } x ${ i } = ${ base * i }\n`;
}

console.log(salida);

fs.writeFile('tabla-5.txt',salida, (err) =>{
    if (err) throw err;

    console.log('tabla-5.txt creada')
})