"use strict";
let user1;
user1 = {
    name: "Mac", age: 20, greet(phrase) {
        console.log(phrase + " " + this.name);
    }
};
user1.greet("Hi there - I am");
let add;
add = (n1, n2) => {
    return n1 + n2;
};
// Can be implemented more the 1 interface splitted by ,
class UserPerson {
    constructor(n) {
        this.age = 20;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log("Hello !");
        }
    }
}
let user2;
//user2.name = "some random"; // since is readonly you cannot attribute a new value
user2 = new UserPerson("Mac");
user2.greet("Hello there user2 - I am");
let user3;
user3 = new UserPerson();
user3.greet("Hello there user3 - I am");
//# sourceMappingURL=app.js.map