import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductShowcaseCard() {
  return (
    <Card className="w-full max-w-sm overflow-hidden bg-card text-card-foreground">
      <div className="aspect-video bg-muted flex items-center justify-center">
        {/* Placeholder for Product Image */}
        <svg
          className="w-1/2 h-1/2 text-muted-foreground"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold" style={{ color: 'var(--primary)'}}>Nova Smartwatch</CardTitle>
          <Badge variant="outline" className="border-primary text-primary">Wearables</Badge>
        </div>
        <CardDescription className="text-sm text-muted-foreground pt-1">
          Stay connected and track your fitness goals with style.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-foreground">$199</p>
      </CardContent>
      <CardFooter className="pt-4">
        <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
