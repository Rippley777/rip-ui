import React from "react";
import { twMerge } from "tailwind-merge";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export interface DialogProps {
  triggerLabel: string;
  title?: string;
  children: React.ReactNode;
  closeLabel?: string;
  className?: string;
}

const overlayClasses = `
  fixed inset-0
  bg-black/50
  backdrop-blur-sm
  flex items-center justify-center
  z-10
`;

const contentClasses = `
  relative
  bg-white
  rounded-md
  p-6
  shadow-lg
  focus:outline-none
  z-20
  w-full max-w-md
`;

const titleClasses = `
  text-lg font-semibold
`;

const closeButtonClasses = `
  absolute top-3 right-3
  inline-flex items-center justify-center
  rounded-full p-1
  hover:bg-gray-100
  focus:outline-none focus:ring-2 focus:ring-blue-400
`;

const Dialog: React.FC<DialogProps> = ({
  triggerLabel,
  title,
  children,
  closeLabel = "Close",
  className,
}) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <button
          className={twMerge(
            "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",
            "focus:outline-none focus:ring-2 focus:ring-blue-300"
          )}
        >
          {triggerLabel}
        </button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={twMerge(overlayClasses)} />
        <DialogPrimitive.Content className={twMerge(contentClasses, className)}>
          {title && (
            <DialogPrimitive.Title className={twMerge(titleClasses)}>
              {title}
            </DialogPrimitive.Title>
          )}

          <div className="mt-3">{children}</div>

          <DialogPrimitive.Close asChild>
            <button
              type="button"
              className={twMerge(closeButtonClasses)}
              aria-label={closeLabel}
            >
              <Cross2Icon />
            </button>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default Dialog;
