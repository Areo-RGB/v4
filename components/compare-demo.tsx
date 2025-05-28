"use client";

import React, { useState } from "react";
import { Compare } from "@/components/ui/compare";
import { Button } from "@/registry/new-york-v4/ui/button";
import Video from "next-video";

// Get URLs from the generated JSON files
const finleyVideoUrl = "https://stream.mux.com/ybQnpK2eG7xaakzhbnhEWLHEnVXJ01tJ800KXizV5y602Q.m3u8";
const bentVideoUrl = "https://stream.mux.com/ARm5CXrPdaM7DlVNrfb5AVcrJlGFwNb43S4QmLovLtw.m3u8";

export default function CompareDemo() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
      <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 w-full">
        <Compare
          isVideo={true}
          firstVideo={bentVideoUrl}
          secondVideo={djiVideoUrl}
          firstImageClassName="object-cover"
          secondImageClassname="object-cover"
          className="w-full aspect-video lg:aspect-[16/9] lg:max-h-[70vh]"
          slideMode="drag"
          videoMuted={isMuted}
          videoControls={true}
          videoAutoplay={true}
        />
      </div>
      <div className="flex justify-center">
        <Button 
          variant={isMuted ? "outline" : "default"} 
          onClick={() => setIsMuted(!isMuted)}
          className="px-6"
        >
          {isMuted ? "🔇 Unmute Videos" : "🔊 Mute Videos"}
        </Button>
      </div>
      <div className="text-center text-sm text-muted-foreground pb-4">
        <p>Drag the slider to compare Bent sprint (left) and DJI footage (right)</p>
      </div>
    </div>
  );
}
