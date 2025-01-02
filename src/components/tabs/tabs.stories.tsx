import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tabs, { TabsProps } from ".";

const meta: Meta<TabsProps> = {
  title: "Components/Tabs",
  component: Tabs,
};
export default meta;

type Story = StoryObj<TabsProps>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Tab One",
        value: "tab1",
        content: <div>Content for Tab One</div>,
      },
      {
        label: "Tab Two",
        value: "tab2",
        content: <div>Content for Tab Two</div>,
      },
      {
        label: "Tab Three",
        value: "tab3",
        content: <div>Content for Tab Three</div>,
      },
    ],
    defaultValue: "tab1",
  },
};

export const WithDifferentDefault: Story = {
  args: {
    items: [
      {
        label: "First",
        value: "first",
        content: <div>First tab content.</div>,
      },
      {
        label: "Second",
        value: "second",
        content: <div>Second tab content.</div>,
      },
    ],
    defaultValue: "second",
  },
};
