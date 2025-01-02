import React from "react";
import { twMerge } from "tailwind-merge";
import * as ProgressPrimitive from "@radix-ui/react-progress";

export interface ProgressProps {
  value: number;
  indeterminate?: boolean;
  className?: string;
}

const baseClasses = "relative h-4 w-full bg-gray-200 rounded overflow-hidden";
const indicatorClasses = "h-full bg-blue-600 transition-all";

export const Progress: React.FC<ProgressProps> = ({
  value,
  indeterminate,
  className,
}) => {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <ProgressPrimitive.Root
      value={indeterminate ? null : clampedValue}
      className={twMerge(baseClasses, className)}
    >
      <ProgressPrimitive.Indicator
        style={{
          width: indeterminate ? "100%" : `${clampedValue}%`,
        }}
        className={indicatorClasses}
      />
    </ProgressPrimitive.Root>
  );
};

export default Progress;
