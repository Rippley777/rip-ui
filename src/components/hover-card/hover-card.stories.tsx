import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HoverCard, { HoverCardProps } from "./";

const meta: Meta<HoverCardProps> = {
  title: "Components/HoverCard",
  component: HoverCard,
  argTypes: {
    trigger: {
      control: "text",
      description: "The hover/focus trigger element",
    },
    content: {
      control: "text",
      description: "The content shown in the hover card",
    },
    sideOffset: { control: "number" },
    defaultOpen: { control: "boolean" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<HoverCardProps>;

export const Default: Story = {
  args: {
    trigger: (
      <span className="font-semibold text-blue-600 hover:underline">
        Hover me!
      </span>
    ),
    content: (
      <div>
        <h4 className="font-bold mb-1">Default HoverCard</h4>
        <p className="text-sm text-gray-600">
          This is some extra information about a feature or user profile.
        </p>
      </div>
    ),
    sideOffset: 8,
    defaultOpen: false,
  },
};

export const CustomOffset: Story = {
  args: {
    trigger: (
      <span className="font-semibold text-blue-600 hover:underline">
        Hover me (larger offset)
      </span>
    ),
    content: (
      <div>
        <p className="text-gray-700">I appear further away from the trigger.</p>
      </div>
    ),
    sideOffset: 16,
  },
};

export const DefaultOpen: Story = {
  args: {
    trigger: (
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Button Trigger
      </button>
    ),
    content: (
      <div>
        <p className="text-gray-800">Default open for demonstration/testing.</p>
      </div>
    ),
    defaultOpen: true,
  },
};
