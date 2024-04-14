function logMethod(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
): any {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]): any {
    // Menentukan bahwa decorator tidak mempengaruhi jenis pengembalian
    console.log(`calling ${key} with args ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`result ${result}`);
    return result; // Mengembalikan hasil seperti semula
  };
}

class Logger {
  @logMethod
  logMessage(message: string): string {
    console.log(`logged message: ${message}`);
    return `logged Message : ${message}`;
  }
}
const logger = new Logger();
logger.logMessage("Hello World");

// class Herbivore {
//   public animalName: string;
//   private animalAge: number;

//   constructor(animalName: string, animalAge: number) {
//     this.animalName = animalName;
//     this.animalAge = animalAge;
//   }
//   public sayHello() {
//     return `i'am ${this.animalAge}years old`;
//   }
// }
// var cow = new Herbivore("cow", 98);
// console.log(cow.animalName);
// //console.log(cow.animalAge); // error karena animal age private
// console.log(cow.sayHello());
