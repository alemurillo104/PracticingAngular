

let habilidades : string[]  = ["Alejandra", "Paty", "Patylu"];
habilidades.push("h") ;


interface Personaje{
    nombre      : string, 
    hp          : number,
    habilidades : string[],
    puebloNatal?: string
}

const personaje : Personaje = {
    nombre      : "Strider",
    hp          : 100,
    habilidades : ["holi", "como", "estas"],
}

personaje.puebloNatal = 'Pueblo Natal';

console.table(personaje);

