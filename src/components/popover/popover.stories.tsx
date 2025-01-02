import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Popover, { PopoverProps } from ".";

const code = `import React from "react";
import Popover from "./Popover";

function MyPage() {
  return (
    <div className="p-8">
      <Popover triggerLabel="Show Details">
        <div className="space-y-2">
          <h4 className="font-semibold">Popover Title</h4>
          <p className="text-sm text-gray-600">
            Some helpful information here.
          </p>
        </div>
      </Popover>
    </div>
  );
}

export default MyPage;`;

const meta: Meta<PopoverProps> = {
  title: "Components/Popover",
  component: Popover,
};

export default meta;
type Story = StoryObj<PopoverProps>;

export const Default: Story = {
  args: {
    triggerLabel: "Open Popover",
    children: (
      <div className="text-gray-700">
        <h4 className="font-bold mb-1">Popover Content</h4>
        <p className="text-sm">
          This can be any React node—text, images, forms, etc.
        </p>
      </div>
    ),
    sideOffset: 5,
  },
  parameters: {
    docs: {
      source: {
        code,
      },
    },
  },
};

export const CustomOffset: Story = {
  args: {
    triggerLabel: "Custom Offset",
    sideOffset: 20,
    children: (
      <p className="text-gray-700">
        This popover is 20px away from the trigger.
      </p>
    ),
  },
};
