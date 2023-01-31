var calculateSum = function (price) {
    return price.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);
};
var CreditCard = /** @class */ (function () {
    function CreditCard(type, price) {
        this.type = type;
        this.price = price;
    }
    CreditCard.prototype.pay = function () {
        var total = calculateSum(this.price);
        var discountedTotal = Math.floor(total * 0.8);
        console.log('此次使用' + this.type + '結帳，折抵後金額為:' + discountedTotal);
    };
    return CreditCard;
}());
var LinePay = /** @class */ (function () {
    function LinePay(type, price) {
        this.type = type;
        this.price = price;
    }
    LinePay.prototype.pay = function () {
        var total = calculateSum(this.price);
        var discount = Math.floor(total / 1000);
        var discountedTotal = total - discount * 100;
        console.log('此次使用' + this.type + '結帳，折抵後金額為:' + discountedTotal);
    };
    return LinePay;
}());
var map = {
    linePay: LinePay,
    creditCard: CreditCard
};
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.calculate = function (type, price) {
        return new map[type](type, price);
    };
    return Factory;
}());
Factory.calculate('creditCard', [1000, 2000, 3000]).pay();
Factory.calculate('linePay', [1000, 2000, 3000]).pay();
