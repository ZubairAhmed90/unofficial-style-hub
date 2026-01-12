import React, { createContext, useContext, useState, useCallback } from "react";
import { CartItem, Product, ProductColor } from "@/types/product";

interface CartContextType {
  items: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product, size: string, color: ProductColor, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, colorName: string) => void;
  updateQuantity: (productId: string, size: string, colorName: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback(
    (product: Product, size: string, color: ProductColor, quantity = 1) => {
      setItems((prevItems) => {
        const existingIndex = prevItems.findIndex(
          (item) =>
            item.product.id === product.id &&
            item.selectedSize === size &&
            item.selectedColor.name === color.name
        );

        if (existingIndex > -1) {
          const updated = [...prevItems];
          updated[existingIndex].quantity += quantity;
          return updated;
        }

        return [...prevItems, { product, quantity, selectedSize: size, selectedColor: color }];
      });
      setIsCartOpen(true);
    },
    []
  );

  const removeFromCart = useCallback((productId: string, size: string, colorName: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor.name === colorName
          )
      )
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, size: string, colorName: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId, size, colorName);
        return;
      }

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === productId &&
          item.selectedSize === size &&
          item.selectedColor.name === colorName
            ? { ...item, quantity }
            : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const addToWishlist = useCallback((product: Product) => {
    setWishlist((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const isInWishlist = useCallback(
    (productId: string) => wishlist.some((p) => p.id === productId),
    [wishlist]
  );

  const cartTotal = items.reduce((total, item) => {
    const price = item.product.discountedPrice || item.product.price;
    return total + price * item.quantity;
  }, 0);

  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
