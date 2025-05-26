import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilePlus, Upload, Settings2 } from "lucide-react";

export default function QuickActionCard() {
  return (
    <Card className="w-full max-w-xs bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-lg text-center font-semibold" style={{ color: 'var(--primary)'}}>
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-3">
        <Button variant="outline" className="justify-start border-primary text-primary hover:bg-primary/10">
          <FilePlus className="mr-3 h-5 w-5" />
          Create New Document
        </Button>
        <Button variant="outline" className="justify-start border-primary text-primary hover:bg-primary/10">
          <Upload className="mr-3 h-5 w-5" />
          Upload File
        </Button>
        <Button variant="outline" className="justify-start border-primary text-primary hover:bg-primary/10">
          <Settings2 className="mr-3 h-5 w-5" />
          Settings
        </Button>
      </CardContent>
      {/* CardFooter could be added for less frequent actions or a "View All Actions" link */}
    </Card>
  );
}
