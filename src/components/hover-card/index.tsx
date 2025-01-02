import React from "react";
import { twMerge } from "tailwind-merge";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

export interface HoverCardProps {
  content: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
  sideOffset?: number;
  defaultOpen?: boolean;
}
export const HoverCard: React.FC<HoverCardProps> = ({
  trigger,
  content,
  className,
  sideOffset = 8,
  defaultOpen = false,
}) => {
  const contentClasses = `
    bg-white
    rounded-md
    p-3
    shadow-lg
    border border-gray-200
    text-gray-800
    w-64
    z-20
  `;

  return (
    <HoverCardPrimitive.Root defaultOpen={defaultOpen}>
      <HoverCardPrimitive.Trigger asChild>
        <div className="inline-flex items-center cursor-pointer">{trigger}</div>
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          sideOffset={sideOffset}
          className={twMerge(contentClasses, className)}
        >
          {content}
          <HoverCardPrimitive.Arrow
            className="fill-white"
            width={11}
            height={5}
          />
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  );
};

export default HoverCard;
