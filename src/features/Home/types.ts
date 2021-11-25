import { AxiosError } from 'axios';

export interface Product {
  name: string;
}

export interface HomeState {
  products: Product[];
  loading: boolean;
  error: AxiosError | null;
}
