"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ImageGallery from "@/components/product/ImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <Breadcrumb
        items={[
          { label: "Shop", href: "/shop" },
          { label: product.subcategory, href: `/shop?category=${product.category}` },
          { label: product.name },
        ]}
      />

      {/* Product Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
        <div className="lg:col-span-7">
          <ImageGallery images={product.images} productName={product.name} />
        </div>
        <div className="lg:col-span-5">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Tabs */}
      <ProductTabs product={product} />

      {/* Related Products */}
      <RelatedProducts products={related} />
    </div>
  );
}
