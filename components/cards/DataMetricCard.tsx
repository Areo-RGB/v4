import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react"; // Assuming lucide-react is available

export default function DataMetricCard() {
  const percentageChangeColor = "var(--primary)"; // Using primary blue for positive change

  return (
    <Card className="w-full max-w-xs bg-card text-card-foreground">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Monthly Active Users
        </CardTitle>
        <Users className="h-5 w-5" style={{ color: 'var(--primary)'}} />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">12,500</div>
        <p 
          className="text-xs mt-1"
          style={{ color: percentageChangeColor }}
        >
          +15.2% from last month
        </p>
      </CardContent>
      {/* CardFooter can be added if needed for actions or more details */}
    </Card>
  );
}
