"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Trophy, ChevronRight, RotateCcw } from "lucide-react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    id: 1,
    question: "What is the most powerful piece in chess?",
    options: ["King", "Queen", "Rook", "Bishop"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "How many squares are there on a standard chess board?",
    options: ["32", "48", "64", "81"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Which piece can only move diagonally?",
    options: ["Rook", "Knight", "Bishop", "Pawn"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "What is the special move called when a pawn reaches the opposite end of the board?",
    options: ["Castling", "En passant", "Promotion", "Check"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "Which piece moves in an L-shape?",
    options: ["Bishop", "Knight", "Rook", "Queen"],
    correctAnswer: 1,
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Chess Quiz
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Test your chess knowledge with our interactive quiz
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {!showResults ? (
            <Card className="p-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium">
                    Score: {score}/{questions.length}
                  </span>
                </div>
                <Progress
                  value={((currentQuestion + 1) / questions.length) * 100}
                  className="h-2"
                />
              </div>

              <h2 className="text-xl font-semibold mb-6">
                {questions[currentQuestion].question}
              </h2>

              <RadioGroup
                value={selectedAnswer?.toString()}
                onValueChange={(value) => setSelectedAnswer(parseInt(value))}
                className="space-y-4 mb-6"
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>

              <Button
                className="w-full"
                onClick={handleAnswer}
                disabled={selectedAnswer === null}
              >
                {currentQuestion === questions.length - 1 ? (
                  "Finish Quiz"
                ) : (
                  <>
                    Next Question <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </Card>
          ) : (
            <Card className="p-6 text-center">
              <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
              <p className="text-xl mb-4">
                Your Score: {score}/{questions.length} (
                {Math.round((score / questions.length) * 100)}%)
              </p>
              <Button onClick={resetQuiz} className="w-full">
                <RotateCcw className="mr-2 h-4 w-4" /> Try Again
              </Button>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}