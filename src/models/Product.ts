export class Product {
    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public discountpercentage: number;
    public category: string;
  
    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        discountpercentage: number,
        category: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.discountpercentage = discountpercentage;
        this.category = category;
    }

  displayDetails(): void {
    console.log(`Product: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Price: ${this.price}`);
  }

  getPriceWithDiscount(): number {
    return this.price - (this.price * this.discountpercentage) / 100;
  }
}

