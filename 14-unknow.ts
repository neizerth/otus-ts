type Single<T extends unknown[]> = T[number];

type Products = Array<{
  id: string;
  name: string;
  sku: string;
  image: string;
}>

type SingleProduct = Single<Products>