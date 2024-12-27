import React from "react";
import { twMerge } from "tailwind-merge";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export interface PopoverProps {
  triggerLabel: string;
  children: React.ReactNode;
  sideOffset?: number;
  className?: string;
}

const overlayClasses = `
  fixed inset-0
  bg-black/30
  data-[state=open]:animate-fadeIn
  data-[state=closed]:animate-fadeOut
`;

const contentClasses = `
  rounded-md
  bg-white
  shadow-lg
  border border-gray-200
  p-4
  data-[state=open]:animate-scaleIn
  data-[state=closed]:animate-scaleOut
`;

const Popover: React.FC<PopoverProps> = ({
  triggerLabel,
  children,
  sideOffset = 5,
  className,
}) => {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          {triggerLabel}
        </button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        {/* <PopoverPrimitive.Overlay className={overlayClasses} /> */}
        <PopoverPrimitive.Content
          sideOffset={sideOffset}
          className={twMerge(contentClasses, className)}
        >
          {children}
          <PopoverPrimitive.Arrow
            className="fill-white"
            width={12}
            height={6}
          />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
};

export default Popover;
