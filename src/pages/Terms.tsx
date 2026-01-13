import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container-custom py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 13, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our website and services, you agree to be bound by these Terms
                and Conditions. If you disagree with any part of these terms, you may not access our
                website or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">
                2. Products and Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                UNOFFICIAL sells unofficial and inspired garments. We are not affiliated with any
                original brands mentioned on our website. All product names, logos, and brands are
                property of their respective owners. References to these brands are for
                identification purposes only.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">
                3. Orders and Payments
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>All orders are subject to availability and confirmation of the order price</li>
                <li>We reserve the right to refuse any order for any reason</li>
                <li>Payment must be made in full before order dispatch</li>
                <li>Prices are subject to change without notice</li>
                <li>We accept major credit cards and cash on delivery where available</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">
                4. Shipping and Delivery
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Delivery times are estimates only and not guaranteed. We are not responsible for any
                delays caused by shipping carriers or customs. Risk of loss and title for items
                purchased pass to you upon delivery.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">
                5. Returns and Refunds
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Items may be returned within 30 days of purchase</li>
                <li>Items must be unworn, unwashed, and in original condition with tags attached</li>
                <li>Refunds will be processed within 5-7 business days of receiving the return</li>
                <li>Original shipping costs are non-refundable</li>
                <li>Sale items may be final sale and non-returnable</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software,
                is the property of UNOFFICIAL or its content suppliers and is protected by
                intellectual property laws. You may not reproduce, distribute, or create derivative
                works from any content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                UNOFFICIAL shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages resulting from your use of or inability to use our website or
                products. Our total liability shall not exceed the amount you paid for the products
                in question.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will provide notice of
                significant changes by posting a prominent notice on our website. Your continued use
                of our website after such modifications constitutes your acceptance of the updated
                terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                <p className="text-foreground">
                  Email: legal@unofficial.com
                  <br />
                  Phone: 1-800-UNOFFICIAL
                  <br />
                  Address: 123 Fashion Avenue, New York, NY 10001
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
