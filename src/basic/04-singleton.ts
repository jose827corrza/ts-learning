class MyService {

  static instance: MyService | null = null;
  private constructor(private nombre: string){}

  getName(): string{
    return this.nombre;
  }

  static crear(nombre: string){
    if(MyService.instance === null){
      MyService.instance = new MyService(nombre);
    }
    return MyService.instance;
  }
}
//el constructor privado impide que yo pueda crear objetos desde fuera de la clase!!!
// const service1 = new MyService('servicio 1');
// const service2 = new MyService('servicio 2');
// const service3 = new MyService('servicio 3');
//console.log(service1 === service2);

//Ya con el singleton aplicado

const service2 = MyService.crear('serv2');
const service1 = MyService.crear('serv1');
console.log(service1 === service2);

