interface Product { 
    name: string; 
    price: string; 
    delivery: string 
};

function getTotal(product: Product): number {
  return Number(product.price) + Number(product.delivery);
}