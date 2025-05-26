import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react"; // Added MapPin for location

export default function UpcomingEventCard() {
  return (
    <Card className="w-full max-w-md bg-card text-card-foreground">
      <CardHeader>
        <div className="flex items-start space-x-3">
          <CalendarDays className="h-8 w-8 mt-1" style={{ color: 'var(--primary)' }} />
          <div>
            <CardTitle className="text-xl font-semibold" style={{ color: 'var(--primary)' }}>
              Annual Tech Summit 2024
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground pt-1">
              October 25-27, 9:00 AM - 5:00 PM
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-foreground">Virtual Event</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Join us for the latest in tech innovation, insightful sessions, and global networking opportunities. Don't miss out!
        </p>
      </CardContent>
      <CardFooter className="pt-4">
        <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Register Now
        </Button>
      </CardFooter>
    </Card>
  );
}
