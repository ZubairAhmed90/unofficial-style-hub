import { Truck, RefreshCw, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: Shield,
    title: "Secure Checkout",
    description: "100% secure payment",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team",
  },
];

const BrandBanner = () => {
  return (
    <section className="py-12 border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-sm">{feature.title}</h3>
                <p className="text-muted-foreground text-xs">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBanner;
