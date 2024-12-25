import React from "react";
import { twMerge } from "tailwind-merge";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

const overlayClasses = `
  z-10
  fixed inset-0
  bg-black/50
  backdrop-blur-sm
  flex items-center justify-center
`;

const contentClasses = `
  z-20
  relative
  w-full max-w-md
  bg-white
  rounded-md
  p-6
  shadow-lg
  focus:outline-none
`;

const titleClasses = `
  text-lg font-semibold mb-2
`;

const descriptionClasses = `
  text-gray-700 mb-4
`;

const buttonBaseClasses = `
  inline-flex items-center justify-center
  px-4 py-2
  rounded-md
  text-sm font-medium
  transition-colors
  focus:outline-none focus:ring-2
`;

const buttonCancelClasses = `
  bg-gray-100
  text-gray-800
  hover:bg-gray-200
  focus:ring-gray-300
`;

const buttonActionClasses = `
  bg-red-500
  text-white
  hover:bg-red-600
  focus:ring-red-300
`;

export interface AlertDialogProps {
  triggerLabel: string;
  title: string;
  description: string;
  cancelLabel?: string;
  actionLabel?: string;
  onConfirm?: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  triggerLabel,
  title,
  description,
  cancelLabel = "Cancel",
  actionLabel = "Yes, do it",
  onConfirm,
}) => {
  return (
    <AlertDialogPrimitive.Root>
      <AlertDialogPrimitive.Trigger asChild>
        <button
          className={twMerge(
            buttonBaseClasses,
            "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300"
          )}
        >
          {triggerLabel}
        </button>
      </AlertDialogPrimitive.Trigger>

      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className={twMerge(overlayClasses)} />

        <AlertDialogPrimitive.Content className={twMerge(contentClasses)}>
          <AlertDialogPrimitive.Title className={twMerge(titleClasses)}>
            {title}
          </AlertDialogPrimitive.Title>
          <AlertDialogPrimitive.Description
            className={twMerge(descriptionClasses)}
          >
            {description}
          </AlertDialogPrimitive.Description>

          <div className="flex justify-end gap-2">
            <AlertDialogPrimitive.Cancel asChild>
              <button
                type="button"
                className={twMerge(buttonBaseClasses, buttonCancelClasses)}
              >
                {cancelLabel}
              </button>
            </AlertDialogPrimitive.Cancel>

            <AlertDialogPrimitive.Action asChild>
              <button
                type="button"
                onClick={onConfirm}
                className={twMerge(buttonBaseClasses, buttonActionClasses)}
              >
                {actionLabel}
              </button>
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};

export default AlertDialog;
