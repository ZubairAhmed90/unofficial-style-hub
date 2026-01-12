export interface Product {
  id: string;
  name: string;
  inspiredBy: string;
  price: number;
  discountedPrice?: number;
  images: string[];
  sizes: string[];
  colors: ProductColor[];
  category: string;
  subcategory: string;
  description: string;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  isSale?: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: ProductColor;
}

export interface Category {
  name: string;
  slug: string;
  subcategories: { name: string; slug: string }[];
  image: string;
}
