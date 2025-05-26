import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react"; // Icon for "On Track" status

export default function TaskProgressCard() {
  const progressValue = 75;

  return (
    <Card className="w-full max-w-sm bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-lg font-semibold" style={{ color: 'var(--primary)'}}>
          Website Redevelopment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center mb-1">
          <p className="text-sm text-muted-foreground">Progress</p>
          <p className="text-sm font-medium" style={{ color: 'var(--primary)'}}>
            {progressValue}% Complete
          </p>
        </div>
        <Progress value={progressValue} aria-label={`${progressValue}% complete`} className="h-3 [&>div]:bg-primary" />
        <div className="flex items-center pt-1">
          <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> 
          <p className="text-xs text-muted-foreground">On Track</p>
        </div>
      </CardContent>
      {/* CardFooter can be added if needed for actions like 'View Details' */}
    </Card>
  );
}
