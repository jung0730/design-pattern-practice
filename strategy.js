var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    CreditCard.prototype.calculate = function (type, price) {
        var total = price.reduce(function (acc, cur) {
            return acc + Math.floor(cur * 0.8);
        }, 0);
        console.log('此次使用' + type + '結帳，折抵後金額為:' + total);
    };
    return CreditCard;
}());
var LinePay = /** @class */ (function () {
    function LinePay() {
    }
    LinePay.prototype.calculate = function (type, price) {
        var sum = price.reduce(function (acc, cur) {
            return acc + cur;
        }, 0);
        var discount = Math.floor(sum / 1000);
        var total = sum - discount * 100;
        console.log('此次使用' + type + '結帳，折抵後金額為:' + total);
    };
    return LinePay;
}());
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.request = function (strategy) {
        return new strategy();
    };
    return Calculator;
}());
var calc = new Calculator();
calc.request(LinePay).calculate('linePay', [1000, 2000, 3000]);
calc.request(CreditCard).calculate('creditCard', [1000, 2000, 3000]);
