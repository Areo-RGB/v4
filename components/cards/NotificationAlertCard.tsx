import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react"; // Icon for alert

export default function NotificationAlertCard() {
  return (
    <Card className="w-full max-w-md border-primary bg-card text-card-foreground">
      <CardHeader className="flex flex-row items-start space-x-3">
        <AlertTriangle className="h-6 w-6 mt-1" style={{ color: 'var(--primary)' }} />
        <div>
          <CardTitle className="text-lg font-semibold" style={{ color: 'var(--primary)' }}>
            System Update Required
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground pt-1">
            A critical system update is scheduled for tomorrow at 2 AM. Please save your work.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {/* Additional content can go here if needed */}
      </CardContent>
      <CardFooter className="flex justify-end space-x-3 pt-4">
        <Button variant="ghost" className="text-muted-foreground hover:bg-muted/50">
          Dismiss
        </Button>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
