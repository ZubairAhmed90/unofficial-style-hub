import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types/product";

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink: string;
}

const FeaturedProducts = ({ title, subtitle, products, viewAllLink }: FeaturedProductsProps) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <Button variant="ghost" asChild className="self-start sm:self-auto">
            <Link to={viewAllLink}>
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
