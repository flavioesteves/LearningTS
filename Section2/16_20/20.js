/**
 * 20 - Working with Enums
 * enum {NEW, OLD} //this is hos is declared
 */
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
// Enum replace the logic of native JS as above
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var ExampleStarterNotZero;
(function (ExampleStarterNotZero) {
    ExampleStarterNotZero[ExampleStarterNotZero["ADMIN"] = 5] = "ADMIN";
    ExampleStarterNotZero[ExampleStarterNotZero["READ_ONLY"] = 6] = "READ_ONLY";
    ExampleStarterNotZero["AUTHOR"] = "AUTHOR";
})(ExampleStarterNotZero || (ExampleStarterNotZero = {}));
; // can be used with any value
var person20 = {
    name: "Mac20",
    age: 66,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
if (person20.role === Role.ADMIN) {
    console.log('Is Admin');
}
