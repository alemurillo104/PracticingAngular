
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }
  
@classDecorator
class MiSuperClase{

    public miPropiedad : string = 'ASB';
    
    imprimir(){
        console.log('Hola  Mundo');
    }
}

console.log(MiSuperClase);

const op = new MiSuperClase();
console.log(op.miPropiedad);
