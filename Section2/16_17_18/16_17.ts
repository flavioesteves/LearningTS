/**
 * 16 - Object Types - Any JavaScript object, more specific types (type of object) are possible
 *
 */

//example 1
const person = {
  name: "Bino",
  age: 99,
};
//example 2 added object type {} = object types
// is better example 1 and typescritp handle automatically
const person2: {
  name: string;
  age: number;
} = {
  name: "Bino2",
  age: 98,
};

console.log(person);
console.log(person.name);

console.log(person2);

/**
 * 17 - Nested Objects & Types
 *
 */
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

// This would be the type of such an object:
const productObjTypes: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
