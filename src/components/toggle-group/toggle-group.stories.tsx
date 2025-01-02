import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ToggleGroup, ToggleGroupProps } from "./";

export default {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["single", "multiple"],
    },
    className: { control: "text" },
    optionClassName: { control: "text" },
    onChange: { action: "changed" },
  },
} as Meta<typeof ToggleGroup>;

const Template: StoryFn<typeof ToggleGroup> = (args: ToggleGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string[]>(
    args.value || []
  );

  return (
    <ToggleGroup
      {...args}
      value={selectedValue}
      onChange={(newValue) => {
        setSelectedValue(newValue);
        args.onChange(newValue);
      }}
    />
  );
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  type: "multiple",
  value: ["bold"],
  options: [
    { value: "bold", label: "Bold" },
    { value: "italic", label: "Italic" },
    { value: "underline", label: "Underline" },
  ],
};

// Single Selection Story
export const SingleSelection = Template.bind({});
SingleSelection.args = {
  type: "single",
  value: ["bold"],
  options: [
    { value: "bold", label: "Bold" },
    { value: "italic", label: "Italic" },
    { value: "underline", label: "Underline" },
  ],
};

// Advanced Options Story
export const AdvancedOptions = Template.bind({});
AdvancedOptions.args = {
  type: "multiple",
  value: ["option1"],
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ],
};
