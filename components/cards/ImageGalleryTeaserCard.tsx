import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  // No CardHeader needed if title is part of content overlay or below image
} from "@/components/ui/card";
import { ImageIcon, Eye } from "lucide-react"; // Icons

export default function ImageGalleryTeaserCard() {
  return (
    <Card className="w-full max-w-sm overflow-hidden bg-card text-card-foreground group">
      <div className="relative aspect-[16/10] bg-muted flex items-center justify-center">
        {/* Placeholder for Primary Image */}
        <ImageIcon className="w-1/3 h-1/3 text-muted-foreground group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-lg font-semibold text-white">
            Summer Collection Highlights
          </h3>
          <p className="text-sm text-gray-300">24 Photos</p>
        </div>
      </div>
      <CardFooter className="pt-4">
        <Button
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary/10"
        >
          <Eye className="mr-2 h-4 w-4" />
          View Gallery
        </Button>
      </CardFooter>
    </Card>
  );
}
