import React from "react";
import { twMerge } from "tailwind-merge";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const accordionRootClasses = `
  w-full
`;

const accordionItemClasses = `
  border-b border-gray-200
  focus-within:ring-1 focus-within:ring-blue-500
`;

const accordionHeaderClasses = `
  flex
`;

const accordionTriggerBaseClasses = `
  group
  flex flex-1 items-center justify-between
  py-2 px-2
  bg-white
  hover:bg-gray-50
  text-left
  text-gray-800
  transition-colors
`;

const accordionChevronClasses = `
  text-gray-400 group-hover:text-gray-600
  transition-transform
  [data-state=open]:rotate-180
`;

const accordionContentClasses = `
  px-2 pt-0 pb-4
  text-gray-700
  bg-gray-50
`;

export interface AccordionItem {
  id: string;
  trigger: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  accordions: AccordionItem[];
  type?: "single" | "multiple";
  collapsible?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  accordions,
  type = "single",
  collapsible = false,
}) => {
  return (
    <AccordionPrimitive.Root
      type={type}
      collapsible={collapsible}
      className={twMerge(accordionRootClasses)}
    >
      {accordions.map((item) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          className={twMerge(accordionItemClasses)}
        >
          <AccordionPrimitive.Header
            className={twMerge(accordionHeaderClasses)}
          >
            <AccordionPrimitive.Trigger
              className={twMerge(accordionTriggerBaseClasses)}
            >
              {item.trigger}
              <ChevronDownIcon className={twMerge(accordionChevronClasses)} />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content
            className={twMerge(accordionContentClasses)}
          >
            {item.content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
