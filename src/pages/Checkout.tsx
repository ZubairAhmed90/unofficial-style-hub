import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Truck, MapPin, ChevronRight, Lock, Shield } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  const shippingCost = cartTotal > 100 ? 0 : 9.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shippingCost + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    clearCart();
    navigate("/order-confirmation", {
      state: {
        orderId: `ORD-${Date.now()}`,
        email: shippingInfo.email,
        total,
      },
    });
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some items to your cart to checkout</p>
          <Button onClick={() => navigate("/shop")}>Continue Shopping</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-10 lg:py-16">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center gap-2 ${step >= 1 ? "text-foreground" : "text-muted-foreground"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 1 ? "bg-primary text-primary-foreground" : "bg-secondary"
                }`}
              >
                1
              </div>
              <span className="hidden sm:inline font-medium">Shipping</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <div
              className={`flex items-center gap-2 ${step >= 2 ? "text-foreground" : "text-muted-foreground"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 2 ? "bg-primary text-primary-foreground" : "bg-secondary"
                }`}
              >
                2
              </div>
              <span className="hidden sm:inline font-medium">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <form onSubmit={handleSubmitShipping} className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <MapPin className="h-5 w-5 text-gold" />
                    <h2 className="font-heading text-xl font-semibold">Shipping Address</h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={shippingInfo.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={shippingInfo.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={shippingInfo.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State / Province *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP / Postal Code *</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Truck className="h-5 w-5 text-gold" />
                    <h2 className="font-heading text-xl font-semibold">Shipping Method</h2>
                  </div>

                  <RadioGroup defaultValue="standard" className="space-y-3">
                    <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:border-gold transition-colors">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="standard" id="standard" />
                        <div>
                          <p className="font-medium">Standard Shipping</p>
                          <p className="text-sm text-muted-foreground">5-7 business days</p>
                        </div>
                      </div>
                      <p className="font-semibold">{cartTotal > 100 ? "FREE" : "$9.99"}</p>
                    </label>
                    <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:border-gold transition-colors">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="express" id="express" />
                        <div>
                          <p className="font-medium">Express Shipping</p>
                          <p className="text-sm text-muted-foreground">2-3 business days</p>
                        </div>
                      </div>
                      <p className="font-semibold">$19.99</p>
                    </label>
                  </RadioGroup>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Continue to Payment
                </Button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handlePlaceOrder} className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <CreditCard className="h-5 w-5 text-gold" />
                    <h2 className="font-heading text-xl font-semibold">Payment Method</h2>
                  </div>

                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="space-y-3"
                  >
                    <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:border-gold transition-colors">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="card" id="card" />
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5" />
                          <p className="font-medium">Credit / Debit Card</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/100px-Visa_Inc._logo.svg.png"
                          alt="Visa"
                          className="h-6"
                        />
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/100px-Mastercard-logo.svg.png"
                          alt="Mastercard"
                          className="h-6"
                        />
                      </div>
                    </label>
                    <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:border-gold transition-colors">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="cod" id="cod" />
                        <div className="flex items-center gap-2">
                          <Truck className="h-5 w-5" />
                          <p className="font-medium">Cash on Delivery</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">+$2.00</span>
                    </label>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="mt-6 space-y-4 p-6 bg-secondary/30 rounded-lg">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="John Doe" required />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-300">
                      Secure Checkout
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Your payment information is encrypted and secure
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" size="lg" className="flex-1" disabled={isProcessing}>
                    {isProcessing ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Place Order - ${total.toFixed(2)}
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary/30 rounded-xl p-6 sticky top-32">
              <h2 className="font-heading text-lg font-semibold mb-4">Order Summary</h2>

              <div className="space-y-4 max-h-[300px] overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`}
                    className="flex gap-3"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.selectedSize} / {item.selectedColor.name} × {item.quantity}
                      </p>
                      <p className="font-semibold text-sm">
                        $
                        {(
                          (item.product.discountedPrice || item.product.price) * item.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between items-center font-heading text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {step === 1 && shippingInfo.email && (
                <div className="mt-4 p-3 bg-background rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Shipping to:</p>
                  <p className="text-sm font-medium">
                    {shippingInfo.firstName} {shippingInfo.lastName}
                  </p>
                  <p className="text-sm text-muted-foreground">{shippingInfo.address}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
