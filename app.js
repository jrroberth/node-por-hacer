//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('tarea creado OK');
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('++ Listado de tareas ++'.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('+++++++++++++++++++++'.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('tarea actualizada OK ', actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(`tarea borrada ${ borrar }`);
        break;
    default:
        console.log('comando no reconocido');
        break;
}