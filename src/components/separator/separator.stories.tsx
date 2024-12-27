import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Separator, { SeparatorProps } from "./";

// const code = `
// import React from "react";
// import Separator from "./Separator";

// function MyPage() {
//   return (
//     <div className="p-4">
//       <p>Some text above the separator</p>
//       <Separator orientation="horizontal" className="my-4" />
//       <p>Some text below the separator</p>
//     </div>
//   );
// }

// export default MyPage;
// `;

const meta: Meta<SeparatorProps> = {
  title: "Components/Separator",
  component: Separator,
};
export default meta;

type Story = StoryObj<SeparatorProps>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="space-y-2">
      <p>Above the separator</p>
      <Separator {...args} />
      <p>Below the separator</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex space-x-2 h-32">
      <p>Left</p>
      <Separator {...args} />
      <p>Right</p>
    </div>
  ),
};
