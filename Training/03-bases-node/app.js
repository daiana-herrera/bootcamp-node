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

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );

//const [ , , arg3 ='base=5'] = process.argv;
//const [ , base = 5] =arg3.split('=');


//const base = 3;

//crearArchivo(base)
//    .then(nombreAchivo => console.log(nombreAchivo, 'creado'))
//    .catch(err => console.log(err));
