import { Meta, StoryObj } from "@storybook/react";
import NavigationMenu, { NavigationMenuProps } from ".";

const meta: Meta<NavigationMenuProps> = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
};

export default meta;
type Story = StoryObj<NavigationMenuProps>;

export const Default: Story = {
  args: {
    navItems: [
      {
        label: "Home",
        href: "/home",
      },
      {
        label: "Products",
        items: [
          { label: "Item One", href: "/products/one" },
          { label: "Item Two", href: "/products/two" },
          { label: "Item Three", href: "/products/three" },
        ],
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
};
