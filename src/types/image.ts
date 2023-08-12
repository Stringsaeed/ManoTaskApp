export interface IImage {
  id: number;
  sort_order?: number | null;
  class_name: string;
  created_at: string;
  thumbnail?: string;
  large?: string;
  small?: string;
  extra_small?: string;
  original?: string;
  extra_props: IExtraProps;
}

export interface IExtraProps {
  identified: boolean;
}
