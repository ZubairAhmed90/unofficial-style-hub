import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PromoSection from "@/components/home/PromoSection";
import BrandBanner from "@/components/home/BrandBanner";
import { getNewArrivals, getBestSellers, getSaleProducts } from "@/data/products";

const Index = () => {
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();
  const saleProducts = getSaleProducts();

  return (
    <Layout>
      <HeroSection />
      <BrandBanner />
      <FeaturedProducts
        title="New Arrivals"
        subtitle="The latest additions to our collection"
        products={newArrivals}
        viewAllLink="/shop?filter=new"
      />
      <CategoryGrid />
      <FeaturedProducts
        title="Best Sellers"
        subtitle="Shop our most popular styles"
        products={bestSellers}
        viewAllLink="/shop?filter=bestseller"
      />
      <PromoSection />
      <FeaturedProducts
        title="Sale"
        subtitle="Limited time offers on select items"
        products={saleProducts}
        viewAllLink="/shop?filter=sale"
      />
    </Layout>
  );
};

export default Index;
