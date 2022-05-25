import inventory from "../data/inventory.js";


//__________Opdracht 1__________

//__________1a__________

export const tvTypes = inventory.map((tvType) => {
    return tvType.name;
});
console.log("Types of Tv's:")
console.log(tvTypes);



//__________1b___________

export const soldOuts = inventory.filter((soldOut) => {
    return soldOut.originalStock === soldOut.sold;
});
console.log("Sold Out Tv's:")
console.log(soldOuts);


//__________1c___________

export const ambiLightTvs = inventory.filter((ambiLight) => {
    return ambiLight.options.ambiLight === true;
});
console.log("Tv's with ambilight:")
console.log(ambiLightTvs);


//__________1d___________

export const lowToHigh = inventory.sort((a, b) => {
    return a.price - b.price;
});
console.log("Tv prices low to high:")
console.log(lowToHigh);


const lowToHightPrice = () => {
    return inventory.sort ((currentValue, previousValue) => {
        return currentValue.price - previousValue.price;
    });

};
console.log("Tv prices low to high:");
console.log(lowToHightPrice());

export default lowToHightPrice;