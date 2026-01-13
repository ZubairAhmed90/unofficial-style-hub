import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-primary -mt-[calc(2.5rem+4rem)] lg:-mt-[calc(2.5rem+5rem)] pt-[calc(2.5rem+4rem)] lg:pt-[calc(2.5rem+5rem)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Animated Background Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">New Collection 2024</span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground mb-6 animate-slide-up leading-[1.1]">
              Premium Style.
              <br />
              <span className="gradient-text">Unofficial</span> Price.
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-lg animate-slide-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
              Discover our collection of inspired fashion pieces. High-quality garments that look expensive but won't break the bank.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="gold" size="xl" asChild className="group">
                <Link to="/shop">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/shop?filter=new">
                  New Arrivals
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div>
                <p className="text-3xl font-bold text-gold">50K+</p>
                <p className="text-sm text-primary-foreground/60">Happy Customers</p>
              </div>
              <div className="w-px bg-primary-foreground/20" />
              <div>
                <p className="text-3xl font-bold text-gold">500+</p>
                <p className="text-sm text-primary-foreground/60">Products</p>
              </div>
              <div className="w-px bg-primary-foreground/20" />
              <div>
                <p className="text-3xl font-bold text-gold">4.9★</p>
                <p className="text-sm text-primary-foreground/60">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Fashion model wearing stylish outfit"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 lg:-left-8 top-1/4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <p className="text-xs text-muted-foreground mb-1">Best Seller</p>
                <p className="font-semibold text-foreground">Classic Denim Jacket</p>
                <p className="text-gold font-bold">$89.99</p>
              </div>

              <div className="absolute -right-4 lg:-right-8 bottom-1/4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-slide-up" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-xs text-muted-foreground">Live Orders</p>
                </div>
                <p className="font-semibold text-foreground">2,847 orders today</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full border-2 border-gold/30 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
