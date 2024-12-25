import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Avatar, { AvatarProps } from "./";

const meta: Meta<AvatarProps> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    fallback: { control: "text" },
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: {
    src: "https://placekitten.com/200/200",
    alt: "Cute Cat",
    fallback: "CC",
    size: "md",
  },
};

export const MissingImage: Story = {
  args: {
    src: "/broken-link.jpg",
    alt: "Broken Image",
    fallback: "??",
    size: "md",
  },
};

export const DifferentSizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
  args: {
    src: "https://placekitten.com/200/200",
    alt: "Multiple Avatars",
    fallback: "MA",
  },
};
