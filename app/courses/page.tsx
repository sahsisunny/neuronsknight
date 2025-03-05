"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, BookOpen, Trophy, Users, Star } from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Chess Courses & Training
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            From beginners to advanced players, our structured courses will help you master the game of chess.
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CourseCard
            title="Beginner's Course"
            description="Master the fundamentals of chess, piece movements, and basic strategies."
            icon={<BookOpen className="h-8 w-8" />}
            price="₹99"
            duration="4 weeks"
            level="Beginner"
            href="/courses/beginners"
          />
          <CourseCard
            title="Intermediate Training"
            description="Learn advanced tactics, positional play, and opening principles."
            icon={<Trophy className="h-8 w-8" />}
            price="₹149"
            duration="6 weeks"
            level="Intermediate"
            href="/courses/intermediate"
          />
          <CourseCard
            title="Advanced Program"
            description="Deep dive into complex strategies, endgame techniques, and tournament preparation."
            icon={<Users className="h-8 w-8" />}
            price="₹199"
            duration="8 weeks"
            level="Advanced"
            href="/courses/advanced"
          />
          <CourseCard
            title="Grandmaster Training"
            description="One-on-one training with grandmasters and professional analysis."
            icon={<Star className="h-8 w-8" />}
            price="₹299"
            duration="12 weeks"
            level="Expert"
            href="/courses/grandmaster"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Video Lessons"
              description="HD video lessons with detailed explanations and examples"
            />
            <FeatureCard
              title="Practice Exercises"
              description="Interactive puzzles and exercises to test your knowledge"
            />
            <FeatureCard
              title="Live Sessions"
              description="Weekly live sessions with chess instructors"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function CourseCard({ 
  title, 
  description, 
  icon, 
  price, 
  duration, 
  level, 
  href 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  price: string; 
  duration: string; 
  level: string; 
  href: string; 
}) {
  return (
    <Card className="p-6">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="space-y-2 mb-6">
        <div className="text-sm"><span className="font-semibold">Duration:</span> {duration}</div>
        <div className="text-sm"><span className="font-semibold">Level:</span> {level}</div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">{price}</span>
        <Button asChild>
          <Link href={href}>
            Enroll Now <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="p-6 text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}