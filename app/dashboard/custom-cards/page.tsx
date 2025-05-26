import UserProfileCard from "@/components/cards/UserProfileCard";
import ProductShowcaseCard from "@/components/cards/ProductShowcaseCard";
import DataMetricCard from "@/components/cards/DataMetricCard";
import NotificationAlertCard from "@/components/cards/NotificationAlertCard";
import ImageGalleryTeaserCard from "@/components/cards/ImageGalleryTeaserCard";
import InteractivePollCard from "@/components/cards/InteractivePollCard";
import UpcomingEventCard from "@/components/cards/UpcomingEventCard";
import TaskProgressCard from "@/components/cards/TaskProgressCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import QuickActionCard from "@/components/cards/QuickActionCard";

export default function CustomCardsPage() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ color: 'var(--primary)'}}>
          Custom Card Components Showcase
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A collection of custom-built card components demonstrating various UI patterns and styles.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Row 1 */}
        <div className="flex justify-center">
          <UserProfileCard />
        </div>
        <div className="flex justify-center">
          <ProductShowcaseCard />
        </div>
        <div className="flex justify-center">
          <DataMetricCard />
        </div>
        <div className="flex justify-center">
          <NotificationAlertCard />
        </div>
        
        {/* Row 2 */}
        <div className="flex justify-center">
          <ImageGalleryTeaserCard />
        </div>
        <div className="flex justify-center">
          <InteractivePollCard />
        </div>
        <div className="flex justify-center">
          <UpcomingEventCard />
        </div>
        <div className="flex justify-center">
          <TaskProgressCard />
        </div>

        {/* Row 3 - Centered if only two items, or add more cards */}
        <div className="flex justify-center lg:col-start-2 xl:col-start-auto">
          <TestimonialCard />
        </div>
        <div className="flex justify-center">
          <QuickActionCard />
        </div>
      </div>
    </div>
  );
}
