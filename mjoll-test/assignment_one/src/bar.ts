enum Ingredient {
    rum = 'Rum',
    mint = 'Mint',
    limeJuice = 'LimeJuice',
    sugar = 'Sugar',
    tonicWater = 'TonicWater',
    gin = 'Gin',
}

type DrinkType = 'heineken' |  'corona' | 'mojito' | 'margerita' | 'specialBacardi';

const ingredients = new Map<Ingredient, number>([
    [Ingredient.rum, 65],
    [Ingredient.mint, 10],
    [Ingredient.limeJuice, 10],
    [Ingredient.sugar, 10],
    [Ingredient.tonicWater, 20],
    [Ingredient.gin, 85],
])
//I included string as a type for drink because i assumed it was suppose to be possible to order drinks that 
//are not on the menu. Otherwise I would not have included/accpeted string as a type for drink. 
export function calculateCost(drink: DrinkType | string, isStudent: boolean, amount: number | string): number {
    if (+amount > 2 && (drink === 'margerita' || drink === 'mojito')) {
        throw new Error("Not allowed to order more than 2 cocktails");
    }

    let finalPrice: number | undefined;
    switch (drink) {
        case 'heineken':
            finalPrice = 74;
            break;
        case 'mojito':
            finalPrice = 103;
            break;
        case 'corona':
            finalPrice = 110;
            break;
        case 'margerita':
            finalPrice = 
                ingredients.get(Ingredient.gin) + 
                ingredients.get(Ingredient.tonicWater) + 
                ingredients.get(Ingredient.sugar);
            break;
        case 'specialBacardi':
            finalPrice = 
                ingredients.get(Ingredient.gin)/2 +
                ingredients.get(Ingredient.rum) +
                ingredients.get(Ingredient.mint) +
                ingredients.get(Ingredient.limeJuice);
            break;
        default:
            throw new Error("Drink does not exist");
    }
    if (isStudent && (drink === 'heineken' || drink === 'corona')) {
        finalPrice = finalPrice-finalPrice/10;
    }
    return Math.ceil(finalPrice*(+amount));
}
