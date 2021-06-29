const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5) => {

    return new Promise((resolve, reject) => {

        console.log('===========================');
        console.log(' Tabla del:', base);
        console.log('===========================');

        let salida = '';

        for(let i = 1; i <= 10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync( `tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);
    });

}

const crearArchivo2 = async(base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida, consola = '';

        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`;
        }

        if(listar){
            console.log('==========================='.green);
            console.log(' Tabla del:',colors.red(base));
            console.log('==========================='.green);

            console.log(consola);
        }

        

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }
}



module.exports = {
    crearArchivo,
    crearArchivo2
}
