"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Knight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex items-center justify-center mb-8">
          {/* <ChessKnight className="h-8 w-8 mr-2" /> */}
          <h1 className="text-2xl font-bold">Welcome Back</h1>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <Link href="/forgot-password" className="text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button className="w-full" size="lg">
            Sign In
          </Button>
        </form>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          Dont have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
}