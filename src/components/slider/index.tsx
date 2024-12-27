import React from "react";
import { twMerge } from "tailwind-merge";
import * as SliderPrimitive from "@radix-ui/react-slider";

export interface SliderProps {
  value: number[];
  onValueChange: (val: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const rootClasses = "relative flex items-center select-none touch-none w-64";
const trackClasses = "bg-gray-200 relative flex-grow h-1 rounded";
const rangeClasses = "absolute bg-blue-600 h-full rounded";
const thumbClasses = `
  block w-4 h-4 bg-white border border-gray-300 
  rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400
`;

const Slider: React.FC<SliderProps> = ({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className,
}) => {
  return (
    <SliderPrimitive.Root
      className={twMerge(rootClasses, className)}
      value={value}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
    >
      <SliderPrimitive.Track className={trackClasses}>
        <SliderPrimitive.Range className={rangeClasses} />
      </SliderPrimitive.Track>
      {value.map((_, i) => (
        <SliderPrimitive.Thumb key={i} className={thumbClasses} />
      ))}
    </SliderPrimitive.Root>
  );
};

export default Slider;
