"use client";

import { Card } from "@/components/ui/card";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Chess Blog & Articles
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Expert insights, strategy guides, and news from the world of chess.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FeaturedPostCard
            title="Mastering the Sicilian Defense"
            excerpt="A comprehensive guide to one of the most popular chess openings, including key variations and strategies."
            author="GM John Smith"
            date="March 15, 2024"
            readTime="15 min read"
            image="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80"
          />
          <FeaturedPostCard
            title="Endgame Principles Every Player Should Know"
            excerpt="Essential endgame techniques and principles that will improve your chess game dramatically."
            author="IM Sarah Johnson"
            date="March 10, 2024"
            readTime="12 min read"
            image="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80"
          />
        </div>

        <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <BlogPostCard
              key={i}
              title="Understanding Pawn Structures"
              excerpt="Learn how pawn structures influence your game and dictate your strategic plans."
              author="FM David Brown"
              date="March 5, 2024"
              readTime="8 min read"
              category="Strategy"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function FeaturedPostCard({
  title,
  excerpt,
  author,
  date,
  readTime,
  image
}: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{author}</span>
            <div className="flex items-center mt-1">
              <CalendarDays className="h-4 w-4 mr-1" />
              {date}
              <Clock className="h-4 w-4 ml-4 mr-1" />
              {readTime}
            </div>
          </div>
          <Link href="#" className="text-primary hover:underline">
            Read More <ChevronRight className="inline-block h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

function BlogPostCard({
  title,
  excerpt,
  author,
  date,
  readTime,
  category
}: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}) {
  return (
    <Card className="p-6">
      <div className="text-sm text-primary mb-3">{category}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{excerpt}</p>
      <div className="text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{author}</span>
        <div className="flex items-center mt-1">
          <CalendarDays className="h-4 w-4 mr-1" />
          {date}
          <Clock className="h-4 w-4 ml-4 mr-1" />
          {readTime}
        </div>
      </div>
    </Card>
  );
}