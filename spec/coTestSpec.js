const expect = require('chai').expect;
// const { Product, CarInsurance } = require('../src/coTest');
const { Product, CarInsurance } = require('../src/coTestRefactored');

describe("Co Test", function () {
    it("should foo", function () {
        const coTest = new CarInsurance([new Product('Mega Coverage', -1, 80)]);
        const products = coTest.updatePrice();
        expect(products[0].name).equal("Mega Coverage");
        expect(products[0].price).equal(80);
        expect(products[0].sellIn).equal(-1);
    });
});

describe('Test Full Coverage', function () {
    it('Full Coverage - Price should increase 1 when sellIn > 0 and price < 50', function () {
        let coTest = new CarInsurance([new Product('Full Coverage', 11, 50)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(10);
        expect(result[0].price).equal(50);
    });

    it('Full Coverage - Price should increase 1 when sellIn > 0 and price < 50', function () {
        let coTest = new CarInsurance([new Product('Full Coverage', 11, 10)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(10);
        expect(result[0].price).equal(11);
    });

    it('Full Coverage - Price should increase 2 when sellIn < 0 and price < 50', function () {
        let coTest = new CarInsurance([new Product('Full Coverage', 0, 11)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(-1);
        expect(result[0].price).equal(13);
    });

    it('Full Coverage - Price should increase 1 when sellIn < 0 and price < 50', function () {
        let coTest = new CarInsurance([new Product('Full Coverage', -1, 11)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(-2);
        expect(result[0].price).equal(13);
    });

    it('Full Coverage - Price should increase 1 when sellIn < 0 and price < 50', function () {
        let coTest = new CarInsurance([new Product('Full Coverage', -1, 49)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(-2);
        expect(result[0].price).equal(50);
    });
});

describe('Test Mega Coverage', function () {
    it('Mega Coverage - Price should not be modified', function () {
        let coTest = new CarInsurance([
            new Product('Mega Coverage', 0, 80)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(0);
        expect(result[0].price).equal(80);
    });

    it('Mega Coverage - Price should not be modified', function () {
        let coTest = new CarInsurance([
            new Product('Mega Coverage', -1, 50)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(-1);
        expect(result[0].price).equal(50);
    });
});

describe('Test Special Full Coverage', function () {
    it('Special Full Coverage - Price should increase 1 when price is > 10 and < 50', function () {
        let coTest = new CarInsurance([new Product('Special Full Coverage', 11, 50)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(10);
        expect(result[0].price).equal(50);
    });

    it('Special Full Coverage - Price should increase 1 when price is > 10 and < 50', function () {
        let coTest = new CarInsurance([new Product('Special Full Coverage', 11, 10)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(10);
        expect(result[0].price).equal(11);
    });

    it('Special Full Coverage - Price should increase when 2 price is < 10 and < 50', function () {
        let coTest = new CarInsurance([new Product('Special Full Coverage', 9, 10)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(8);
        expect(result[0].price).equal(12);
    });

    it('Special Full Coverage - Price should increase when 2 price is < 10 and < 50', function () {
        let coTest = new CarInsurance([new Product('Special Full Coverage', 9, 49)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(8);
        expect(result[0].price).equal(50);
    });

    it('Special Full Coverage - Price should increase when 3 price is < 5 and < 50', function () {
        let coTest = new CarInsurance([new Product('Special Full Coverage', 9, 10)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(8);
        expect(result[0].price).equal(12);
    });

    it('Special Full Coverage - Price should increase when 3 price is < 5 and < 50', function () {
        let coTest = new CarInsurance([new Product('Special Full Coverage', 5, 10)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(4);
        expect(result[0].price).equal(13);
    });

    it('Special Full Coverage - Price should increase when 3 price is < 5 and < 50', function () {
        let coTest = new CarInsurance([new Product('Special Full Coverage', 5, 49)]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(4);
        expect(result[0].price).equal(50);
    });
});

describe('Test Super Sale', function () {
    it('Super Sale - Price should degrade 2 when price > 0', function () {
        let coTest = new CarInsurance([
            new Product('Super Sale', 10, 20)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(9);
        expect(result[0].price).equal(18);
    });

    it('Super Sale - Price should degrade 2 when price > 0', function () {
        let coTest = new CarInsurance([
            new Product('Super Sale', 10, 0)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(9);
        expect(result[0].price).equal(0);
    });
});

describe('Test Other products ', function () {
    it('Low Coverage - Price should degrade 1 when sellIn > 0 and price > 0', function () {
        let coTest = new CarInsurance([
            new Product('Low Coverage', 10, 20)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(9);
        expect(result[0].price).equal(19);
    });

    it('Low Coverage - Price should degrade 1 when sellIn > 0 and price > 0', function () {
        let coTest = new CarInsurance([
            new Product('Low Coverage', 10, 0)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(9);
        expect(result[0].price).equal(0);
    });

    it('Low Coverage - Price should degrade 2 when sellIn < 0 and price > 0', function () {
        let coTest = new CarInsurance([
            new Product('Low Coverage', 0, 20)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(-1);
        expect(result[0].price).equal(18);
    });

    it('Low Coverage - Price should degrade 2 when sellIn < 0 and price > 0', function () {
        let coTest = new CarInsurance([
            new Product('Low Coverage', 0, 0)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(-1);
        expect(result[0].price).equal(0);
    });

    it('Medium Coverage - Price should degrade 1 when sellIn > 0 and price > 0', function () {
        let coTest = new CarInsurance([
            new Product('Medium Coverage', 10, 20)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(9);
        expect(result[0].price).equal(19);
    });

    it('Medium Coverage - Price should degrade 1 when sellIn > 0 and price > 0', function () {
        let coTest = new CarInsurance([
            new Product('Medium Coverage', 10, 0)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(9);
        expect(result[0].price).equal(0);
    });

    it('Medium Coverage - Price should degrade 2 when sellIn < 0 and price > 0', function () {
        let coTest = new CarInsurance([
            new Product('Medium Coverage', 0, 20)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(-1);
        expect(result[0].price).equal(18);
    });

    it('Medium Coverage - Price should degrade 2 when sellIn < 0 and price > 0', function () {
        let coTest = new CarInsurance([
            new Product('Medium Coverage', 0, 0)
        ]);
        const result = coTest.updatePrice();
        expect(result[0].sellIn).equal(-1);
        expect(result[0].price).equal(0);
    });
});