import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Select, { SelectProps } from "./";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

const Template: StoryFn<SelectProps> = (args) => {
  const [selected, setSelected] = useState(args.value || "");
  return <Select {...args} value={selected} onValueChange={setSelected} />;
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Choose an option",
  value: "",
  items: [
    { label: "Alpha", value: "alpha" },
    { label: "Beta", value: "beta" },
    { label: "Gamma (disabled)", value: "gamma", disabled: true },
  ],
};

export const Grouped = Template.bind({});
Grouped.args = {
  placeholder: "Grouped items",
  value: "",
  items: [
    { label: "Apple", value: "apple", group: "Fruits" },
    { label: "Banana", value: "banana", group: "Fruits" },
    { label: "Orange", value: "orange", group: "Fruits", disabled: true },
    { label: "Broccoli", value: "broccoli", group: "Vegetables" },
    { label: "Carrot", value: "carrot", group: "Vegetables" },
  ],
};
