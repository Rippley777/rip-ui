import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ScrollArea, { ScrollAreaProps } from "./";

const meta: Meta<ScrollAreaProps> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
};
export default meta;

type Story = StoryObj<ScrollAreaProps>;

export const Default: Story = {
  render: (args) => (
    <ScrollArea {...args}>
      <div className="space-y-2 p-4">
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i} className="text-gray-700">
            Item {i + 1}
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};
