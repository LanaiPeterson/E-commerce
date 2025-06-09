import { fetchProduct } from "./services/apiServices";
import { calculateDiscount } from "./Utils/discountCalculator";
import { calculateTax } from "./Utils/taxCalculator";

async function main() {
    try {
        const products = await fetchProduct();

        products.forEach(product => {
            product.displayDetails();
            const tax = calculateTax(product.price, product.category);
            const discount = calculateDiscount(product.price, product.discountpercentage);

            console.log(`discount: $${discount}`);
            console.log(`Tax: $${tax}`);
        });
    } catch (error) {
        console.error(error);
    }
}

main().catch(error => {
    console.error("An error occurred in the main function:", error);
});


fetchProduct()
    .then(products => { 
        products.forEach(product => {
            product.displayDetails();
            const tax = calculateTax(product.price, product.category);
            const discount = calculateDiscount(product.price, product.discountpercentage);

            console.log(`discount: $${discount}`);
            console.log(`Tax: $${tax}`);
        });
    })
    .catch(error => {
        console.error("An error occurred while fetching products:", error);
    }   );

