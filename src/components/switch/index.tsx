import React from "react";
import { twMerge } from "tailwind-merge";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const rootClasses = `
  relative inline-flex items-center
  w-12 h-6
  rounded-full
  bg-gray-300
  data-[state=checked]:bg-blue-600
  transition-colors
  cursor-pointer
  disabled:cursor-not-allowed
`;
const thumbClasses = `
  block w-5 h-5
  bg-white rounded-full
  shadow
  transition-transform
  translate-x-0
  data-[state=checked]:translate-x-6
`;

const Switch: React.FC<SwitchProps> = ({
  checked,
  onCheckedChange,
  disabled = false,
  className,
}) => {
  return (
    <SwitchPrimitive.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={twMerge(rootClasses, className)}
    >
      <SwitchPrimitive.Thumb className={thumbClasses} />
    </SwitchPrimitive.Root>
  );
};

export default Switch;
