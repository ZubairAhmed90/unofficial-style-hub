import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-custom py-12 lg:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-2">
              Join the Club
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Subscribe to get exclusive offers, early access to new arrivals, and styling tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
              />
              <Button variant="hero-outline" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h2 className="font-heading text-2xl font-bold tracking-tighter">
                UNOFFICIAL
              </h2>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Premium Style. Unofficial Price.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/shop?filter=new" className="hover:text-primary-foreground transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=bestseller" className="hover:text-primary-foreground transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=men" className="hover:text-primary-foreground transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/shop?category=women" className="hover:text-primary-foreground transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="hover:text-primary-foreground transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=sale" className="hover:text-primary-foreground transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-foreground transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-primary-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-primary-foreground transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-primary-foreground transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-heading font-semibold mb-4">About</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/about" className="hover:text-primary-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Unofficial. All rights reserved.</p>
            <p className="text-center lg:text-right max-w-2xl">
              <strong>Disclaimer:</strong> This brand sells unofficial / inspired garments and is not affiliated with any original brands.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
