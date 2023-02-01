abstract class AbstractClass {
  // must be overridden in the implementing class
  abstract pay(): void;
  // the method that the subclass will call
  templateMethod() {
    this.pay()
  }
}

const calculateSum = (price: number[]): number => {
  return price.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

class CreditCard extends AbstractClass {
  type: string;
  price: number[];
  constructor(type: string, price: number[]) {
    super();
    this.type = type;
    this.price = price;
  }
  // override
  pay() {
    const total = calculateSum(this.price);
    const discountedTotal = Math.floor(total * 0.8);
    console.log('此次使用' + this.type + '結帳，折抵後金額為:' + discountedTotal);
  }
}

class LinePay extends AbstractClass {
  type: string;
  price: number[];
  constructor(type: string, price: number[]) {
    super();
    this.type = type;
    this.price = price;
  }
  // override
  pay() {
    const total = calculateSum(this.price);
    const discount = Math.floor(total / 1000);
    const discountedTotal = total - discount * 100;
    console.log('此次使用' + this.type + '結帳，折抵後金額為:' + discountedTotal);
  }
}

const creditCard = new CreditCard('creditCard', [1000, 2000, 3000])
creditCard.templateMethod();
const linePay = new LinePay('linePay', [1000, 2000, 3000]);
linePay.templateMethod();
