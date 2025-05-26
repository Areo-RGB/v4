"use client"; // For client-side interactivity like useState

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const pollOptions = [
  { id: "option1", label: "AI Assistant" },
  { id: "option2", label: "Dashboard Redesign" },
  { id: "option3", label: "Mobile App" },
];

export default function InteractivePollCard() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSubmitVote = () => {
    // In a real app, you would handle the vote submission here
    console.log("Vote submitted for:", selectedOption);
    alert(`You voted for: ${selectedOption ? pollOptions.find(opt => opt.id === selectedOption)?.label : 'None'}`);
  };

  return (
    <Card className="w-full max-w-md bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-xl text-center" style={{ color: 'var(--primary)'}}>
          What's your favorite new feature?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 justify-center">
          {pollOptions.map((option) => (
            <Button
              key={option.id}
              variant={selectedOption === option.id ? "default" : "outline"}
              onClick={() => setSelectedOption(option.id)}
              className={`w-full sm:w-auto flex-grow 
                          ${selectedOption === option.id 
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                            : 'border-primary text-primary hover:bg-primary/10'}`}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pt-4">
        <Button
          onClick={handleSubmitVote}
          disabled={!selectedOption}
          className="bg-accent text-accent-foreground hover:bg-accent/90 disabled:bg-muted disabled:text-muted-foreground"
        >
          Submit Vote
        </Button>
      </CardFooter>
    </Card>
  );
}
