export abstract class Animal {
  constructor(protected name: string){}
//establecer el nombre , hay tres formas...
//publico, permite herencia y cambio
//privado, lo proteje pero no da herencia
//protected, lo proteje y permite herencia
  move(){
    console.log(`${this.name} is moving`);

  }

  greeting(){
    console.log(`Hello, I'm a ${this.name}`);

  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ){
    super(name);
  }

  ladrar(times: number){
    for (let index = 0; index < times; index++) {
      console.log('woof');


    }
  }
}

const Chato = new Dog('chato', 'jose');
Chato.greeting();
Chato.ladrar(3);
//Chato.name = 'no se puede cambiar el nombre';
