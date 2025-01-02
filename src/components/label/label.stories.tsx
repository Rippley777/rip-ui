import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Label, { LabelProps } from ".";

const meta: Meta<LabelProps> = {
  title: "Components/Label",
  component: Label,
};

export default meta;
type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    htmlFor: "username",
    children: "Username",
  },
};

export const WithInput: Story = {
  render: (args: { htmlFor: string; children: React.ReactNode }) => (
    <div className="space-y-1">
      <Label {...args} />
      <input
        id={args.htmlFor}
        type="text"
        className="border border-gray-300 p-1 rounded"
      />
    </div>
  ),
  args: {
    htmlFor: "email",
    children: "Email Address",
  },
};
