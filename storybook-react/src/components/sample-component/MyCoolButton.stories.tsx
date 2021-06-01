import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { MyCoolButton, Props } from "./MyCoolButton";

export default {
  title: "Example/MyCoolButton",
  component: MyCoolButton,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta;

const Template: Story<Props> = (args) => <MyCoolButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  type: "basic",
  label: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Button",
};

export const Outline = Template.bind({});
Outline.args = {
  type: "outline",
  label: "Button",
};

export const Cancel = Template.bind({});
Cancel.args = {
  type: "cancel",
  label: "Button",
};

export const Text = Template.bind({});
Text.args = {
  type: "text",
  label: "Button",
};
