import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Premium quality, inspired designs, at prices that make sense.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
                Making Fashion Accessible
              </h2>
              <p className="text-muted-foreground mb-4">
                At Unofficial, we believe that everyone deserves to look and feel great without breaking the bank. We create high-quality garments inspired by the world's most beloved fashion brands, offering you the styles you love at prices you can afford.
              </p>
              <p className="text-muted-foreground mb-4">
                Our mission is simple: deliver premium quality, timeless designs, and exceptional value. Every piece in our collection is crafted with attention to detail, using quality materials that stand the test of time.
              </p>
              <p className="text-muted-foreground">
                We're transparent about what we do. Our products are inspired by popular brands but are not affiliated with or endorsed by them. What we offer is our own interpretation of classic styles, made accessible to everyone.
              </p>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Fashion design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background rounded-lg">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every garment undergoes rigorous quality checks to ensure it meets our standards.
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-lg">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Fair Pricing</h3>
              <p className="text-muted-foreground">
                Great style shouldn't cost a fortune. We cut out the middleman to bring you designer-inspired looks at honest prices.
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-lg">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                We're upfront about who we are and what we offer. No pretense, just great clothes at great prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Ready to Upgrade Your Wardrobe?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Discover our collection of inspired fashion pieces and find your new favorite styles.
          </p>
          <Button variant="add-to-cart" size="xl" asChild>
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
