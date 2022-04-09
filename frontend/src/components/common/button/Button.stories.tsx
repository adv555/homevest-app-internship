import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "assets/styles/tailwind.css";
import "assets/styles/fonts.css";
import { ReactComponent as GoogleIcon } from "./icon-google.svg";
import Button from "./button";

export default {
  title: "UI/Controls/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Empty = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  nameBtn: "primary",
  label: "Button",
};
export const Secondary = Template.bind({});
Secondary.args = {
  nameBtn: "secondary",
  label: "Button",
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  nameBtn: "tertiary",
  label: "Button",
};
export const Google = Template.bind({});
Google.args = {
  nameBtn: "google",
  icon: GoogleIcon,
  label: "Button",
};
