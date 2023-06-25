//Lesson 72
var user1;
user1 = {
    name: "Mac", age: 20,
    greet: function (phrase) {
        console.log(phrase + " " + this.name);
    }
};
user1.greet("Hi there - I am");
