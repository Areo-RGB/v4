import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  // CardHeader, // Optional, depending on design
  // CardFooter, // Optional
} from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function TestimonialCard() {
  return (
    <Card className="w-full max-w-md bg-card text-card-foreground p-6">
      <CardContent className="relative">
        <Quote
          className="absolute -top-3 -left-3 h-10 w-10 transform -translate-x-1/4 -translate-y-1/4"
          style={{ color: 'var(--primary)' }}
          aria-hidden="true"
        />
        <blockquote className="text-base italic text-foreground leading-relaxed pl-4">
          "This platform has revolutionized how we manage our projects! The intuitive interface and powerful features are game-changers, allowing our team to collaborate more effectively and deliver results faster."
        </blockquote>
      </CardContent>
      <div className="flex items-center justify-end mt-4 pr-4">
        <div className="text-right">
          <p className="text-sm font-semibold text-primary">Jane M. Doe</p>
          <p className="text-xs text-muted-foreground">CEO, Innovatech Solutions</p>
        </div>
        <Avatar className="w-12 h-12 ml-4 border-2 border-primary/50">
          <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane M. Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </Card>
  );
}
