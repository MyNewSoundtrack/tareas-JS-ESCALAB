/* 
Tarea JavaScript ESCALAB
Nombre: Luis Sies (MyNewSoundtrack en Google Meet)
*/

// Función 1: Par o Impar
function esPar(numero) {
    return (numero % 2 == 0) ? 'Número es par' : 'Número es impar';
}

// Función 2: Devolver índice
function indiceEnString(str) {
    let cadena = "abcdefghijklmnñopqrstuvwxyz";
    return cadena.indexOf(str) >= 0 ? cadena.indexOf(str) : 'El string ingresado no se encuentra en la cadena dada';
}

// Función 3: Cálculo de impuesto
function calcularImpuesto(numero) {
    if (!(numero == NaN))
        return `El precio con impuesto es de $${Math.round(numero * 1.19)}`;
}

// Función 4: Tirar Dado
function nuevoDado(nombre) {
    return function() {
        let dadoLanzado = Math.round(Math.random() * 5) + 1;
        return (`${nombre} tiró un dado y salió: ${dadoLanzado}`);
    }
}

// Función 5: Prototype de Persona
function Persona(nombres, apellido_p, apellido_m, edad) {
    this.nombres = nombres;
    this.apellido_p = apellido_p;
    this.apellido_m = apellido_m;
    this.edad = edad;
}

Persona.prototype.guardarEnLocalStorage = function() {
    localStorage.setItem('nombre_completo', `${this.nombres} ${this.apellido_p} ${this.apellido_m}`);
    localStorage.setItem('edad', this.edad);
}

Persona.prototype.guardarEnSessionStorage = function() {
    sessionStorage.setItem('nombre_completo', `${this.nombres} ${this.apellido_p} ${this.apellido_m}`);
    sessionStorage.setItem('edad', this.edad);
}