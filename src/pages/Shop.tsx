import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const priceRanges = [
  { label: "All Prices", value: "all" },
  { label: "Under $50", value: "0-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100 - $200", value: "100-200" },
  { label: "Over $200", value: "200-" },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "24", "26", "28", "30", "32", "34", "36", "38"];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categoryFilter = searchParams.get("category") || "";
  const subcategoryFilter = searchParams.get("subcategory") || "";
  const filterType = searchParams.get("filter") || "";
  const searchQuery = searchParams.get("search") || "";
  
  const [priceRange, setPriceRange] = useState("all");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // Subcategory filter
    if (subcategoryFilter) {
      result = result.filter((p) => p.subcategory === subcategoryFilter);
    }

    // Filter type (new, sale, bestseller)
    if (filterType === "new") {
      result = result.filter((p) => p.isNew);
    } else if (filterType === "sale") {
      result = result.filter((p) => p.isSale);
    } else if (filterType === "bestseller") {
      result = result.filter((p) => p.isBestSeller);
    }

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.inspiredBy.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Price range
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter((p) => {
        const price = p.discountedPrice || p.price;
        if (max) {
          return price >= min && price <= max;
        }
        return price >= min;
      });
    }

    // Size filter
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((size) => selectedSizes.includes(size))
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price));
        break;
      case "price-high":
        result.sort((a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price));
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [categoryFilter, subcategoryFilter, filterType, searchQuery, priceRange, selectedSizes, sortBy]);

  const getPageTitle = () => {
    if (searchQuery) return `Search: "${searchQuery}"`;
    if (filterType === "new") return "New Arrivals";
    if (filterType === "sale") return "Sale";
    if (filterType === "bestseller") return "Best Sellers";
    if (categoryFilter) {
      const category = categories.find((c) => c.slug === categoryFilter);
      if (subcategoryFilter) {
        const sub = category?.subcategories.find((s) => s.slug === subcategoryFilter);
        return sub ? `${category?.name} - ${sub.name}` : category?.name || "Shop";
      }
      return category?.name || "Shop";
    }
    return "All Products";
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setPriceRange("all");
    setSelectedSizes([]);
    setSearchParams({});
  };

  const hasActiveFilters = priceRange !== "all" || selectedSizes.length > 0 || categoryFilter || filterType;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSearchParams({})}
            className={`block text-sm ${!categoryFilter ? "font-medium" : "text-muted-foreground hover:text-foreground"}`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <div key={cat.slug}>
              <button
                onClick={() => setSearchParams({ category: cat.slug })}
                className={`block text-sm ${categoryFilter === cat.slug ? "font-medium" : "text-muted-foreground hover:text-foreground"}`}
              >
                {cat.name}
              </button>
              {categoryFilter === cat.slug && (
                <div className="pl-4 mt-2 space-y-2">
                  {cat.subcategories.map((sub) => (
                    <button
                      key={sub.slug}
                      onClick={() =>
                        setSearchParams({ category: cat.slug, subcategory: sub.slug })
                      }
                      className={`block text-sm ${
                        subcategoryFilter === sub.slug
                          ? "font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block text-sm ${
                priceRange === range.value
                  ? "font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="font-semibold mb-3">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`h-9 min-w-[2.25rem] px-2 text-sm border rounded transition-colors ${
                selectedSizes.includes(size)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" className="w-full" onClick={clearFilters}>
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <Layout>
      <div className="container-custom py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-2">
            {getPageTitle()}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              {/* Mobile Filter Button */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    {hasActiveFilters && (
                      <span className="ml-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                        !
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-sm">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-muted-foreground hidden sm:block">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products found</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
