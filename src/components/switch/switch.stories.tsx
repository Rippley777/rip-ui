import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Switch, { SwitchProps } from "./";

export default {
  title: "Components/Switch",
  component: Switch,
} as Meta;

const Template: StoryFn<SwitchProps> = (args) => {
  const [isOn, setIsOn] = useState(args.checked);
  return (
    <div className="space-y-2">
      <Switch {...args} checked={isOn} onCheckedChange={setIsOn} />
      <p>Switch is {isOn ? "On" : "Off"}</p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: true,
  disabled: true,
};
