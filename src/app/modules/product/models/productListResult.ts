import { Product } from './product';

export interface ProductListResult {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
