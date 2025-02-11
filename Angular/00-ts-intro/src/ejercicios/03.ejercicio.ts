

function sumar(a : number, b : number){
    return (a + b);
}

const sumarFlecha = (a : number, b : number) : number => {
    return a + b;
}

function multiplicar(numero :  number, otroNumero ?: number, base : number = 2) : number{
    return numero * base;
}


const resultado  = sumar( 10 , 50);
const resultado2 = sumarFlecha( 7 , 5);
const resultado3 = multiplicar(5, 0, 10);

console.log(resultado3);



interface PersonajeLOR {
    nombre: string;
    pv    : number; 
    mostrarHp : () => void
}

function curar( personaje : PersonajeLOR, curarX ): void {
    personaje.pv +=  curarX;
    console.log( personaje );
}

const nuevoPersonaje : PersonajeLOR = {
    nombre : 'Strider',
    pv : 50,
    mostrarHp(){
        console.log("Puntos de vida: ", this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();
