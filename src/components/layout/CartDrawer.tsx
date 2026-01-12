import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full max-w-md p-0 flex flex-col">
        <SheetHeader className="p-4 border-b border-border">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-2">
              Your cart is empty
            </h3>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added anything yet.
            </p>
            <Button onClick={() => setIsCartOpen(false)} asChild>
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`}
                  className="flex gap-4 p-3 bg-secondary rounded-lg"
                >
                  <div className="w-20 h-24 bg-muted rounded overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.selectedSize} / {item.selectedColor.name}
                    </p>
                    <p className="font-semibold mt-2">
                      ${(item.product.discountedPrice || item.product.price).toFixed(2)}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor.name,
                              item.quantity - 1
                            )
                          }
                          className="h-8 w-8 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor.name,
                              item.quantity + 1
                            )
                          }
                          className="h-8 w-8 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          removeFromCart(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor.name
                          )
                        }
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4 space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Shipping & taxes calculated at checkout
              </p>
              <div className="space-y-2">
                <Button
                  variant="add-to-cart"
                  className="w-full"
                  onClick={() => setIsCartOpen(false)}
                  asChild
                >
                  <Link to="/checkout">Checkout</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsCartOpen(false)}
                  asChild
                >
                  <Link to="/cart">View Cart</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
