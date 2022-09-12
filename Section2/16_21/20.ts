/**
 * 20 - Working with Enums
 * enum {NEW, OLD} //this is hos is declared
 */

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

// Enum replace the logic of native JS as below
enum Role {ADMIN, READ_ONLY, AUTHOR};
enum ExampleStarterNotZero {ADMIN = 5, READ_ONLY, AUTHOR = 'AUTHOR'};// can be used with any value

const person20 = {
  name: 'Mac20',
  age: 66,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

if (person20.role === Role.ADMIN ){
    console.log('Is Admin');
}
