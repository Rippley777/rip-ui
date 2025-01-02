import React from "react";
import { twMerge } from "tailwind-merge";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export interface TooltipProps {
  text: string;
  children: React.ReactNode;
  className?: string;
  sideOffset?: number;
}

const contentClasses = `
  bg-gray-800 text-white text-sm py-1 px-2 
  rounded shadow 
  data-[state=delayed-open]:animate-fadeIn
`;

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  className,
  sideOffset = 5,
}) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <span>{children}</span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={sideOffset}
          className={twMerge(contentClasses, className)}
        >
          {text}
          <TooltipPrimitive.Arrow
            className="fill-gray-800"
            width={10}
            height={5}
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
