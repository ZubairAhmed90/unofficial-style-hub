import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Minus, Plus, ChevronRight, Truck, RefreshCw, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const discountPercentage = product.discountedPrice
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container-custom py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground capitalize">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container-custom py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors",
                      selectedImage === index ? "border-primary" : "border-transparent"
                    )}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              {product.isNew && (
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded">
                  NEW
                </span>
              )}
              {product.isSale && (
                <span className="bg-destructive text-destructive-foreground text-xs font-semibold px-3 py-1 rounded">
                  SALE
                </span>
              )}
            </div>

            {/* Title & Price */}
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                Inspired by {product.inspiredBy}
              </p>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                {product.discountedPrice ? (
                  <>
                    <span className="text-2xl font-bold text-destructive">
                      ${product.discountedPrice.toFixed(2)}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="bg-destructive/10 text-destructive text-sm font-medium px-2 py-1 rounded">
                      Save {discountPercentage}%
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground">{product.description}</p>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium mb-3">
                Color: <span className="text-muted-foreground">{selectedColor?.name}</span>
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "h-10 w-10 rounded-full border-2 transition-all",
                      selectedColor?.name === color.name
                        ? "border-primary scale-110"
                        : "border-transparent hover:scale-105"
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Size</h3>
                <button className="text-sm text-muted-foreground hover:text-foreground underline">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "h-12 min-w-[3rem] px-4 text-sm border rounded-md transition-colors",
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-sm text-destructive mt-2">Please select a size</p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center border border-border rounded-md w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-12 w-12 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-12 w-12 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                variant="add-to-cart"
                size="xl"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={handleWishlistToggle}
                className={isWishlisted ? "text-destructive border-destructive" : ""}
              >
                <Heart className={cn("h-5 w-5", isWishlisted && "fill-current")} />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
              </div>
              <div className="text-center">
                <RefreshCw className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Secure Checkout</p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground bg-muted p-4 rounded-lg">
              <strong>Disclaimer:</strong> This is an unofficial/inspired garment. We are not affiliated with or endorsed by {product.inspiredBy}.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="container-custom py-16">
          <h2 className="font-heading text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
