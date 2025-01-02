import React from "react";
import { twMerge } from "tailwind-merge";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

export interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  className,
}) => {
  return (
    <SeparatorPrimitive.Root
      orientation={orientation}
      className={twMerge(
        orientation === "horizontal" ? "w-full h-px" : "h-full w-px",
        "bg-gray-300",
        className
      )}
    />
  );
};

export default Separator;
