import inventory from "../data/inventory.js";


//__________Opdracht 1__________

//__________1a__________

export const tvTypes = inventory.map((tvType) => {
    return tvType.name;
});





//__________1b___________

export const soldOuts = inventory.filter((soldOut) => {
    return soldOut.originalStock === soldOut.sold;
});




//__________1c___________

export const ambiLightTvs = inventory.filter((ambiLight) => {
    return ambiLight.options.ambiLight === true;
});



//__________1d___________

const newInventory = inventory.slice();

export const lowToHigh = newInventory.sort((a, b) => {
    return a.price - b.price;
});




//OF:
export const lowToHightPrice = () => {
    return newInventory.sort ((currentValue, previousValue) => {
        return currentValue.price - previousValue.price;
    });
};

export default lowToHightPrice;
