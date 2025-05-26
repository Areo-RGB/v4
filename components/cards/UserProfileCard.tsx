import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UserProfileCard() {
  return (
    <Card className="w-full max-w-sm bg-card text-card-foreground">
      <CardHeader className="items-center text-center">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="Elena Rodriguez" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl">Elena Rodriguez</CardTitle>
        <CardDescription className="text-base" style={{ color: 'var(--primary)' }}>Lead Designer</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm text-muted-foreground">
          Passionate about creating intuitive and beautiful user experiences.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
