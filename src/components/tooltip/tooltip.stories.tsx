import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tooltip, { TooltipProps } from "./";

const meta: Meta<TooltipProps> = {
  title: "Components/Tooltip",
  component: Tooltip,
};
export default meta;

type Story = StoryObj<TooltipProps>;

export const Default: Story = {
  args: {
    text: "This is a tooltip",
    children: (
      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Hover me
      </button>
    ),
  },
};

export const CustomOffset: Story = {
  args: {
    text: "Offset by 20px",
    sideOffset: 20,
    children: (
      <span className="inline-block px-2 py-1 bg-gray-200">Hover me</span>
    ),
  },
};
