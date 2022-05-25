console.log("It is running!")
// Import variables
import inventory from "./data/inventory.js";
import {euroPrice} from "./functions/mainOpdracht4.js";


// Import functions
//___Opdracht 1___
import {tvTypes} from "./functions/createTvArrays.js";
import {soldOuts} from "./functions/createTvArrays.js";
import {ambiLightTvs, lowToHigh} from "./functions/createTvArrays.js";
import lowToHightPrice from "./functions/createTvArrays.js";

//___Opdracht 2___


//___Opdracht 3___

//___Opdracht 4___
// import {workIt} from "./functions/mainOpdracht4.js";
import {createBrandTypeNameFunctie} from "./functions/mainOpdracht4.js";
import {pricesTv} from "./functions/mainOpdracht4.js";
import {opdracht4c} from "./functions/mainOpdracht4.js";

import {tvFormat} from "./functions/mainOpdracht4.js";

// import {createTvPrice} from "./functions/mainOpdracht4.js";
// import {inchesToCm} from "./functions/mainOpdracht4.js";






//___Inventory___
/*console.log(inventory);*/


//___Opdracht 1___

//____1a___
console.log("Types of Tv's:")
console.log(tvTypes);

//___1b___
console.log("Sold Out Tv's:")
console.log(soldOuts);

//___1c___
console.log("Tv's with ambilight:")
console.log(ambiLightTvs);

//___1d___
console.log("Tv prices low to high::")
console.log(lowToHigh);

//___OF___:
console.log("Tv prices low to high:");
console.log(lowToHightPrice());


//___Opdracht 4___

//___4a___
console.log("Tv: Brand, Type and Name:");
console.log(createBrandTypeNameFunctie[1]);

//OF:___
console.log(tvFormat(inventory[3]));

//___4b___
console.log("Tv price: ")
console.log(euroPrice);

//___4c___
console.log("Tv sizes:")
console.log(opdracht4c(inventory[0]))

//___4d___

