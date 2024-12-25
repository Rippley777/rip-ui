import { Meta, StoryObj } from "@storybook/react";
import DropdownMenu, { DropdownMenuProps } from "./";

const meta: Meta<DropdownMenuProps> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  argTypes: {
    triggerLabel: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<DropdownMenuProps>;

export const Default: Story = {
  args: {
    triggerLabel: "Open Menu",
    items: [
      {
        id: "item1",
        label: "Profile",
        onSelect: () => alert("Profile clicked"),
      },
      {
        id: "item2",
        label: "Settings",
        onSelect: () => alert("Settings clicked"),
      },
      {
        id: "item3",
        label: "Log Out",
        onSelect: () => alert("Log Out clicked"),
      },
    ],
  },
};

export const WithDisabledItems: Story = {
  args: {
    triggerLabel: "Menu with Disabled Items",
    items: [
      {
        id: "item1",
        label: "Normal Item",
        onSelect: () => alert("Clicked Normal"),
      },
      { id: "item2", label: "Disabled Item", disabled: true },
      { id: "item3", label: "Also Disabled", disabled: true },
      { id: "item4", label: "Another Item", onSelect: () => alert("Another") },
    ],
  },
};

export const CustomStyling: Story = {
  args: {
    triggerLabel: "Fancy Menu",
    className: "bg-blue-50 border-2 border-blue-200",
    items: [
      { id: "one", label: "Option 1", onSelect: () => alert("Option 1") },
      { id: "two", label: "Option 2", onSelect: () => alert("Option 2") },
    ],
  },
};
