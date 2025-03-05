"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Get in touch with our team for any questions or support
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ContactCard
              icon={<Mail className="h-6 w-6" />}
              title="Email"
              content="support@chessacademy.com"
              link="mailto:support@chessacademy.com"
            />
            <ContactCard
              icon={<Phone className="h-6 w-6" />}
              title="Phone"
              content="+1 (555) 123-4567"
              link="tel:+15551234567"
            />
            <ContactCard
              icon={<MapPin className="h-6 w-6" />}
              title="Address"
              content="123 Chess Street, NY 10001"
              link="https://maps.google.com"
            />
          </div>

          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Message subject" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button size="lg">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  content,
  link
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
}) {
  return (
    <Card className="p-6 text-center">
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <a
        href={link}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        {content}
      </a>
    </Card>
  );
}