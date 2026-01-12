import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist, addToCart } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0], 1);
  };

  const discountPercentage = product.discountedPrice
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-lg mb-4">
        {/* Product Image */}
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded">
              NEW
            </span>
          )}
          {product.isSale && discountPercentage > 0 && (
            <span className="bg-destructive text-destructive-foreground text-xs font-semibold px-3 py-1 rounded">
              -{discountPercentage}%
            </span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="bg-gold text-charcoal text-xs font-semibold px-3 py-1 rounded">
              BESTSELLER
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={cn(
            "absolute top-3 right-3 h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300",
            isWishlisted ? "text-destructive" : "text-foreground hover:text-destructive"
          )}
        >
          <Heart className={cn("h-5 w-5", isWishlisted && "fill-current")} />
        </button>

        {/* Quick Add Button */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Button
            variant="add-to-cart"
            className="w-full"
            onClick={handleQuickAdd}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          Inspired by {product.inspiredBy}
        </p>
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          {product.discountedPrice ? (
            <>
              <span className="font-semibold text-destructive">
                ${product.discountedPrice.toFixed(2)}
              </span>
              <span className="text-muted-foreground line-through text-sm">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="font-semibold">${product.price.toFixed(2)}</span>
          )}
        </div>

        {/* Color Options */}
        <div className="flex items-center gap-1 pt-2">
          {product.colors.slice(0, 4).map((color) => (
            <span
              key={color.name}
              className="h-4 w-4 rounded-full border border-border"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-muted-foreground ml-1">
              +{product.colors.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
