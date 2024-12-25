import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Accordion, { AccordionProps } from "./";

const meta: Meta<AccordionProps> = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["single", "multiple"],
    },
    collapsible: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<AccordionProps>;

/**
 * We define some sample accordion items here.
 */
const accordionData = [
  {
    id: "item-1",
    trigger: "Section 1",
    content: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
          libero volutpat, porta velit a, bibendum metus.
        </p>
      </div>
    ),
  },
  {
    id: "item-2",
    trigger: "Section 2",
    content: (
      <div>
        <p>
          Morbi cursus feugiat lectus eu interdum. Nunc commodo vestibulum
          elementum.
        </p>
      </div>
    ),
  },
  {
    id: "item-3",
    trigger: "Section 3",
    content: (
      <div>
        <p>
          Aliquam eu commodo nisl. Aenean bibendum commodo lectus ultricies
          pretium.
        </p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    accordions: accordionData,
    type: "single", // Only one can be open at a time
    collapsible: true, // The open section can be toggled closed
  },
};

export const Multiple: Story = {
  args: {
    accordions: accordionData,
    type: "multiple", // Multiple sections can be open
    collapsible: false, // If an item is open, clicking trigger won't close it
  },
};
