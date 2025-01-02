import { Meta, StoryObj } from "@storybook/react";
import AlertDialog, { AlertDialogProps } from ".";

const meta: Meta<AlertDialogProps> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  argTypes: {
    triggerLabel: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    cancelLabel: { control: "text" },
    actionLabel: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<AlertDialogProps>;

const handleConfirm = () => {
  alert("Action confirmed!");
};

export const Default: Story = {
  args: {
    triggerLabel: "Open Alert",
    title: "Are you absolutely sure?",
    description:
      "This action cannot be undone. This will permanently delete your data.",
    cancelLabel: "Cancel",
    actionLabel: "Delete",
    onConfirm: handleConfirm,
  },
};
