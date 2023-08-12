import {ICategory} from './category';
import {IImage} from './image';

export interface IProduct {
  id: number;
  title: string;
  brand?: string;
  sap_id: string;
  sku: string;
  class_name: string;
  created_at: string;
  favorite: boolean;
  categories: ICategory[];
  original_price: string;
  discounted_price?: string;
  price: string;
  quantity: number;
  max_allowed_quantity: number;
  shelf_zone?: string;
  shelf_section?: string;
  store_id: number;
  properties: [];
  images: IImage[];
}
