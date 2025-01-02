import React from "react";
import { twMerge } from "tailwind-merge";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons"; // or the appropriate library

export interface CheckboxProps {
  label: string;
  checkboxClassName?: string;
  indicatorClassName?: string;
  fill?: boolean;
  defaultChecked?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checkboxClassName,
  indicatorClassName,
  defaultChecked,
  fill = false,
}) => {
  const [checked, setChecked] = React.useState(defaultChecked ?? false);
  const checkboxClasses = twMerge(
    "flex items-center justify-center w-4 h-4 p-2 rounded-none",
    checked && fill ? "bg-red-500 text-white" : "text-red-500",
    checkboxClassName
  );
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <RadixCheckbox.Root
        checked={checked}
        onCheckedChange={() => setChecked((prev) => !prev)}
        className={twMerge(checkboxClasses)}
      >
        <RadixCheckbox.Indicator
          className={twMerge("text-red-500 w-4 h-4", indicatorClassName)}
        >
          {fill ? null : <CheckIcon />}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
