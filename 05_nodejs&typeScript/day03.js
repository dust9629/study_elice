class Animal {
  public name: string
  constructor(theName: string){
    this.name = theName;
  }
}
new Animal("Cat").name;

// 접근 제어자 (public) -> ts에서 멤버는 기본적으로 public으로 선언된다
