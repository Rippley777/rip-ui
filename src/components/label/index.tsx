import React from "react";
import { twMerge } from "tailwind-merge";
import * as LabelPrimitive from "@radix-ui/react-label";

export interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

const baseClasses = "block text-sm font-medium text-gray-700 mb-1";

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className,
}) => {
  return (
    <LabelPrimitive.Root
      htmlFor={htmlFor}
      className={twMerge(baseClasses, className)}
    >
      {children}
    </LabelPrimitive.Root>
  );
};

export default Label;
