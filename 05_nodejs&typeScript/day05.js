// 1. Interface
interface Person {
  name: String;
  age: number;
}
let elice: Person = { name: "rabbit", age: 13 };
// 코드 내 계약( 약속, 규칙 )을 정의하는 강력한 방법
// 변수, 함수 , 클래스의 타입체크를 위해 사용

// 2. Generic
// Union type
const printMessage = (message: number | string) => {
  console.log(message);
};
printMessage(1234);
printMessage("hello");

// Constraint / keyof
const printMessage = <T extends string | number | boolean>(message: T): void => {
  console.log(message)
}
printMessage<boolean>(true)

// example
interface Car {
  drive(): void
  park(): void
}

class Bus implements Car {
  drive(): void {}
  park(): void {
    console.log("parking bus")
  }
}
class Taxi implements Car {
  drive(): void {}
  park(): void {
    console.log("parking taxi")
  }
}
class CarFactory {
  static getInstance<T extends Car>(type: { new (): T}): T {
    return new type()
  }
}

const bus = CarFactory.getInstance(Bus);
const taxi =CarFactory.getInstance(Taxi);

bus.park();
taxi.park();