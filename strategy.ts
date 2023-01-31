interface PaymentConstructor {
  new (): Payment;
}

interface Payment {
  calculate(type: string, price: number[]): void;
}

class CreditCard implements Payment {
  calculate(type: string, price: number[]): void {
    const total = price.reduce((acc, cur) => {
      return acc + Math.floor(cur * 0.8);
    }, 0);
    console.log('此次使用' + type + '結帳，折抵後金額為:' + total);
  }
}

class LinePay implements Payment {
  calculate(type: string, price: number[]): void {
    const sum = price.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    const discount = Math.floor(sum / 1000);
    const total = sum - discount * 100;
    console.log('此次使用' + type + '結帳，折抵後金額為:' + total);
  }
}

class Calculator {
  request(strategy: PaymentConstructor) {
    return new strategy();
  }
}

const calc = new Calculator();
calc.request(LinePay).calculate('linePay', [1000, 2000, 3000]);
calc.request(CreditCard).calculate('creditCard', [1000, 2000, 3000]);