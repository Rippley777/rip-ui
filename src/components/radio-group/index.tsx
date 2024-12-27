import React from "react";
import { twMerge } from "tailwind-merge";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

const rootClasses = "flex flex-col gap-2";
const itemWrapperClasses = "inline-flex items-center gap-2 cursor-pointer";
const radioClasses = `
  w-4 h-4 rounded-full 
  border border-gray-400 bg-white 
  focus:outline-none focus:ring-2 focus:ring-blue-400
`;
const indicatorClasses = "block w-full h-full bg-blue-500 rounded-full";

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <RadioGroupPrimitive.Root
      className={twMerge(rootClasses, className)}
      value={value}
      onValueChange={onChange}
    >
      {options.map((opt) => (
        <div key={opt.value} className={itemWrapperClasses}>
          <RadioGroupPrimitive.Item value={opt.value} className={radioClasses}>
            <RadioGroupPrimitive.Indicator className={indicatorClasses} />
          </RadioGroupPrimitive.Item>
          <label>{opt.label}</label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default RadioGroup;
