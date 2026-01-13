import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container-custom py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 13, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to UNOFFICIAL ("we," "our," or "us"). We respect your privacy and are
                committed to protecting your personal data. This privacy policy will inform you
                about how we look after your personal data when you visit our website and tell you
                about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Identity Data: first name, last name, username</li>
                <li>Contact Data: billing address, delivery address, email address, phone numbers</li>
                <li>Financial Data: payment card details (processed securely through our payment providers)</li>
                <li>Transaction Data: details about products you have purchased from us</li>
                <li>Technical Data: IP address, browser type, device information</li>
                <li>Usage Data: information about how you use our website and products</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your personal data for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To process and fulfill your orders</li>
                <li>To manage your account and relationship with us</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To improve our website and products</li>
                <li>To prevent fraud and ensure security</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We have implemented appropriate security measures to prevent your personal data from
                being accidentally lost, used, or accessed in an unauthorized way. We limit access
                to your personal data to those employees and third parties who have a business need
                to know.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under certain circumstances, you have rights under data protection laws in relation
                to your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies to distinguish you from other users of our website. This
                helps us to provide you with a good experience when you browse our website and also
                allows us to improve our site. You can set your browser to refuse all or some
                browser cookies.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please
                contact us at:
              </p>
              <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                <p className="text-foreground">
                  Email: privacy@unofficial.com
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

export default Privacy;
