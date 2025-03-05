"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Award, BookOpen, Trophy, Users, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Master the Game of Kings
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our elite neurons knight and learn from grandmasters. Whether you're a beginner or an advanced player, we have the perfect program for you.
          </p>
          <Button size="lg" asChild>
            <Link href="/courses">
              Start Learning <ChevronRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Academy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Trophy className="h-8 w-8" />}
            title="Expert Coaches"
            description="Learn from international grandmasters and experienced chess coaches"
          />
          <FeatureCard
            icon={<BookOpen className="h-8 w-8" />}
            title="Structured Learning"
            description="Follow our proven curriculum designed for all skill levels"
          />
          <FeatureCard
            icon={<Award className="h-8 w-8" />}
            title="Certification"
            description="Earn internationally recognized chess certifications"
          />
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProgramCard
              title="Beginner's Course"
              description="Master the basics of chess"
              price="₹99"
              href="/courses/beginners"
            />
            <ProgramCard
              title="Intermediate Training"
              description="Advanced tactics and strategies"
              price="₹149"
              href="/courses/intermediate"
            />
            <ProgramCard
              title="Advanced Program"
              description="Complex positions and endgames"
              price="₹199"
              href="/courses/advanced"
            />
            <ProgramCard
              title="Grandmaster Training"
              description="Elite coaching sessions"
              price="₹299"
              href="/courses/grandmaster"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <QuickLink
            icon={<Trophy className="h-6 w-6" />}
            title="Tournaments"
            description="Join our weekly tournaments"
            href="/tournaments"
          />
          <QuickLink
            icon={<Users className="h-6 w-6" />}
            title="Community"
            description="Connect with fellow players"
            href="/community"
          />
          <QuickLink
            icon={<ShoppingBag className="h-6 w-6" />}
            title="Shop"
            description="Chess equipment & merchandise"
            href="/shop"
          />
          <QuickLink
            icon={<BookOpen className="h-6 w-6" />}
            title="Blog"
            description="Chess tips and articles"
            href="/blog"
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 text-center">
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

function ProgramCard({ title, description, price, href }: { title: string; description: string; price: string; href: string }) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">{price}</span>
        <Button asChild>
          <Link href={href}>Learn More</Link>
        </Button>
      </div>
    </Card>
  );
}

function QuickLink({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <Link href={href}>
      <Card className="p-6 hover:bg-muted transition-colors">
        <div className="flex items-center gap-4">
          <div className="text-primary">{icon}</div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}