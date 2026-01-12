import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  {
    name: "Men",
    slug: "men",
    subcategories: [
      { name: "Jeans", slug: "jeans" },
      { name: "T-Shirts", slug: "tshirts" },
      { name: "Shirts", slug: "shirts" },
      { name: "Jackets", slug: "jackets" },
    ],
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
  },
  {
    name: "Women",
    slug: "women",
    subcategories: [
      { name: "Tops", slug: "tops" },
      { name: "Jeans", slug: "jeans" },
      { name: "Dresses", slug: "dresses" },
      { name: "Jackets", slug: "jackets" },
    ],
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
  },
  {
    name: "Accessories",
    slug: "accessories",
    subcategories: [
      { name: "Belts", slug: "belts" },
      { name: "Caps", slug: "caps" },
      { name: "Wallets", slug: "wallets" },
    ],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
];

export const products: Product[] = [
  // Men's Jeans
  {
    id: "m-jeans-001",
    name: "Classic Slim Fit Jeans",
    inspiredBy: "Levi's 511",
    price: 89.99,
    discountedPrice: 69.99,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Indigo", hex: "#3d4f7c" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Light Wash", hex: "#8da4bf" },
    ],
    category: "men",
    subcategory: "jeans",
    description: "Premium slim-fit jeans crafted from stretch denim for maximum comfort and style. Features classic 5-pocket styling and a modern silhouette.",
    inStock: true,
    isBestSeller: true,
    isSale: true,
  },
  {
    id: "m-jeans-002",
    name: "Relaxed Straight Denim",
    inspiredBy: "Wrangler",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80",
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: [
      { name: "Vintage Blue", hex: "#5c7fa3" },
      { name: "Stone Wash", hex: "#9ca3af" },
    ],
    category: "men",
    subcategory: "jeans",
    description: "Comfortable relaxed straight jeans with vintage-inspired wash. Perfect for everyday casual wear.",
    inStock: true,
  },
  // Men's T-Shirts
  {
    id: "m-tshirt-001",
    name: "Essential Cotton Tee",
    inspiredBy: "Nike",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Grey", hex: "#6b7280" },
    ],
    category: "men",
    subcategory: "tshirts",
    description: "Premium 100% cotton t-shirt with a relaxed fit. Soft, breathable fabric for all-day comfort.",
    inStock: true,
    isNew: true,
  },
  {
    id: "m-tshirt-002",
    name: "Performance Dry Fit Tee",
    inspiredBy: "Adidas",
    price: 44.99,
    discountedPrice: 34.99,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Red", hex: "#dc2626" },
      { name: "Blue", hex: "#2563eb" },
    ],
    category: "men",
    subcategory: "tshirts",
    description: "Moisture-wicking performance tee designed for active lifestyles. Lightweight and quick-drying.",
    inStock: true,
    isSale: true,
  },
  // Men's Shirts
  {
    id: "m-shirt-001",
    name: "Oxford Button-Down Shirt",
    inspiredBy: "Ralph Lauren",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Light Blue", hex: "#93c5fd" },
      { name: "Pink", hex: "#fda4af" },
    ],
    category: "men",
    subcategory: "shirts",
    description: "Classic Oxford cloth button-down with a timeless fit. Perfect for casual to smart-casual occasions.",
    inStock: true,
    isBestSeller: true,
  },
  // Men's Jackets
  {
    id: "m-jacket-001",
    name: "Classic Denim Jacket",
    inspiredBy: "Levi's Trucker",
    price: 129.99,
    discountedPrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Medium Wash", hex: "#6b8cae" },
      { name: "Dark Indigo", hex: "#2d3748" },
    ],
    category: "men",
    subcategory: "jackets",
    description: "Iconic trucker-style denim jacket with authentic detailing. A timeless wardrobe essential.",
    inStock: true,
    isNew: true,
    isSale: true,
  },
  {
    id: "m-jacket-002",
    name: "Bomber Jacket",
    inspiredBy: "Alpha Industries",
    price: 159.99,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Olive", hex: "#4d5739" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    category: "men",
    subcategory: "jackets",
    description: "Classic bomber jacket with ribbed cuffs and hem. Water-resistant outer with satin lining.",
    inStock: true,
  },
  // Women's Tops
  {
    id: "w-top-001",
    name: "Cropped Cotton Tank",
    inspiredBy: "Zara",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Beige", hex: "#d4c5b9" },
    ],
    category: "women",
    subcategory: "tops",
    description: "Modern cropped tank in soft cotton jersey. Pairs perfectly with high-waisted bottoms.",
    inStock: true,
    isNew: true,
  },
  {
    id: "w-top-002",
    name: "Oversized Linen Blouse",
    inspiredBy: "COS",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Off White", hex: "#f5f5f0" },
      { name: "Sand", hex: "#c4b7a6" },
    ],
    category: "women",
    subcategory: "tops",
    description: "Relaxed linen blouse with dropped shoulders and a boxy silhouette. Effortlessly chic.",
    inStock: true,
    isBestSeller: true,
  },
  // Women's Jeans
  {
    id: "w-jeans-001",
    name: "High-Rise Skinny Jeans",
    inspiredBy: "Levi's Mile High",
    price: 94.99,
    discountedPrice: 74.99,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
    ],
    sizes: ["24", "26", "28", "30", "32"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Dark Blue", hex: "#1e3a5f" },
    ],
    category: "women",
    subcategory: "jeans",
    description: "Ultra-high rise skinny jeans with sculpting fit. Stretch denim for all-day comfort.",
    inStock: true,
    isBestSeller: true,
    isSale: true,
  },
  {
    id: "w-jeans-002",
    name: "Wide Leg Cropped Jeans",
    inspiredBy: "Agolde",
    price: 109.99,
    images: [
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=600&q=80",
    ],
    sizes: ["24", "26", "28", "30"],
    colors: [
      { name: "Light Vintage", hex: "#a8c0d6" },
      { name: "White", hex: "#f5f5f5" },
    ],
    category: "women",
    subcategory: "jeans",
    description: "Relaxed wide-leg jeans with a cropped length. Vintage-inspired wash for an effortless look.",
    inStock: true,
    isNew: true,
  },
  // Women's Dresses
  {
    id: "w-dress-001",
    name: "Slip Midi Dress",
    inspiredBy: "Reformation",
    price: 119.99,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Champagne", hex: "#f5e6d3" },
      { name: "Forest", hex: "#2d4a3e" },
    ],
    category: "women",
    subcategory: "dresses",
    description: "Elegant satin slip dress with adjustable straps. Perfect for date nights or special occasions.",
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "w-dress-002",
    name: "Linen Shirt Dress",
    inspiredBy: "Uniqlo",
    price: 89.99,
    discountedPrice: 69.99,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    category: "women",
    subcategory: "dresses",
    description: "Versatile linen shirt dress with a relaxed fit. Easy to style for casual or polished looks.",
    inStock: true,
    isSale: true,
  },
  // Women's Jackets
  {
    id: "w-jacket-001",
    name: "Cropped Leather Jacket",
    inspiredBy: "AllSaints",
    price: 249.99,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Cognac", hex: "#8b4513" },
    ],
    category: "women",
    subcategory: "jackets",
    description: "Premium faux leather biker jacket with asymmetric zip. A wardrobe staple that never goes out of style.",
    inStock: true,
    isNew: true,
  },
  // Accessories
  {
    id: "acc-belt-001",
    name: "Classic Leather Belt",
    inspiredBy: "Gucci",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Brown", hex: "#8b4513" },
      { name: "Tan", hex: "#d2b48c" },
    ],
    category: "accessories",
    subcategory: "belts",
    description: "Premium leather belt with brushed metal buckle. Timeless accessory for any outfit.",
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "acc-cap-001",
    name: "Cotton Baseball Cap",
    inspiredBy: "New Era",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Khaki", hex: "#c4b7a6" },
    ],
    category: "accessories",
    subcategory: "caps",
    description: "Classic 6-panel baseball cap in washed cotton. Adjustable strap for perfect fit.",
    inStock: true,
    isNew: true,
  },
  {
    id: "acc-wallet-001",
    name: "Bifold Leather Wallet",
    inspiredBy: "Coach",
    price: 59.99,
    discountedPrice: 44.99,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Brown", hex: "#8b4513" },
    ],
    category: "accessories",
    subcategory: "wallets",
    description: "Sleek bifold wallet in premium leather. Features multiple card slots and bill compartment.",
    inStock: true,
    isSale: true,
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.isNew);
};

export const getBestSellers = (): Product[] => {
  return products.filter((p) => p.isBestSeller);
};

export const getSaleProducts = (): Product[] => {
  return products.filter((p) => p.isSale);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};
