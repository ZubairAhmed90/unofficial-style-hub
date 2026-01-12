import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { useCart } from "@/contexts/CartContext";

const Wishlist = () => {
  const { wishlist } = useCart();

  if (wishlist.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-16 lg:py-24 text-center">
          <Heart className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
          <h1 className="font-heading text-3xl font-bold mb-4">Your Wishlist is Empty</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Save your favorite items to your wishlist and shop them later!
          </p>
          <Button variant="add-to-cart" size="xl" asChild>
            <Link to="/shop">Browse Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-8 lg:py-12">
        <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-2">My Wishlist</h1>
        <p className="text-muted-foreground mb-8">
          {wishlist.length} item{wishlist.length !== 1 ? "s" : ""} saved
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
