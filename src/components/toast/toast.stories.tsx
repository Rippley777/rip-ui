import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Toast, { ToastProps } from ".";

// const code = `
// import React, { useState } from "react";
// import Toast from "./Toast";

// function MyPage() {
//   const [toastOpen, setToastOpen] = useState(false);

//   return (
//     <div className="p-8">
//       <button
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//         onClick={() => setToastOpen(true)}
//       >
//         Show Toast
//       </button>
//       <Toast
//         open={toastOpen}
//         onOpenChange={setToastOpen}
//         title="Notification"
//         description="Here's a quick toast notification."
//       />
//     </div>
//   );
// }

// export default MyPage;
// `;

export default {
  title: "Components/Toast",
  component: Toast,
} as Meta;

const Template: StoryFn<ToastProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => setOpen(true)}
      >
        Show Toast
      </button>

      <Toast {...args} open={open} onOpenChange={setOpen} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  title: "Hello!",
  description: "This is a basic toast message.",
};

export const WithAction = Template.bind({});
WithAction.args = {
  title: "Action Toast",
  description: "Click the button to do something.",
  actionLabel: "Undo",
  onAction: () => alert("Undo clicked!"),
};
