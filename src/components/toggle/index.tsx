import React from "react";
import { twMerge } from "tailwind-merge";
import * as TogglePrimitive from "@radix-ui/react-toggle";

export interface ToggleProps {
  children: React.ReactNode;
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const baseClasses = `
  inline-flex items-center justify-center
  px-3 py-1
  rounded
  focus:outline-none
  focus:ring-2 focus:ring-blue-400
  select-none
  transition-colors
  data-[state=on]:bg-blue-600 data-[state=on]:text-white
  bg-gray-200 text-gray-700
  disabled:cursor-not-allowed
`;

export const Toggle: React.FC<ToggleProps> = ({
  pressed,
  onPressedChange,
  disabled = false,
  className,
  children,
}) => {
  return (
    <TogglePrimitive.Root
      pressed={pressed}
      onPressedChange={onPressedChange}
      disabled={disabled}
      className={twMerge(baseClasses, className)}
    >
      {children}
    </TogglePrimitive.Root>
  );
};

export default Toggle;
