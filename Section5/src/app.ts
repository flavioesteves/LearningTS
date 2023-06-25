//Lesson 72
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Mac", age: 20, greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
};

user1.greet("Hi there - I am");


//Lesson 73
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

// Can be implemented more the 1 interface splitted by ,
class UserPerson implements Greetable {
  name: string;
  age = 20;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}


let user2: Greetable;


user2 = new UserPerson("Mac");
user2.greet("Hello there user2 - I am");
