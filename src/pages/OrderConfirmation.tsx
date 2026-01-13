import { useLocation, useNavigate, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";

interface OrderState {
  orderId: string;
  email: string;
  total: number;
}

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as OrderState;

  if (!state?.orderId) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <div className="container-custom py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Animation */}
          <div className="mb-8 animate-scale-in">
            <div className="w-24 h-24 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-4 animate-fade-in">
            Thank You for Your Order!
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            Your order has been placed successfully. We'll send you a confirmation email shortly.
          </p>

          {/* Order Details Card */}
          <div className="bg-secondary/30 rounded-xl p-8 mb-8 text-left animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Order Number</p>
                <p className="font-heading text-xl font-bold">{state.orderId}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="font-heading text-xl font-bold">${state.total.toFixed(2)}</p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-medium">Confirmation Email Sent</p>
                  <p className="text-sm text-muted-foreground">
                    A confirmation email has been sent to <strong>{state.email}</strong> with your
                    order details and tracking information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Processing</h3>
              <p className="text-sm text-muted-foreground">
                Your order is being prepared for shipment
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                <Package className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-1 text-muted-foreground">Shipped</h3>
              <p className="text-sm text-muted-foreground">We'll notify you when shipped</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-1 text-muted-foreground">Delivered</h3>
              <p className="text-sm text-muted-foreground">Estimated 5-7 business days</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" onClick={() => navigate("/shop")}>
              Continue Shopping
            </Button>
            <Button onClick={() => navigate("/account/orders")}>
              Track Your Order
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Support */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Need help?{" "}
              <a href="/contact" className="text-gold hover:underline">
                Contact our support team
              </a>{" "}
              or call us at <strong>1-800-UNOFFICIAL</strong>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
