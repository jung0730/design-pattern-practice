interface Payment {
  pay(): void;
}

const calculateSum = (price: number[]): number => {
  return price.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

class CreditCard implements Payment {
  type: string;
  price: number[];
  constructor(type: string, price: number[]) {
    this.type = type;
    this.price = price;
  }
  pay() {
    const total = calculateSum(this.price);
    const discountedTotal = Math.floor(total * 0.8);
    console.log('此次使用' + this.type + '結帳，折抵後金額為:' + discountedTotal);
  }
}

class LinePay implements Payment {
  type: string;
  price: number[];
  constructor(type: string, price: number[]) {
    this.type = type;
    this.price = price;
  }
  pay() {
    const total = calculateSum(this.price);
    const discount = Math.floor(total / 1000);
    const discountedTotal = total - discount * 100;
    console.log('此次使用' + this.type + '結帳，折抵後金額為:' + discountedTotal);
  }
}

const map = {
  linePay: LinePay,
  creditCard: CreditCard,
};

class Factory {
  static calculate(type: string, price: number[]): Payment {
    return new map[type](type, price);
  }
}

Factory.calculate('creditCard', [1000, 2000, 3000]).pay();
Factory.calculate('linePay', [1000, 2000, 3000]).pay();
