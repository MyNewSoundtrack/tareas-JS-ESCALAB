/* 
Tarea 3 JavaScript ESCALAB
Nombre: Luis Sies (MyNewSoundtrack en Google Meet)
*/

// Object.values(hijos).filter(hijo => hijo === 'juan');


// 1 - Órdenes que contienen Lechuga y Palta
const lechugaYpalta = () => {
    const elementos_a_buscar = ['lechuga', 'palta'];
    const resultado = sandwichOrders.filter(sandwichOrder => {
        return sandwichOrder.ingredients.some(r => elementos_a_buscar.includes(r));
    })

    return resultado;
}

// 2 - Encontrar Orden
const buscarOrden = (id_a_buscar) => {
    const posicionEncontrado = sandwichOrders.map((sandwichOrder) => { return sandwichOrder.id; }).indexOf(id_a_buscar);

    if (posicionEncontrado < 0) {
        return `No se encontró la orden con id (${id_a_buscar})`;
    } else {
        const { ordered, protein, bread } = sandwichOrders[posicionEncontrado];
        return `La orden fue realizada el ${ordered}, la orden llevó ${protein} y ${bread}.`;
    }
}

// 3 - Ver si tiene pepinillos
const revisarPepinillos = (id_a_buscar) => {
    const posicionEncontrado = sandwichOrders.map((sandwichOrder) => { return sandwichOrder.id; }).indexOf(id_a_buscar);

    if (posicionEncontrado < 0) {
        return `No se encontró la orden con id (${id_a_buscar})`;
    } else {
        return (sandwichOrders[posicionEncontrado].ingredients.includes('pepinillos')) ? true : false;
    }
}

// 4 - Contar órdenes por fecha
const contarOrdenesPorFecha = (fecha) => {
    const cantidad = sandwichOrders.filter((orden) => { return orden.ordered === fecha }).length;

    return `Se encontraron ${cantidad} órdenes para la fecha ${fecha}`;
}

// 5 - Fechas de todas las órdenes con 'not burger' y 'cebolla caramelizada'
const fechasNByCC = () => {
    let fechas = [];
    const resultado = sandwichOrders.filter((orden) => {
        if (orden.ingredients.includes('cebolla caramelizada') && orden.protein === 'not burger') {
            fechas.push(orden.ordered);
        }
    })

    console.log('Todas las fechas', fechas);
    console.log('Fechas únicas', [... new Set(fechas)]);
}

// Ejercicio Difícil - reduce()
// Arreglo de órdenes por tipo de pan
const ordersByBread = (allBreads, currentBread) => {
    const { bread } = currentBread;
    const { [bread]: currentBreadList = [] } = allBreads;
    allBreads[bread] = [...currentBreadList, currentBread];
    return allBreads;
}

// Función final que devuelve el objeto
let orderOrdersByBread = () => {
    let orders = sandwichOrders.reduce(
        ordersByBread, {}
    );

    // Arreglo final
    arr_nuevo = [];
    (Object.entries(orders)).forEach(element => {
        // Se guarda cantidad por cada pan en vez de un arreglo con las órdenes
        arr_nuevo.push([element[0], element[1].length]);
    });

    // Map con arreglo nuevo
    const entries = new Map(arr_nuevo);

    // Crear objeto a partir del map hecho con el arreglo nuevo
    const obj = Object.fromEntries(entries);
    return obj;
}