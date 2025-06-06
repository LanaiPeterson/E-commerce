import { Product } from '../models/Product';

export async function fetchProduct(): Promise<Product[]> {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data);

    return data.products.map((product: any) => 
      new Product(
        product.id,
        product.name,
        product.description,
        product.price,
        product.category,
        product.discountPercentage // Added sixth argument as expected by Product constructor
      )
    );
  } catch (error) {
    console.log(error);
    return [];
  }
}