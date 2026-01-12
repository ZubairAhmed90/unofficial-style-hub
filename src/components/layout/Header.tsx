import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { categories } from "@/data/products";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isInHero, setIsInHero] = useState(true);
  const lastScrollY = useRef(0);
  const { cartCount, setIsCartOpen, wishlist } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.9; // Approximate hero section height
      
      // Check if we're in the hero section
      setIsInHero(currentScrollY < heroHeight);
      
      // Show header when scrolling up, hide when scrolling down (only after hero)
      if (currentScrollY < heroHeight) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const heroHeight = window.innerHeight * 0.9;
      // Show header when mouse leaves hero area (moves above it)
      if (e.clientY < 80) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        <p>Free shipping on orders over $100 • Use code UNOFFICIAL20 for 20% off</p>
      </div>

      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-heading text-2xl lg:text-3xl font-bold tracking-tighter">
              UNOFFICIAL
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/shop?filter=new"
              className="text-sm font-medium uppercase tracking-wide underline-animated"
            >
              New Arrivals
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/shop?category=${category.slug}`}
                className="text-sm font-medium uppercase tracking-wide underline-animated"
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/shop?filter=sale"
              className="text-sm font-medium uppercase tracking-wide text-destructive underline-animated"
            >
              Sale
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Button>
            </Link>

            {/* Account */}
            <Link to="/account" className="hidden sm:block">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-border animate-slide-up">
            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 bg-secondary rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-full max-w-sm p-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-heading text-xl font-bold">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                <Link
                  to="/shop?filter=new"
                  className="block text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  New Arrivals
                </Link>
                {categories.map((category) => (
                  <div key={category.slug} className="space-y-2">
                    <Link
                      to={`/shop?category=${category.slug}`}
                      className="block text-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                    <div className="pl-4 space-y-2">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          to={`/shop?category=${category.slug}&subcategory=${sub.slug}`}
                          className="block text-muted-foreground hover:text-foreground"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  to="/shop?filter=sale"
                  className="block text-lg font-medium text-destructive"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sale
                </Link>
              </div>
            </nav>
            <div className="p-4 border-t border-border space-y-2">
              <Link to="/account" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  My Account
                </Button>
              </Link>
              <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist ({wishlist.length})
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
