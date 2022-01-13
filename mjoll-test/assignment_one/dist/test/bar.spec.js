import { calculateCost, DrinkType } from "../src/bar";
import { expect, assert } from 'chai';
import 'mocha';
describe('Ordering drinks gives the expected price', () => {
    it('Corctly calculates 74kr for a Heineken', () => {
        const price = calculateCost(DrinkType.heineken, false, 1);
        expect(price).to.equal(74);
    });
    it('Correctly calculates 103kr for a Mojito cocktail', () => {
        const price = calculateCost(DrinkType.mojito, false, 1);
        expect(price).to.equal(103);
    });
    it('Correctly calculates 115kr for a Margerita cocktail', () => {
        const price = calculateCost(DrinkType.margerita, false, 1);
        expect(price).to.equal(115);
    });
    it('Correctly calculates 127.5 kr for a special bacardi cocktail', () => {
        const price = calculateCost(DrinkType.specialBacardi, false, '1');
        expect(price).to.equal(128);
    });
});
describe('Student discounts are correctly handled', () => {
    it('Correctly gives 10% discount for beers', () => {
        const price = calculateCost(DrinkType.heineken, true, 1);
        expect(price).to.equal(67);
        const price2 = calculateCost(DrinkType.corona, true, 1);
        expect(price2).to.equal(99);
    });
    it('Also gives discount for multiple beers', () => {
        const price = calculateCost(DrinkType.heineken, true, 3);
        expect(price).to.equal(200);
    });
    it('Does not allow discounts for cocktails', () => {
        const price = calculateCost(DrinkType.mojito, true, 1);
        expect(price).to.equal(103);
        const price1 = calculateCost(DrinkType.margerita, true, 1);
        expect(price1).to.equal(115);
        const price2 = calculateCost(DrinkType.specialBacardi, true, 1);
        expect(price2).to.equal(128);
    });
});
describe('Error handling is correct', () => {
    it('Prevent people from ordering drinks that don\'t exist', () => {
        const COCKTAIL_THREE = 'chili_martini';
        assert.throws(() => calculateCost(COCKTAIL_THREE, false, 1), 'Drink does not exist');
    });
    it('Will NOT allow ordering more than two cocktails', () => {
        assert.throws(() => calculateCost(DrinkType.mojito, false, 3), 'Not allowed to order more than 2 cocktails');
    });
    it('Will allow ordering more than 2 beers', () => {
        assert.doesNotThrow(() => calculateCost(DrinkType.heineken, false, 3));
    });
});
//# sourceMappingURL=bar.spec.js.map