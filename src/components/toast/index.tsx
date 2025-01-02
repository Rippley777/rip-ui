import React from "react";
import { twMerge } from "tailwind-merge";
import * as ToastPrimitive from "@radix-ui/react-toast";

export interface ToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  duration?: number;
  className?: string;
}

// const providerClasses = `
//   fixed
//   top-0
//   right-0
//   flex
//   flex-col
//   p-4
//   gap-2
//   z-50
// `;
const rootClasses = `
  bg-white
  border border-gray-200
  shadow-lg
  rounded
  px-4 py-3
  w-64
  data-[state=open]:animate-slideIn
  data-[state=closed]:animate-hide
  will-change-transform
`;
const titleClasses = "text-sm font-semibold text-gray-800";
const descriptionClasses = "mt-1 text-sm text-gray-600";
const actionBtnClasses = `
  inline-flex items-center justify-center
  px-3 py-1
  text-sm
  bg-blue-600 text-white
  rounded hover:bg-blue-700
  focus:outline-none focus:ring-2 focus:ring-blue-400
`;
const closeBtnClasses = `
  absolute top-1 right-1
  text-gray-400 hover:text-gray-600
  focus:outline-none
`;

export const Toast: React.FC<ToastProps> = ({
  open,
  onOpenChange,
  title,
  description,
  actionLabel,
  onAction,
  duration = 5000,
  className,
}) => {
  return (
    // <ToastPrimitive.Provider className={providerClasses}>
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        duration={duration}
        className={twMerge(rootClasses, className)}
      >
        <ToastPrimitive.Title className={titleClasses}>
          {title}
        </ToastPrimitive.Title>
        {description && (
          <ToastPrimitive.Description className={descriptionClasses}>
            {description}
          </ToastPrimitive.Description>
        )}
        {actionLabel && onAction && (
          <ToastPrimitive.Action asChild altText={actionLabel}>
            <button onClick={onAction} className={actionBtnClasses}>
              {actionLabel}
            </button>
          </ToastPrimitive.Action>
        )}
        <ToastPrimitive.Close className={closeBtnClasses}>
          ×
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
};

export default Toast;
