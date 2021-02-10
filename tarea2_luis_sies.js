/* 
Tarea 2 JavaScript ESCALAB
Nombre: Luis Sies (MyNewSoundtrack en Google Meet)
*/

// 1 - Objeto JS
let objeto_tarea = {
    mascotas: ['perros', 'gatos', 'canarios', 'pez', 'serpiente'],
    eliminarMascota: function (tipo_mascota) {
        let indice_tipo = this.mascotas.indexOf(tipo_mascota);

        if (indice_tipo >= 0) {
            let mascotas_nuevo = this.mascotas;
            mascotas_nuevo.splice(indice_tipo, 1);
            return mascotas_nuevo;
        } else {
            console.log('Elemento no encontrado :/');
        }
    },
    eliminarUltimaMascota: function () {
        let indice_a_eliminar = ((this.mascotas.length) - 1);
        let mascotas_nuevo = this.mascotas;
        mascotas_nuevo.splice(indice_a_eliminar, 1);
        return mascotas_nuevo
    },
    agregarMascota: function (nueva_mascota) {
        let mascotas_nuevo = this.mascotas;
        mascotas_nuevo.push(nueva_mascota);
        return mascotas_nuevo;
    },
    contadorMascotas: function () {
        let contador = 0;
        this.mascotas.forEach(mascota => {
            if (mascota.endsWith('os')) {
                contador++;
            }
        })
        return `En el arreglo hay ${contador} mascotas que terminan con 'os'`;
    }
}

// 2 - Desestructuración
const trabajador = {
    nombre: 'John Smith',
    cargo: 'QA',
    empresa: {
        ubicacion: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google', 'Amazon'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,

}

function infoPersonal(trabajador) {

    const { nombre, empresa: { datos: { nombre: nombreEmpresa } }, cargo, gustos: [primerElemento, ...otros], hijos } = trabajador;

    let str_hijos = '';
    if (hijos === null) {
        str_hijos = 'no tiene hijos.'
    } else {
        str_hijos = `tiene ${hijos} hijos.`
    }

    return `El trabajador ${nombre} trabaja en ${nombreEmpresa} con cargo ${cargo}, le gusta ${primerElemento} y ${otros.length} más, ${str_hijos}`;
}

function infoProfesional(trabajador) {
    const { nombre, empresa: { clientes, ubicacion: { comuna, puesto } }, cargo, } = trabajador;

    let str_clientes = '';
    clientes.forEach((cli, index) => {
        // Verificar primer elemento
        if (str_clientes.length > 1) {
            // Verificar último elemento
            if (index == clientes.length - 1) {
                str_clientes += ' y ' + cli;
            } else {
                str_clientes += ', ' + cli;
            }
        } else {
            str_clientes += cli;
        }
    })

    return `El trabajador ${nombre} va a su trabajo en ${comuna}, es ${cargo}, en el puesto (${puesto}), trabaja con ${str_clientes}`;
}