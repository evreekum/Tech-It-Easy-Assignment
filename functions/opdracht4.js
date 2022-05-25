import inventory from "../data/inventory.js";
// export const workIt = console.log("doe ik het ook?");

//__________Opdracht 4___________

//__________4a____________


//ANONIEME FUNCTIE
export const createBrandTypeNameFunctie = inventory.map((tvBrandTypeName) => {
    return `${tvBrandTypeName.brand} ${tvBrandTypeName.type} - ${tvBrandTypeName.name}`;
});


//FUNCTIE:
export function tvFormat(selectedTv) {
    return `${selectedTv.brand} ${selectedTv.type} - ${selectedTv.name}`;
}



//__________4b______________s

const currentTvPrice = inventory[0].price;

function pricesTv(tvPrice) {
    return `€${tvPrice},-`;
}

export const euroPrice = pricesTv(currentTvPrice);



//__________4c__________

//inch to cm: 1 inch = 2,54 cm dus: inches / 2,54 = cm
//map methode?
//return: grootte inch (grootte cm) | inch (cm)
//join() (array methode)?
//for loop


const opdracht4c = (tv) => {
    let output = " ";

    tv.availableSizes.map((size) => {
        let sizesInCm = Math.round(size / 2.54);
        output += `${size} inch (${sizesInCm} cm) | `
    })
    return output

}
export const tvSizes = opdracht4c(inventory[0]);


//__________4d__________

export function tvInformation(selectedTv) {
    return `
    ${selectedTv.brand} ${selectedTv.type} - ${selectedTv.name}
    ${euroPrice}
    ${tvSizes}`;
}



//__________4e__________

export function allTvInfo () {
    return `${inventory[0]}`
}

