import { Meta, StoryObj } from "@storybook/react";
import Menubar, { MenubarProps } from "./";

const meta: Meta<MenubarProps> = {
  title: "Components/Menubar",
  component: Menubar,
};

export default meta;
type Story = StoryObj<MenubarProps>;

const handleSelect = (label: string) => () => alert(`Selected: ${label}`);

export const Default: Story = {
  args: {
    menus: [
      {
        title: "File",
        items: [
          { label: "New File", onSelect: handleSelect("New File") },
          { label: "Open...", onSelect: handleSelect("Open...") },
          { label: "Exit", onSelect: handleSelect("Exit") },
        ],
      },
      {
        title: "Edit",
        items: [
          { label: "Undo", onSelect: handleSelect("Undo") },
          { label: "Redo", onSelect: handleSelect("Redo") },
        ],
      },
    ],
  },
};
