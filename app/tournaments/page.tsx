"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Calendar, Users, Clock } from "lucide-react";

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Chess Tournaments
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Compete in our prestigious tournaments and test your skills against players from around the world.
          </p>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Upcoming Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TournamentCard
            title="Spring Championship 2024"
            date="April 15-20, 2024"
            format="Swiss System"
            players="128 players"
            prize="₹5,000"
            entry="₹50"
            status="Registration Open"
          />
          <TournamentCard
            title="Junior Masters Cup"
            date="May 1-3, 2024"
            format="Round Robin"
            players="64 players"
            prize="₹2,000"
            entry="₹30"
            status="Registration Open"
          />
          <TournamentCard
            title="Grandmaster Invitational"
            date="June 10-15, 2024"
            format="Double Round Robin"
            players="10 players"
            prize="₹10,000"
            entry="Invitation Only"
            status="Coming Soon"
          />
          <TournamentCard
            title="Blitz Championship"
            date="July 5, 2024"
            format="Swiss System"
            players="256 players"
            prize="₹3,000"
            entry="₹40"
            status="Coming Soon"
          />
        </div>
      </section>

      {/* Tournament Rules */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tournament Rules & Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RuleCard
              icon={<Clock className="h-8 w-8" />}
              title="Time Controls"
              description="Standard: 90min + 30sec increment
                          Rapid: 15min + 10sec increment
                          Blitz: 3min + 2sec increment"
            />
            <RuleCard
              icon={<Users className="h-8 w-8" />}
              title="Rating Categories"
              description="Under 1200
                          1200-1600
                          1600-2000
                          Over 2000"
            />
            <RuleCard
              icon={<Calendar className="h-8 w-8" />}
              title="Schedule"
              description="Registration closes 24h before start
                          Players meeting: 30min before first round
                          Award ceremony: After last round"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function TournamentCard({
  title,
  date,
  format,
  players,
  prize,
  entry,
  status
}: {
  title: string;
  date: string;
  format: string;
  players: string;
  prize: string;
  entry: string;
  status: string;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <Trophy className="h-8 w-8 text-primary" />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{date}</p>
        </div>
      </div>
      <div className="space-y-2 mb-6">
        <div className="text-sm"><span className="font-semibold">Format:</span> {format}</div>
        <div className="text-sm"><span className="font-semibold">Size:</span> {players}</div>
        <div className="text-sm"><span className="font-semibold">Prize Pool:</span> {prize}</div>
        <div className="text-sm"><span className="font-semibold">Entry Fee:</span> {entry}</div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-primary">{status}</span>
        <Button>Register Now</Button>
      </div>
    </Card>
  );
}

function RuleCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6">
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-muted-foreground whitespace-pre-line text-center">{description}</p>
    </Card>
  );
}