import React from "react";
import { twMerge } from "tailwind-merge";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
}

const rootClasses = "relative w-full h-64 overflow-hidden";
const viewportClasses = "w-full h-full rounded";
const scrollbarClasses =
  "flex select-none touch-none p-0.5 bg-gray-200 transition-colors";
const thumbClasses = "flex-1 bg-gray-400 rounded-full";

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  className,
}) => {
  return (
    <ScrollAreaPrimitive.Root className={twMerge(rootClasses, className)}>
      <ScrollAreaPrimitive.Viewport className={viewportClasses}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className={scrollbarClasses}
      >
        <ScrollAreaPrimitive.Thumb className={thumbClasses} />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};

export default ScrollArea;
