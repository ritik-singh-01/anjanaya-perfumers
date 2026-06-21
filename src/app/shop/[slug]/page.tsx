import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ImageGallery from "@/components/product/ImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";

// Pre-render every product page at build time (required for static export).
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  const description = product.shortDescription || product.description.slice(0, 155);
  return {
    title: product.name,
    description,
    openGraph: {
      title: `${product.name} | Shri Anjaneya`,
      description,
      images: product.images?.[0] ? [encodeURI(product.images[0])] : undefined,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 4);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images?.map((src) => "https://shrianjaneya.netlify.app" + encodeURI(src)),
    description: product.shortDescription || product.description,
    sku: product.id,
    brand: { "@type": "Brand", name: "Shri Anjaneya" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: "https://shrianjaneya.netlify.app/shop/" + product.slug,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Breadcrumb
        items={[
          { label: "Shop", href: "/shop" },
          { label: product.subcategory, href: `/shop?category=${product.category}` },
          { label: product.name },
        ]}
      />

      {/* Product Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20 lg:items-start">
        <div className="lg:col-span-7">
          <ImageGallery images={product.images} productName={product.name} />
        </div>
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
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
