import React from "react";
import { twMerge } from "tailwind-merge";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

export interface AspectRatioProps {
  /**
   * The desired aspect ratio (width / height).
   * For a 16:9 ratio, pass 16/9 (≈1.7777).
   */
  ratio: number;

  /**
   * Content of the aspect ratio container.
   * Often an <img />, <video />, or <iframe />.
   */
  children: React.ReactNode;
  className?: string;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio,
  children,
  className,
}) => {
  const rootBaseClasses = `
    relative
    w-full
    overflow-hidden
  `;

  return (
    <AspectRatioPrimitive.Root
      ratio={ratio}
      className={twMerge(rootBaseClasses, className)}
    >
      {children}
    </AspectRatioPrimitive.Root>
  );
};

export default AspectRatio;
