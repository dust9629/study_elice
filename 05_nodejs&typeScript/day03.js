// 접근 제어자 (public) -> ts에서 멤버는 기본적으로 public으로 선언된다
// class Animal {
//   public name: string
//   constructor(theName: string){
//     this.name = theName;
//   }
// }
// new Animal("Cat").name;


// 추상화
abstract class Animal {
  protected name: String
  constructor(name: string) {
    this.name = name
  }

  abstract makeSound(): void
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  makeSound(): void {
    console.log(this.naee + "멍멍")
  }
}

const dog = new Dog("진돗개")
dog.makeSound()