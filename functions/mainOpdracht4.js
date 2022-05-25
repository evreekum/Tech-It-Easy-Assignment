import inventory from "../data/inventory.js";
// export const workIt = console.log("doe ik het ook?");

//__________Opdracht 4___________

//__________4a____________


//ANONIEME FUNCTIE
export const createBrandTypeNameFunctie = inventory.map((tvBrandTypeName) => {
    return `${tvBrandTypeName.brand} ${tvBrandTypeName.type} - ${tvBrandTypeName.name}`;
});
console.log("Tv: Brand, Type and Name:");
console.log(createBrandTypeNameFunctie[1]);

//FUNCTIE:
export function tvFormat (selectedTv) {
    return `${selectedTv.brand} ${selectedTv.type} - ${selectedTv.name}`;
};

console.log(tvFormat(inventory[3]))


//__________4b______________

export const createTvPrice = inventory.filter((tvPrice) => {
    return `€${tvPrice === tvPrice.price},-`;
});
console.log(createTvPrice(179));

/*
export function pricesTv (tvPrice) {
    return `€${inventory.filter(tvPrice.price)},-`;
}
const euroPrice = pricesTv(379);
console.log(euroPrice);*/


//__________4c__________