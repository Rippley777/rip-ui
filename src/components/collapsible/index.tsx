import React from "react";
import { twMerge } from "tailwind-merge";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export interface CollapsibleProps {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const triggerBaseClasses = `
  group
  flex items-center justify-between
  w-full
  p-3
  bg-white
  border
  border-gray-200
  rounded
  hover:bg-gray-50
  cursor-pointer
  transition-colors
`;

const contentBaseClasses = `
  overflow-hidden
  bg-gray-50
  rounded
  border
  border-t-0
  border-gray-200
  px-3 py-2
`;

const chevronBaseClasses = `
  text-gray-400
  group-hover:text-gray-600
  transition-transform
  [data-state=open]:rotate-180
`;

export const Collapsible: React.FC<CollapsibleProps> = ({
  label,
  children,
  defaultOpen = false,
  className,
}) => {
  return (
    <CollapsiblePrimitive.Root
      defaultOpen={defaultOpen}
      className={twMerge("w-full", className)}
    >
      <CollapsiblePrimitive.Trigger className={twMerge(triggerBaseClasses)}>
        <span>{label}</span>
        <ChevronDownIcon className={twMerge(chevronBaseClasses)} />
      </CollapsiblePrimitive.Trigger>

      <CollapsiblePrimitive.Content className={twMerge(contentBaseClasses)}>
        {children}
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  );
};

export default Collapsible;
