/**
 * 18 - Arrays Types
 * "any[]" type is a special type in TS that allow to use mix types in an array
 * 
 * 
 * 19 - Working with Tuples
 * NEW Type: Tuple -> Added to TypeScript: Fixed-length array and fixed type
 */


//L18
const person18= {
    name: 'Mac18',
    age: 66,
    hobbies: ['Sports', 'Cooking']
};
console.log(person18.name);

//L19
// since we want to setted a tuple we need to override the inheritance of TS
const person19: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //Tuple
} = {
    name: 'Mac19',
    age: 66,
    hobbies: ['Sports', 'Cooking'],
    role: [2,'author']
};


//person18.role.push('admin'); // TypeScript can't catch this as an error
//person18.role[1] = 10;


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person19.name);

for(const hobby of person18.hobbies) {
    console.log(person18.name +':'+ hobby.toUpperCase());
    //console.log(hobby.localeCompare()); // !!! ERROR !!!
}