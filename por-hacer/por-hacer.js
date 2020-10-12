const fs = require('fs');


let listadoTareas = [];


const cargarDB = () => {
    try {
        listadoTareas = require('../db/data.json');
    } catch (error) {
        listadoTareas = [];
    }

}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB();
    listadoTareas.push(porHacer);
    guardarDB();
    return porHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se grabo', err);
    });
}

const getListado = () => {
    cargarDB();
    return listadoTareas;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoTareas[index].completado = completado;
        guardarDB();
        return true;
    } else {
        console.log('No encontro tarea');
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoTareas.splice(index, 1)
        guardarDB();
        return true;
    } else {
        console.log('No encontro la tarea a borrar');
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}