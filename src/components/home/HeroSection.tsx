import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary -mt-[calc(2.5rem+4rem)] lg:-mt-[calc(2.5rem+5rem)] pt-[calc(2.5rem+4rem)] lg:pt-[calc(2.5rem+5rem)]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-2xl">
          <p className="text-primary-foreground/70 uppercase tracking-widest text-sm mb-4 animate-fade-in">
            New Collection 2024
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Premium Style.
            <br />
            <span className="gradient-text">Unofficial</span> Price.
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-md animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Discover our collection of inspired fashion pieces. High-quality garments that look expensive but won't break the bank.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/shop?filter=new">
                New Arrivals
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
