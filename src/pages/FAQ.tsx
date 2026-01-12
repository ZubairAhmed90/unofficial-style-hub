import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does 'inspired by' mean?",
    answer:
      "Our products are designed taking inspiration from popular fashion brands' styles and aesthetics. We create our own versions of classic designs at more affordable prices. We are not affiliated with, endorsed by, or connected to any of the brands we reference.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unworn items with original tags attached. If you're not satisfied with your purchase, simply initiate a return through your account dashboard or contact our support team. Refunds are processed within 5-7 business days after we receive the returned item.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days within the US. Express shipping (2-3 business days) is available for an additional fee. International shipping times vary by location, typically 10-14 business days. Free standard shipping is available on orders over $100.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by destination. You can see the exact shipping cost at checkout before completing your order.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive an email with a tracking number. You can also track your order by logging into your account and viewing your order history. Tracking information typically updates within 24 hours of shipment.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Cash on Delivery (COD) for select locations. All payments are securely processed through our encrypted payment gateway.",
  },
  {
    question: "How do I know my size?",
    answer:
      "Each product page includes a size guide with detailed measurements. We recommend measuring yourself and comparing with our size charts. If you're between sizes, we generally recommend sizing up for a more comfortable fit. Contact our support team if you need personalized sizing advice.",
  },
  {
    question: "Can I modify or cancel my order?",
    answer:
      "Orders can be modified or cancelled within 1 hour of placement. After this window, we begin processing orders for shipment. If you need to make changes, please contact our support team immediately and we'll do our best to accommodate your request.",
  },
  {
    question: "Are your products good quality?",
    answer:
      "Quality is our top priority. We use premium materials and maintain strict quality control standards. While we offer inspired designs at affordable prices, we never compromise on the quality of materials or craftsmanship. Many customers find our quality comparable to premium brands.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@unofficial.com, by phone at +1 (555) 123-4567, or through our contact form. Our team is available Monday-Friday, 9 AM - 6 PM EST. We typically respond to inquiries within 24 hours.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <div className="container-custom py-12 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground">
              Find answers to common questions about shopping with Unofficial.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-secondary rounded-lg">
            <h2 className="font-heading text-xl font-semibold mb-2">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-4">
              Our support team is here to help you.
            </p>
            <a
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
