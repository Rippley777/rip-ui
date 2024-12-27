import React from "react";
import { twMerge } from "tailwind-merge";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export interface DropdownMenuProps {
  triggerLabel: string;
  items: {
    id: string;
    label: string;
    onSelect?: () => void;
    disabled?: boolean;
  }[];
  className?: string;
}

const triggerClasses = `
  inline-flex items-center
  px-4 py-2
  bg-blue-600
  text-white
  rounded
  hover:bg-blue-700
  focus:outline-none focus:ring-2 focus:ring-blue-400
`;

const triggerIconClasses = `
  ml-1
  transition-transform
  group-radix-state-open:rotate-180
  text-white
`;

const contentClasses = `
  min-w-[10rem]
  bg-white
  shadow-md
  rounded
  border border-gray-200
  py-1
  radix-side-top:animate-slide-down
  radix-side-bottom:animate-slide-up
`;

const itemBaseClasses = `
  relative
  flex items-center
  px-3 py-2
  text-sm text-gray-700
  hover:bg-gray-100
  focus:bg-gray-100
  cursor-pointer
  outline-none
  select-none
`;

const itemDisabledClasses = `
  text-gray-400
  cursor-not-allowed
  hover:bg-transparent
  focus:bg-transparent
`;

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  triggerLabel,
  items,
  className,
}) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button className={twMerge(triggerClasses, "group")}>
          {triggerLabel}
          <ChevronDownIcon className={twMerge(triggerIconClasses)} />
        </button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          sideOffset={4}
          className={twMerge(contentClasses, className)}
        >
          {items.map((item) => (
            <DropdownMenuPrimitive.Item
              key={item.id}
              onSelect={item.disabled ? undefined : item.onSelect}
              disabled={item.disabled}
              className={twMerge(
                itemBaseClasses,
                item.disabled && itemDisabledClasses
              )}
            >
              {item.label}
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

export default DropdownMenu;
