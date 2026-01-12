import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PromoSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-accent">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-medium uppercase tracking-widest text-gold mb-4 block">
              Limited Time Offer
            </span>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
              Up to 40% Off
              <br />
              Select Styles
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Shop our biggest sale of the season. Premium inspired pieces at prices you won't believe. Use code <strong className="text-foreground">UNOFFICIAL40</strong> at checkout.
            </p>
            <Button variant="add-to-cart" size="xl" asChild>
              <Link to="/shop?filter=sale">Shop Sale</Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                alt="Sale promotion"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-primary text-primary-foreground p-6 lg:p-8 rounded-lg shadow-elegant">
              <span className="block text-sm font-medium uppercase tracking-wide mb-1">
                Use Code
              </span>
              <span className="font-heading text-2xl lg:text-3xl font-bold">
                UNOFFICIAL40
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
