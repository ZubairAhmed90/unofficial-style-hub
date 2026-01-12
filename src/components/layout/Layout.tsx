import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[calc(2.5rem+4rem)] lg:pt-[calc(2.5rem+5rem)]">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
