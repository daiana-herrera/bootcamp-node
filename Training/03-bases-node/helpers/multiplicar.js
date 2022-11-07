
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5) => {
    try {
        console.log('============='.blue);
        console.log('tabla del:', colors.bgMagenta (base));
        console.log('============='.blue);

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${'x'.yellow}  ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla del ${base}.txt creada`;

    } catch (err) {
        throw err;

    }

}

module.exports = {
    crearArchivo
}

