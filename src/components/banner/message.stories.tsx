import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Message from "./message";

export default {
  title: "Components/Message",
  component: Message,
  argTypes: {
    message: {
      control: "text",
      description: "The message content to display.",
    },
    type: {
      control: { type: "select", options: ["success", "info", "error"] },
      description: "The type of message.",
    },
  },
} as Meta;

const Template: StoryFn<typeof Message> = (args) => <Message {...args} />;

export const Success = Template.bind({});
Success.args = {
  message: "This is a success message.",
  type: "success",
};

export const Info = Template.bind({});
Info.args = {
  message: "This is an info message.",
  type: "info",
};

export const Error = Template.bind({});
Error.args = {
  message: "This is an error message.",
  type: "error",
};
