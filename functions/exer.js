console.clear();

// forEach() vs map()
// Q&A
let names = [ "Anne", "Pete", "Tony", "Margot" ];

// ARRAY.forEach( SOMEFUNCTION )
// Execute SOMEFUNCTION forEach element in the ARRAY
// SOMEFUNCTION("Anne")
// SOMEFUNCTION("Pete")
// SOMEFUNCTION("Tony")
// SOMEFUNCTION("Margot")
// const addIsCool = name =>{
//   console.log( name + " is cool");
// }
// names.forEach( name =>{
//   console.log( name + " is cool");
// });
// const resultOfForEach = names.forEach( addIsCool );
// console.log({ resultOfForEach: resultOfForEach });
// console.log({ resultOfForEach });
const value = 42;
const obj = { value } // { value: value }

function addWords( name ){
  console.log("addWords()", name);
  return name + " is cool"; //<-- If I remove this line?
  // return undefined
}
const arrayOfArrays = [
  [1,2,3],
  [4,5,6]
];

// Values in                -> Transformation -> Values out
// [ V1, V2, V3 ]                             -> [ f(V1), f(V2), f(V3) ] 
// Sales: [ 100, 50, 89 ]                     -> [ 100 - 20%, 50 - 20%, 89 - 20% ]
// Function ( VALUE )-> VALUE - 20%
const rate = 20;

function getReducedPriceFromRate( price ){
  let reducedPrice = price - ( price * rate/100 );
  // Transformation
  console.log(reducedPrice)
  return reducedPrice; // return STOPS the execution of the Function
}
function displayPrice( price ){
  const reducedUl = document.getElementById("reduced-prices")
  reducedUl.innerHTML += "<li>" + price + "</li>"
}
// const reduced = getReducedPriceFromRate( 100 ); // 100 -> 80
// console.log( reduced );
const prices = [ 100, 50, 89, 200 ];
// I want a new Array of reduced prices -20%
// const reducedPrices = prices.map(getReducedPriceFromRate);
// console.log(reducedPrices);
// When IN is [ 100, 50, 89, 200 ] | then OUT is [80, 40, 71.2, 160]
prices.forEach(getReducedPriceFromRate)


// let sentence = names.forEach( addWords );
// console.log( sentence );

// let sentence2 = names.map( addWords );
// []
// addWords("Anne") -> "Anne is cool"
// [] -> ["Anne is cool"]
// addWords("Pete") -> "Pete is cool"
// ["Anne is cool"] -> ["Anne is cool", "Pete is cool"]
// addWords("Tony") -> "Tony is cool"
// ["Anne is cool", "Pete is cool"] -> ["Anne is cool", "Pete is cool", "Tony is cool"]
// ... 
// return ["Anne is cool", "Pete is cool", "Tony is cool", "Margot is cool"]
// 

// --> What will sentence2 contain?
// console.log( sentence2 );

// filter()