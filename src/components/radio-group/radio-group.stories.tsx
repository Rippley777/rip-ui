import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import RadioGroup, { RadioGroupProps } from "./";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
} as Meta;

const Template: StoryFn<RadioGroupProps> = (args) => {
  const [value, setValue] = useState("option1");
  return <RadioGroup {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
};
