import React from "react";
import { twMerge } from "tailwind-merge";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export interface TabItem {
  label: string;
  value: string;
  content: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
}

const listClasses = `
  flex border-b border-gray-300
`;
const triggerClasses = `
  px-4 py-2
  text-sm text-gray-700
  hover:bg-gray-100
  data-[state=active]:bg-white
  data-[state=active]:border-b-2 data-[state=active]:border-blue-500
  outline-none
`;
const contentClasses = `
  p-4
`;

const Tabs: React.FC<TabsProps> = ({ items, defaultValue, className }) => {
  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue || items[0]?.value}
      className={twMerge("w-full", className)}
    >
      <TabsPrimitive.List className={listClasses}>
        {items.map(({ label, value }) => (
          <TabsPrimitive.Trigger
            key={value}
            value={value}
            className={triggerClasses}
          >
            {label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {items.map(({ value, content }) => (
        <TabsPrimitive.Content
          key={value}
          value={value}
          className={contentClasses}
        >
          {content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

export default Tabs;
