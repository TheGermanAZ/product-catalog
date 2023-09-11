export interface Product {
  id: string;
  name: string;
  description: string;
  isFeatured: boolean;
  category: Category;
  size: Size;
  color: Color;
  price: number;
  image: Image[];
}

export interface Image {
  id: string;
  url: string;
  alt: string;
}

export interface Category {
  id: string;
  name: string;
  image: Image;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
