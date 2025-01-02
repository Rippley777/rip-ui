import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Collapsible, { CollapsibleProps } from ".";

const meta: Meta<CollapsibleProps> = {
  title: "Components/Collapsible",
  component: Collapsible,
  argTypes: {
    label: { control: "text" },
    defaultOpen: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<CollapsibleProps>;

export const Default: Story = {
  args: {
    label: "Toggle Content",
    defaultOpen: false,
    children: (
      <div>
        <p className="text-gray-700">
          This is the collapsible content. It can contain text, images, or any
          other React node.
        </p>
      </div>
    ),
  },
};

export const InitiallyOpen: Story = {
  args: {
    label: "Section Title",
    defaultOpen: true,
    children: (
      <div className="space-y-2">
        <p>
          Since <strong>defaultOpen</strong> is set to true, this content starts
          expanded.
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
        </ul>
      </div>
    ),
  },
};

export const LongContent: Story = {
  args: {
    label: "Show Full Article",
    defaultOpen: false,
    children: (
      <article className="prose max-w-none">
        <h2>Longer Collapsible Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
          amet convallis lorem. Nullam eleifend in justo vel imperdiet. Sed vel
          elit pharetra, dignissim neque eget, consequat purus.
        </p>
        <p>
          Mauris cursus ligula ac ultrices dapibus. Praesent tristique vel dui
          at efficitur. Mauris gravida imperdiet vehicula. Donec eget arcu
          feugiat, tempus nulla sed, vehicula urna.
        </p>
        <h3>Another Section</h3>
        <p>
          In hac habitasse platea dictumst. Integer nisl velit, congue et
          fermentum a, efficitur in purus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
      </article>
    ),
  },
};
