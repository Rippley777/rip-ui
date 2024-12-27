import React from "react";
import { twMerge } from "tailwind-merge";
import * as MenubarPrimitive from "@radix-ui/react-menubar";

export interface MenuItem {
  label: string;
  onSelect?: () => void;
}

export interface MenubarProps {
  menus: {
    title: string;
    items: MenuItem[];
  }[];
  className?: string;
}

const rootClasses = "flex space-x-2 bg-gray-50 border-b border-gray-300 p-1";
const triggerClasses = "px-3 py-1 hover:bg-gray-200 focus:bg-gray-200 rounded";
const contentClasses = "bg-white border border-gray-300 rounded shadow-md py-1";
const itemClasses = `
  px-3 py-1 text-sm text-gray-700 cursor-pointer
  hover:bg-gray-100 focus:bg-gray-100 outline-none
`;

const Menubar: React.FC<MenubarProps> = ({ menus, className }) => {
  return (
    <MenubarPrimitive.Root className={twMerge(rootClasses, className)}>
      {menus.map((menu) => (
        <MenubarPrimitive.Menu key={menu.title}>
          <MenubarPrimitive.Trigger className={triggerClasses}>
            {menu.title}
          </MenubarPrimitive.Trigger>
          <MenubarPrimitive.Portal>
            <MenubarPrimitive.Content className={contentClasses}>
              {menu.items.map((item) => (
                <MenubarPrimitive.Item
                  key={item.label}
                  className={itemClasses}
                  onSelect={item.onSelect}
                >
                  {item.label}
                </MenubarPrimitive.Item>
              ))}
            </MenubarPrimitive.Content>
          </MenubarPrimitive.Portal>
        </MenubarPrimitive.Menu>
      ))}
    </MenubarPrimitive.Root>
  );
};

export default Menubar;
