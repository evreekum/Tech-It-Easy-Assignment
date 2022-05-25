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



//__________4b______________

/*export const createTvPrice = inventory.filter((tvPrice) => {
    return `€${tvPrice.price === tvPrice},-`;
});
const priceInEuro = createTvPrice (179);
console.log(priceInEuro);*/

const currentTvPrice = inventory[0].price;

export function pricesTv(tvPrice) {
    return `€${tvPrice}-,`;
}

export const euroPrice = pricesTv(currentTvPrice);



//__________4c__________

//inch to cm: 1 inch = 2,54 cm dus: inches / 2,54 = cm
//map methode?
//return: grootte inch (grootte cm) | inch (cm)
//join() (array methode)?
//for loop


export const opdracht4c = ( tv ) => {
    let output = " ";

    tv.availableSizes.map((size) => {
        let sizesInCm = Math.round(size / 2.54);
        output += `${size} inch (${sizesInCm} cm) | `
    })
    return output

}




/*
for (let i = 0; i < availableSizes.length; i++) {
    return sizeInches.availableSizes / 2.54;
}


const createInchesToCm = () => {
    return inventory.filter((sizeInches) => {


    })
}
*/

/*
const createInchesToCm = inventory.filter((sizeInches) => {
    for (let i = 0; i < availableSizes.length; i++) {
        return sizeInches.availableSizes / 2.54;
    }

})
console.log(createInchesToCm)
*/

/*
export function inchesToCm (tvInch, tvCm) {
    tvCm = 2.54;
    return tvInch.availableSizes / tvCm;
}

console.log(inchesToCm())
*/
