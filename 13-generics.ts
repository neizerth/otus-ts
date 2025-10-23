interface Product {
  name: string;
  sku: number;
}

interface Book {
  isbn: string;
  name: string;
}

interface Pagination<T> {
  offset: number;
  limit: number;
  data: T[]
  total: number
}


interface ProductPagination extends Pagination<Product> {}

// type ProductPagination = Pagination<Product>;
// type BookPagination = Pagination<Book>

