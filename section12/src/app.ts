import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product.model";


const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Bool", price: 13.99 }
];
//const p1 = new Product("A Book", 12.99);
/*  
const loadedProducts = products.map(prod => {
  return new Product(prod.title, prod.price);
});
*/


const newProd = new Product("", -5.99);
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log("Validation errors");
    console.log(errors);


  } else {
    console.log(newProd.getInformation());

  }
});




const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {

  console.log(prod.getInformation());
}
