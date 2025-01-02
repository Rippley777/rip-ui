import React from "react";
import { twMerge } from "tailwind-merge";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

export interface NavMenuItem {
  label: string;
  href?: string;
  items?: NavMenuItem[];
}

export interface NavigationMenuProps {
  navItems: NavMenuItem[];
  className?: string;
}

const rootClasses = `
  relative
  flex
  w-full
  items-center
  justify-center
  border-b
  border-gray-300
  bg-gray-50
  p-2
`;

const listClasses = `
  flex
  gap-2
`;

const triggerClasses = `
  inline-flex
  items-center
  justify-center
  px-3 py-1
  rounded
  hover:bg-gray-100
  text-gray-700
  focus:outline-none focus:ring-2 focus:ring-blue-400
`;

const contentClasses = `
  absolute
  top-full
  left-0
  mt-1
  bg-white
  shadow-md
  border border-gray-200
  rounded
  p-2
  z-20
`;

const linkClasses = `
  block
  px-3 py-1
  text-sm
  text-gray-700
  hover:bg-gray-100
  rounded
  focus:outline-none focus:bg-gray-100
`;

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  navItems,
  className,
}) => {
  return (
    <NavigationMenuPrimitive.Root className={twMerge(rootClasses, className)}>
      <NavigationMenuPrimitive.List className={listClasses}>
        {navItems.map((item) => {
          const hasSubmenu = item.items && item.items.length > 0;
          return (
            <NavigationMenuPrimitive.Item key={item.label} className="relative">
              {hasSubmenu ? (
                <>
                  <NavigationMenuPrimitive.Trigger className={triggerClasses}>
                    {item.label}
                  </NavigationMenuPrimitive.Trigger>
                  <NavigationMenuPrimitive.Content className={contentClasses}>
                    {item.items?.map((subItem) => (
                      <NavigationMenuPrimitive.Link key={subItem.label} asChild>
                        <a href={subItem.href ?? "#"} className={linkClasses}>
                          {subItem.label}
                        </a>
                      </NavigationMenuPrimitive.Link>
                    ))}
                  </NavigationMenuPrimitive.Content>
                </>
              ) : (
                <NavigationMenuPrimitive.Link asChild>
                  <a
                    href={item.href ?? "#"}
                    className={twMerge(triggerClasses, "text-sm")}
                  >
                    {item.label}
                  </a>
                </NavigationMenuPrimitive.Link>
              )}
            </NavigationMenuPrimitive.Item>
          );
        })}
      </NavigationMenuPrimitive.List>
      <NavigationMenuPrimitive.Indicator className="z-30 flex items-end justify-center overflow-hidden"></NavigationMenuPrimitive.Indicator>
    </NavigationMenuPrimitive.Root>
  );
};

export default NavigationMenu;
