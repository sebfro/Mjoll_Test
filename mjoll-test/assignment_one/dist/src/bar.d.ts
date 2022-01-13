export declare enum DrinkType {
    heineken = 1,
    corona = 2,
    mojito = 3,
    margerita = 4,
    specialBacardi = 5
}
export declare function calculateCost(drink: DrinkType | string, isStudent: boolean, amount: number | string): number;
