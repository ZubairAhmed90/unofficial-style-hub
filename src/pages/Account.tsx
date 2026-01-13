import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { User, Package, Heart, MapPin, CreditCard, LogOut, Eye, EyeOff } from "lucide-react";

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Mock orders data
  const orders = [
    {
      id: "ORD-2024001",
      date: "Jan 10, 2024",
      status: "Delivered",
      total: 189.99,
      items: 3,
    },
    {
      id: "ORD-2024002",
      date: "Jan 5, 2024",
      status: "In Transit",
      total: 79.99,
      items: 1,
    },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="container-custom py-16 lg:py-24">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="font-heading text-3xl font-bold mb-2">
                {isLoginMode ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-muted-foreground">
                {isLoginMode
                  ? "Sign in to access your account"
                  : "Join UNOFFICIAL and start shopping"}
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <form onSubmit={handleLogin} className="space-y-4">
                {!isLoginMode && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {isLoginMode && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      Remember me
                    </label>
                    <a href="#" className="text-gold hover:underline">
                      Forgot password?
                    </a>
                  </div>
                )}

                {!isLoginMode && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="••••••••" required />
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg">
                  {isLoginMode ? "Sign In" : "Create Account"}
                </Button>
              </form>

              <div className="relative my-6">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-4 text-sm text-muted-foreground">
                  or
                </span>
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full" type="button">
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="w-4 h-4 mr-2"
                  />
                  Continue with Google
                </Button>
              </div>

              <p className="text-center text-sm mt-6">
                {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  type="button"
                  className="text-gold font-medium hover:underline"
                  onClick={() => setIsLoginMode(!isLoginMode)}
                >
                  {isLoginMode ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-10 lg:py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold">My Account</h1>
            <p className="text-muted-foreground">Welcome back, John!</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="orders" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid lg:grid-cols-4">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Addresses</span>
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Wishlist</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <h2 className="font-heading text-xl font-semibold">Order History</h2>
            {orders.length > 0 ? (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-card border border-border rounded-lg p-6 hover:border-gold/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.date} • {order.items} item{order.items > 1 ? "s" : ""}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          }`}
                        >
                          {order.status}
                        </span>
                        <p className="font-semibold">${order.total.toFixed(2)}</p>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">No orders yet</p>
                <Link to="/shop">
                  <Button>Start Shopping</Button>
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <h2 className="font-heading text-xl font-semibold">Profile Information</h2>
            <div className="bg-card border border-border rounded-lg p-6 max-w-xl">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input defaultValue="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <Button type="submit">Save Changes</Button>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="addresses" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-semibold">Saved Addresses</h2>
              <Button size="sm">Add New Address</Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    Default
                  </span>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
                <p className="font-medium">Home</p>
                <p className="text-sm text-muted-foreground mt-1">
                  John Doe
                  <br />
                  123 Main Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-6">
            <h2 className="font-heading text-xl font-semibold">My Wishlist</h2>
            <div className="text-center py-12">
              <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-4">Your wishlist is empty</p>
              <Link to="/shop">
                <Button>Browse Products</Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Account;
