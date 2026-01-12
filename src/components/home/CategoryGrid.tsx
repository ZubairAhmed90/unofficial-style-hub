import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

const CategoryGrid = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore our curated collections designed to elevate your everyday style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/shop?category=${category.slug}`}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
                    {category.name}
                  </h3>
                  <div className="flex items-center text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                    <span className="text-sm font-medium uppercase tracking-wide">
                      Shop Now
                    </span>
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
