console.log("It is running!")
// Import variables
import inventory from "./data/inventory.js";



// Import functions
//___Opdracht 1___
import {tvTypes} from "./functions/opdracht1.js";
import {soldOuts} from "./functions/opdracht1.js";
import {ambiLightTvs, lowToHigh} from "./functions/opdracht1.js";
import lowToHightPrice from "./functions/opdracht1.js";

//___Opdracht 2___


//___Opdracht 3___

//___Opdracht 4___
// import {workIt} from "./functions/opdracht4.js";
import {allTvInfo, createBrandTypeNameFunctie, tvInformation} from "./functions/opdracht4.js";
import {tvFormat} from "./functions/opdracht4.js";
import {euroPrice} from "./functions/opdracht4.js";
import {tvSizes} from "./functions/opdracht4.js";




//___Opdracht 1___

//____1a___
console.log("Types of Tv's:");
console.log(tvTypes);

//___1b___
console.log("Sold Out Tv's:");
console.log(soldOuts);

//___1c___
console.log("Tv's with ambilight:");
console.log(ambiLightTvs);

//___1d___
console.log("Tv prices low to high::");
console.log(lowToHigh);

//___OF___:
console.log("Tv prices low to high:");
console.log(lowToHightPrice());


//___Opdracht 2___

//___2a___

//___2b___

//___2c___


//___Opdracht 3___








//___Opdracht 4___

//___4a___
console.log("Tv: Brand, Type and Name:");
console.log(createBrandTypeNameFunctie[0]);

//OF:___
console.log(tvFormat(inventory[0]));

//___4b___
console.log("Tv price: ");
console.log(euroPrice);

//___4c___
console.log("Tv sizes:");
console.log(tvSizes);
// console.log(opdracht4c(inventory[0]));

//___4d___
console.log("Tv information:");
console.log(tvInformation(inventory[0]));

//___4e___
console.log("Complete Tv information:");
console.log(allTvInfo());
