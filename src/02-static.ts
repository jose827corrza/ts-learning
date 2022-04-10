export class MyMath {
  sumar(a: number, b: number): number{
    return a + b;
  }

  static numberPI(): number{
    return 3.1416;
  }
}

const matematicas = new MyMath();
matematicas.sumar(1,2);
let rta = MyMath.numberPI();
console.log(rta);
