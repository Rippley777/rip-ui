import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AspectRatio, { AspectRatioProps } from ".";

const meta: Meta<AspectRatioProps> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  argTypes: {
    ratio: {
      control: { type: "number" },
      description: "Width/Height ratio (e.g., 1.7778 for 16:9)",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<AspectRatioProps>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    className: "bg-gray-100",
    children: (
      <img
        src="https://via.placeholder.com/800x450"
        alt="Example"
        className="absolute w-full h-full object-cover"
      />
    ),
  },
};

export const Square: Story = {
  args: {
    ratio: 1, // 1:1 square
    className: "bg-gray-200",
    children: (
      <img
        src="https://via.placeholder.com/500"
        alt="Square Example"
        className="absolute w-full h-full object-cover"
      />
    ),
  },
};

export const CustomRatio: Story = {
  args: {
    ratio: 4 / 3,
    className: "bg-blue-100",
    children: (
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Famous Internet Video"
        allowFullScreen
        className="absolute w-full h-full"
      />
    ),
  },
};
