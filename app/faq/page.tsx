"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Find answers to common questions about our neurons knight
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I enroll in a course?</AccordionTrigger>
              <AccordionContent>
                To enroll in a course, simply browse our available courses, select
                the one you're interested in, and click the "Enroll Now" button.
                You'll need to create an account or log in if you haven't already,
                then complete the payment process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                What skill level do I need to start?
              </AccordionTrigger>
              <AccordionContent>
                We offer courses for all skill levels, from complete beginners to
                advanced players. Each course clearly indicates the recommended
                skill level, and our beginner courses assume no prior knowledge of
                chess.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How do tournament registrations work?
              </AccordionTrigger>
              <AccordionContent>
                Tournament registration can be completed through our website.
                Navigate to the Tournaments page, select the tournament you're
                interested in, and click "Register Now". You'll need to provide
                your rating information and pay the entry fee to complete
                registration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Are the courses self-paced?</AccordionTrigger>
              <AccordionContent>
                Yes, most of our courses are self-paced, allowing you to learn at
                your own speed. However, some advanced courses and special programs
                may have scheduled live sessions or specific timeframes for
                completion.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards (Visa, MasterCard, American
                Express), PayPal, and bank transfers. All payments are processed
                securely through our payment gateway.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Can I get a refund if I'm not satisfied?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 30-day money-back guarantee for all our courses. If
                you're not satisfied with the course content, you can request a
                full refund within 30 days of purchase.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}