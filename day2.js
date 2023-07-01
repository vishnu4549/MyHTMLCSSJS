var array =[
mobile = {
    name:"OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)",
    price:19999,
    final_price:18999,
    description:"Get it by Tomorrow, 23 February FREE Delivery by Amazon"
},
shoes = {
    name:"Campus Men's Milan Running Shoes",
    price:1699,
    final_price:765,
    description:"Friday, 24 February."
},
shirt = {
    name:"Ben Martin",
    price:2499,
    final_price:477,
    description:"Sunday, 26 February."
},
pant = {
    name:"Amazon Brand - Symbol Men's Slim Fit Formal Trousers",
    price:2499,
    final_price:799,
    description:"Sunday, 26 February."
}];
console.log(mobile);
console.log(shoes);
console.log(shirt);
console.log(pant);
console.log(mobile.final_price);
console.log(array[1]);

let container = document.getElementById("container");

array.forEach(function(obj, index) {
  let header = document.createElement("h2");
  header.innerHTML = obj.name;
  container.appendChild(header);

  let price = document.createElement("p");
  price.innerHTML = "Price: " + obj.price;
  container.appendChild(price);

  let finalPrice = document.createElement("p");
  finalPrice.innerHTML = "Final price: " + obj.final_price;
  container.appendChild(finalPrice);

  let description = document.createElement("p");
  description.innerHTML = "Delivery date: " + obj.description;
  container.appendChild(description);
});

