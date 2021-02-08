


interface Pasajero {
    nombre : string;
    hijos ?: string[]
}

const pasajero1 : Pasajero = {
    nombre : 'Fernando'
}

const pasajero2 : Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero : Pasajero) : void {
    const cuantosHijos = pasajero.hijos?.length || 0  ;
                                    //evalua si tienes hijos, sino, no quiero que me revientes, tratalo como undefined y devuelve 0
    console.log( cuantosHijos );
}

imprimeHijos( pasajero1 );  