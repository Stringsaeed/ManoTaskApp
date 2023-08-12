import {IImage} from './image';

export interface ICategory {
  id: number;
  parent_category_id: number;
  title: string;
  category_type: string;
  class_name: string;
  created_at: string;
  images: IImage[];
}
