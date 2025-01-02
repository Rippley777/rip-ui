import React from "react";
import { twMerge } from "tailwind-merge";
import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  group?: string;
}

export interface SelectProps {
  items: SelectOption[];
  value: string;
  onValueChange: (val: string) => void;
  placeholder?: string;
  className?: string;
}

const triggerClasses = `
  inline-flex items-center justify-between
  px-3 py-2
  bg-white
  border border-gray-300
  rounded
  text-gray-700
  hover:bg-gray-50
  focus:outline-none focus:ring-2 focus:ring-blue-400
`;

const contentClasses = `
  bg-white
  border border-gray-300
  rounded
  shadow-md
  py-1
`;

const itemClasses = `
  relative
  flex items-center
  px-3 py-1
  cursor-pointer
  text-sm text-gray-700
  hover:bg-gray-100
  focus:bg-gray-100
  radix-disabled:text-gray-400
  radix-disabled:cursor-not-allowed
  outline-none
`;

const labelClasses = "px-3 py-1 text-xs text-gray-500";
const separatorClasses = "my-1 h-px bg-gray-200";

export const Select: React.FC<SelectProps> = ({
  items,
  value,
  onValueChange,
  placeholder,
  className,
}) => {
  const groups = items.reduce<Record<string, SelectOption[]>>((map, item) => {
    const groupKey = item.group || "_ungrouped";
    if (!map[groupKey]) map[groupKey] = [];
    map[groupKey].push(item);
    return map;
  }, {});

  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger className={twMerge(triggerClasses, className)}>
        <SelectPrimitive.Value
          placeholder={placeholder || "Select an option"}
        />
        <SelectPrimitive.Icon>
          <svg
            className="w-4 h-4 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.23 7.21a.75.75 0 011.06-.02l3.2 3.07 3.2-3.07a.75.75 0 011.04 1.08l-3.72 3.57a.75.75 0 01-1.04 0L5.21 8.27a.75.75 0 01.02-1.06z" />
          </svg>
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={contentClasses} position="popper">
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center py-1 text-gray-500">
            ▲
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport>
            {Object.entries(groups).map(([groupName, groupItems]) => {
              if (groupName === "_ungrouped") {
                return groupItems.map((item) => (
                  <SelectPrimitive.Item
                    key={item.value}
                    value={item.value}
                    disabled={item.disabled}
                    className={itemClasses}
                  >
                    <SelectPrimitive.ItemText>
                      {item.label}
                    </SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute left-1">
                      ✓
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ));
              }
              return (
                <SelectPrimitive.Group key={groupName}>
                  <SelectPrimitive.Label className={labelClasses}>
                    {groupName}
                  </SelectPrimitive.Label>
                  {groupItems.map((item) => (
                    <SelectPrimitive.Item
                      key={item.value}
                      value={item.value}
                      disabled={item.disabled}
                      className={itemClasses}
                    >
                      <SelectPrimitive.ItemText>
                        {item.label}
                      </SelectPrimitive.ItemText>
                      <SelectPrimitive.ItemIndicator className="absolute left-1">
                        ✓
                      </SelectPrimitive.ItemIndicator>
                    </SelectPrimitive.Item>
                  ))}
                  <SelectPrimitive.Separator className={separatorClasses} />
                </SelectPrimitive.Group>
              );
            })}
          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="flex items-center justify-center py-1 text-gray-500">
            ▼
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export default Select;
