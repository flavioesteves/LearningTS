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



//type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

//Lesson 76
interface Named {
  readonly name?: string;
  outputName?: string;
}


//Lesson 73
interface Greetable extends Named {
  greet(phrase: string): void;
}

// Can be implemented more the 1 interface splitted by ,
class UserPerson implements Greetable {
  name?: string;
  age = 20;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log("Hello !")
    }
  }
}


let user2: Greetable;
//user2.name = "some random"; // since is readonly you cannot attribute a new value

user2 = new UserPerson("Mac");
user2.greet("Hello there user2 - I am");

let user3: Greetable;
user3 = new UserPerson();
user3.greet("Hello there user3 - I am")
