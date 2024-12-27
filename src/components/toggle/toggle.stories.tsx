import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Toggle, { ToggleProps } from "./";

export default {
  title: "Components/Toggle",
  component: Toggle,
} as Meta;

const Template: StoryFn<ToggleProps> = (args) => {
  const [pressed, setPressed] = useState(args.pressed);

  return (
    <Toggle {...args} pressed={pressed} onPressedChange={setPressed}>
      {pressed ? "On" : "Off"}
    </Toggle>
  );
};

export const Default = Template.bind({});
Default.args = {
  pressed: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  pressed: true,
  disabled: true,
};
