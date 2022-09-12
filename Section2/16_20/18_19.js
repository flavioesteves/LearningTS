/**
 * 18 - Arrays Types
 * "any[]" type is a special type in TS that allow to use mix types in an array
 *
 *
 * 19 - Working with Tuples
 * NEW Type: Tuple -> Added to TypeScript: Fixed-length array and fixed type
 */
//L18
var person18 = {
    name: 'Mac18',
    age: 66,
    hobbies: ['Sports', 'Cooking']
};
console.log(person18.name);
//L19
// since we want to setted a tuple we need to override the inheritance of TS
var person19 = {
    name: 'Mac19',
    age: 66,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
//person18.role.push('admin'); // TypeScript can't catch this as an error
//person18.role[1] = 10;
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person19.name);
for (var _i = 0, _a = person18.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(person18.name + ':' + hobby.toUpperCase());
    //console.log(hobby.localeCompare()); // !!! ERROR !!!
}
