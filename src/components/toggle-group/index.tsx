import React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { twMerge } from "tailwind-merge";

export interface ToggleGroupProps {
  value: string[];
  options: { value: string; label: string }[];
  onChange: (value: string[]) => void;
  type?: "single" | "multiple";
  className?: string;
  optionClassName?: string;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  value,
  options,
  onChange,
  type = "multiple",
  className,
  optionClassName,
}) => {
  return type === "single" ? (
    <ToggleGroupPrimitive.Root
      type="single"
      value={value[0]}
      onValueChange={(val) => onChange([val])}
      className={twMerge("flex gap-2", className)}
    >
      {options.map((option) => (
        <ToggleGroupPrimitive.Item
          key={option.value}
          value={option.value}
          className={twMerge(
            "px-4 py-2 text-sm font-medium rounded-lg border border-gray-300",
            "data-[state=on]:bg-blue-500 data-[state=on]:text-white",
            "hover:bg-gray-100",
            optionClassName
          )}
        >
          {option.label}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  ) : (
    <ToggleGroupPrimitive.Root
      type="multiple"
      value={value}
      onValueChange={onChange}
      className={twMerge("flex gap-2", className)}
    >
      {options.map((option) => (
        <ToggleGroupPrimitive.Item
          key={option.value}
          value={option.value}
          className={twMerge(
            "px-4 py-2 text-sm font-medium rounded-lg border border-gray-300",
            "data-[state=on]:bg-blue-500 data-[state=on]:text-white",
            "hover:bg-gray-100",
            optionClassName
          )}
        >
          {option.label}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
};
