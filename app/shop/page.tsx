"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Chess Equipment & Merchandise
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            High-quality chess sets, books, and accessories for players of all levels.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <CategoryCard
            title="Chess Sets"
            description="Tournament-standard chess sets and boards"
            image="https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=400"
          />
          <CategoryCard
            title="Books"
            description="Strategy guides and game collections"
            image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400"
          />
          <CategoryCard
            title="Digital"
            description="Chess clocks and electronic equipment"
            image="https://images.unsplash.com/photo-1623941000513-42d3956d995a?auto=format&fit=crop&q=80&w=400"
          />
        </div>

        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            name="Tournament Chess Set"
            price={79.99}
            rating={5}
            image="https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=400"
          />
          <ProductCard
            name="Digital Chess Clock"
            price={34.99}
            rating={4}
            image="https://images.unsplash.com/photo-1623941000513-42d3956d995a?auto=format&fit=crop&q=80&w=400"
          />
          <ProductCard
            name="Wooden Chess Board"
            price={129.99}
            rating={5}
            image="https://images.unsplash.com/photo-1612993179035-1b2f787b6594?auto=format&fit=crop&q=80&w=400"
          />
          <ProductCard
            name="Strategy Guide Book"
            price={24.99}
            rating={4}
            image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400"
          />
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <Card className="relative overflow-hidden group cursor-pointer">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </Card>
  );
}

function ProductCard({ name, price, rating, image }: { name: string; price: number; rating: number; image: string }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{name}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-lg font-bold">${price}</span>
        </div>
        <Button className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </div>
    </Card>
  );
}