import Layout from "@/components/layout/Layout";
import { Truck, Clock, MapPin, Package, RefreshCw, HelpCircle } from "lucide-react";

const Shipping = () => {
  const shippingMethods = [
    {
      name: "Standard Shipping",
      time: "5-7 business days",
      price: "$9.99",
      freeOver: "$100",
      description: "Reliable delivery for all your orders",
    },
    {
      name: "Express Shipping",
      time: "2-3 business days",
      price: "$19.99",
      freeOver: "$200",
      description: "Faster delivery when you need it quickly",
    },
    {
      name: "Overnight Shipping",
      time: "1 business day",
      price: "$29.99",
      freeOver: "N/A",
      description: "Next-day delivery for urgent orders",
    },
  ];

  return (
    <Layout>
      <div className="container-custom py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold mb-4">Shipping & Delivery</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about shipping your order
            </p>
          </div>

          {/* Shipping Methods */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
              <Truck className="h-6 w-6 text-gold" />
              Shipping Methods
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {shippingMethods.map((method) => (
                <div
                  key={method.name}
                  className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-colors"
                >
                  <h3 className="font-heading font-semibold mb-2">{method.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4" />
                    {method.time}
                  </div>
                  <p className="text-2xl font-bold text-gold mb-2">{method.price}</p>
                  {method.freeOver !== "N/A" && (
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Free on orders over {method.freeOver}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-3">{method.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Shipping Zones */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-gold" />
              Shipping Zones
            </h2>
            <div className="bg-secondary/30 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Domestic (USA)</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Continental US: All shipping methods available</li>
                    <li>• Alaska & Hawaii: Standard and Express only (+$5)</li>
                    <li>• US Territories: Standard shipping only (+$10)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">International</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Canada: 7-10 business days ($14.99)</li>
                    <li>• Europe: 10-14 business days ($24.99)</li>
                    <li>• Asia & Australia: 12-18 business days ($29.99)</li>
                    <li>• Rest of World: Contact us for rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Order Processing */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
              <Package className="h-6 w-6 text-gold" />
              Order Processing
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Orders placed before <strong className="text-foreground">2:00 PM EST</strong> on
                business days are processed the same day. Orders placed after this time or on
                weekends/holidays will be processed the next business day.
              </p>
              <p>
                Once your order ships, you'll receive a confirmation email with tracking
                information. You can also track your order in your account dashboard.
              </p>
            </div>
          </section>

          {/* Returns */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
              <RefreshCw className="h-6 w-6 text-gold" />
              Returns & Exchanges
            </h2>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Return Policy</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 30-day return window from delivery date</li>
                    <li>• Items must be unworn with original tags</li>
                    <li>• Free returns on all domestic orders</li>
                    <li>• Refund processed within 5-7 business days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Exchange Policy</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Easy size exchanges available</li>
                    <li>• No additional shipping charges</li>
                    <li>• Priority processing for exchanges</li>
                    <li>• Subject to availability</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-gold" />
              Common Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">Can I change my shipping address after ordering?</h3>
                <p className="text-sm text-muted-foreground">
                  Please contact us within 1 hour of placing your order. Once the order is
                  processed, we cannot guarantee address changes.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">What if my package is lost or damaged?</h3>
                <p className="text-sm text-muted-foreground">
                  All shipments are insured. Contact our support team with your order number and
                  we'll resolve the issue within 48 hours.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">Do you offer gift wrapping?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! Add gift wrapping at checkout for $4.99. Includes a premium box and
                  personalized message card.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Shipping;
