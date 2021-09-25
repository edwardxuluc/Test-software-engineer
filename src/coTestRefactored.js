class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
}

class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }

    updatePrice() {
        for (var i = 0; i < this.products.length; i++) {

            let product = this.products[i];

            switch (product.name) {
                case 'Mega Coverage':
                    break;

                case 'Full Coverage':

                    product.sellIn--;

                    if (product.price < 50) {
                        product.price++;
                    }

                    if (product.sellIn < 0) {
                        if (product.price < 50) {
                            product.price++;
                        }
                    }
                    break;

                case 'Special Full Coverage':

                    if (product.price < 50) {
                        product.price++;
                    }

                    if (product.price < 50) {
                        if (product.sellIn <= 10) {
                            product.price++;
                        }
                    }

                    if (product.price < 50) {
                        if (product.sellIn <= 5) {
                            product.price++;
                        }
                    }

                    if (product.sellIn <= 0) {
                        product.price = 0;
                    }

                    product.sellIn--;
                    break;

                case 'Super Sale':

                    if (product.price > 0) {
                        product.price--;
                    }

                    if (product.price > 0) {
                        product.price--;
                    }

                    product.sellIn--;
                    break;

                default:

                    product.sellIn--;

                    if (product.price > 0) {
                        product.price--;
                    }

                    if (product.sellIn < 0) {
                        if (product.price > 0) {
                            product.price--;
                        }
                    }
                    break;
            }
        }

        return this.products;
    }
}

module.exports = {
    Product,
    CarInsurance
}
