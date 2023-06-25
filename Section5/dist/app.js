"use strict";
let user1;
user1 = {
    name: "Mac", age: 20, greet(phrase) {
        console.log(phrase + " " + this.name);
    }
};
user1.greet("Hi there - I am");
// Can be implemented more the 1 interface splitted by ,
class UserPerson {
    constructor(n) {
        this.age = 20;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user2;
user2 = new UserPerson("Mac");
user2.greet("Hello there - I am");
//# sourceMappingURL=app.js.map