import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dialog, { DialogProps } from "./";

const meta: Meta<DialogProps> = {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    triggerLabel: { control: "text" },
    title: { control: "text" },
    closeLabel: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<DialogProps>;

export const Default: Story = {
  args: {
    triggerLabel: "Open Dialog",
    title: "Dialog Title",
    closeLabel: "Close",
    children: (
      <div>
        <p className="text-gray-700">
          This is a simple dialog. It can contain text, images, forms, or
          anything else you want. Click the close button or the background
          overlay to dismiss.
        </p>
      </div>
    ),
  },
};

export const LongerContent: Story = {
  args: {
    triggerLabel: "Open Longer Dialog",
    title: "Important Information",
    closeLabel: "Dismiss",
    children: (
      <div className="space-y-4 text-gray-700">
        <p>
          This dialog has more content. When content exceeds the dialog height,
          Radix adds scrolling for you. Try resizing the window or adding more
          text to see the scroll in action.
        </p>
        <ul className="list-disc list-inside">
          <li>List Item One</li>
          <li>List Item Two</li>
          <li>List Item Three</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
          volutpat justo. Sed lobortis, sapien interdum posuere ornare, metus
          neque congue nunc, in malesuada erat nunc eget metus.
        </p>
        <p>
          Nunc vel eros a dui dapibus laoreet. Sed quis facilisis lorem. Sed
          feugiat massa sit amet nisl finibus, sit amet ultrices ipsum pharetra.
        </p>
      </div>
    ),
  },
};

export const NoTitle: Story = {
  args: {
    triggerLabel: "Open Dialog Without Title",
    closeLabel: "OK",
    children: (
      <div className="text-gray-700">
        <p>
          You can omit the title prop if you prefer. This dialog just has
          content.
        </p>
      </div>
    ),
  },
};
