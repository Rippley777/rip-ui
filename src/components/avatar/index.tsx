import React from "react";
import { twMerge } from "tailwind-merge";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const baseClasses = `
  inline-flex items-center justify-center
  rounded-full
  overflow-hidden
  bg-gray-100
  text-gray-700
  select-none
`;

const sizeClassesMap: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "w-8 h-8 text-sm",
  md: "w-12 h-12 text-base",
  lg: "w-16 h-16 text-xl",
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  fallback = "?",
  size = "md",
  className,
}) => {
  const finalClasses = twMerge(baseClasses, sizeClassesMap[size], className);

  return (
    <AvatarPrimitive.Root className={finalClasses}>
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
      />
      <AvatarPrimitive.Fallback
        className="flex items-center justify-center w-full h-full"
        delayMs={600}
      >
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

export default Avatar;
