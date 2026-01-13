import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ChevronDown } from "lucide-react";

interface MegaMenuProps {
  isVisible: boolean;
}

const MegaMenu = ({ isVisible }: MegaMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const featuredItems = [
    {
      title: "New Season Arrivals",
      description: "Discover the latest trends",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",
      link: "/shop?filter=new",
    },
    {
      title: "Up to 50% Off",
      description: "Limited time sale",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80",
      link: "/shop?filter=sale",
    },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {/* New Arrivals */}
      <Link
        to="/shop?filter=new"
        className="px-4 py-2 text-sm font-medium uppercase tracking-wide underline-animated hover:text-gold transition-colors"
      >
        New Arrivals
      </Link>

      {/* Category Dropdowns */}
      {categories.map((category) => (
        <div
          key={category.slug}
          className="relative group"
          onMouseEnter={() => setActiveCategory(category.slug)}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium uppercase tracking-wide underline-animated hover:text-gold transition-colors">
            {category.name}
            <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
          </button>

          {/* Mega Menu Dropdown */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-background border border-border shadow-xl rounded-lg overflow-hidden transition-all duration-200 ${
              activeCategory === category.slug
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <div className="grid grid-cols-2 gap-0">
              {/* Categories List */}
              <div className="p-6 bg-secondary/30">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                  Shop {category.name}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to={`/shop?category=${category.slug}`}
                      className="text-sm font-medium hover:text-gold transition-colors flex items-center gap-2"
                    >
                      View All {category.name}
                    </Link>
                  </li>
                  {category.subcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        to={`/shop?category=${category.slug}&subcategory=${sub.slug}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Image */}
              <div className="relative overflow-hidden">
                <Link to={`/shop?category=${category.slug}`} className="block">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-heading font-semibold text-lg">
                      Shop {category.name}
                    </p>
                    <p className="text-white/80 text-sm">
                      {category.subcategories.length} categories
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Best Sellers */}
      <Link
        to="/shop?filter=bestseller"
        className="px-4 py-2 text-sm font-medium uppercase tracking-wide underline-animated hover:text-gold transition-colors"
      >
        Best Sellers
      </Link>

      {/* Sale */}
      <Link
        to="/shop?filter=sale"
        className="px-4 py-2 text-sm font-medium uppercase tracking-wide text-destructive underline-animated"
      >
        Sale
      </Link>
    </nav>
  );
};

export default MegaMenu;
