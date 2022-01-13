// export const BEER_ONE = "heineken";
// export const BEERTWO = 'corona';
// export const CocktailOne = `mojito`;
// export const cocktail2="margerita"
// export const special_cocktail="special_bacardi";
export var DrinkType;
(function (DrinkType) {
    DrinkType[DrinkType["heineken"] = 1] = "heineken";
    DrinkType[DrinkType["corona"] = 2] = "corona";
    DrinkType[DrinkType["mojito"] = 3] = "mojito";
    DrinkType[DrinkType["margerita"] = 4] = "margerita";
    DrinkType[DrinkType["specialBacardi"] = 5] = "specialBacardi";
})(DrinkType || (DrinkType = {}));
var Ingredient;
(function (Ingredient) {
    Ingredient["ingredient_1"] = "ingredient_1";
    Ingredient["ingredient_2"] = "ingredient_2";
    Ingredient["ingredient_3"] = "ingredient_3";
    Ingredient["ingredient_4"] = "ingredient_4";
    Ingredient["ingredient_5"] = "ingredient_5";
    Ingredient["ingredient_6"] = "ingredient_6";
})(Ingredient || (Ingredient = {}));
export function calculateCost(drink, isStudent, amount) {
    const drinkType = DrinkType[drink];
    console.log(drinkType);
    if (amount > 2 && (drink === DrinkType.margerita || drink === DrinkType.mojito)) {
        throw new Error("Not allowed to order more than 2 cocktails");
    }
    var finalPrice;
    switch (drink) {
        case DrinkType.heineken:
            finalPrice = 74;
            break;
        case DrinkType.mojito:
            finalPrice = 103;
            break;
        case DrinkType.corona:
            finalPrice = 110;
            break;
        case DrinkType.margerita:
            finalPrice = ingredient_6() + ingredient_5() + ingredient_4();
            break;
        case DrinkType.specialBacardi:
            finalPrice = ingredient_6() / 2 + ingredient_1() + ingredient_2() + ingredient_3();
            break;
        default:
            throw new Error("Drink does not exist");
    }
    if (isStudent && (drink === DrinkType.heineken || drink === DrinkType.corona)) {
        finalPrice = finalPrice - finalPrice / 10;
    }
    return Math.ceil(finalPrice * (+amount));
}
// Rum
function ingredient_1() {
    return 65;
}
// Mint
function ingredient_2() {
    return 10;
}
// Lime Juice
function ingredient_3() {
    return 10;
}
// Sugar
function ingredient_4() {
    return 10;
}
/**
 * Tonic water
 */
const ingredient_5 = () => 20;
// Gin
function ingredient_6() {
    return 85;
}
//# sourceMappingURL=bar.js.map