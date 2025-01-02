// MyCheckbox.stories.jsx
import React from "react";
import { StoryFn } from "@storybook/react";
import Checkbox, { CheckboxProps } from ".";

export default {
  title: "Components/Form/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    defaultChecked: { control: "boolean" },
  },
};
const Template: StoryFn<CheckboxProps> = (args: CheckboxProps) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Accept Terms & Conditions",
  defaultChecked: false,
};

export const CheckedByDefault = Template.bind({});
CheckedByDefault.args = {
  label: "You're gunna say yes",
  defaultChecked: true,
};

export const FilledCheckbox = Template.bind({});
FilledCheckbox.args = {
  label: "Do you want to see a filled checkbox?",
  defaultChecked: true,
  fill: true,
};

export const RoundedCheckbox = Template.bind({});
RoundedCheckbox.args = {
  label: "Not so square now, am i?",
  defaultChecked: true,
  fill: true,
  checkboxClassName: "rounded-full",
};
