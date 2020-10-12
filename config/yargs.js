const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca completada la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear el elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza estado de la tarea a completado', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}