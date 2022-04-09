import React from "react";
import { ComponentStory } from "@storybook/react";

import MultipleRange from "./rangeMutiple";

import 'assets/styles/tailwind.css';
import 'assets/styles/fonts.css';

export default {
    title: "UI/Controls/MultipleRange",
    component: MultipleRange,
  };

const Template: ComponentStory<typeof MultipleRange> = (args) => <MultipleRange {...args} returnValues={(value) => console.log(value)} />

export const Empty = Template.bind({});

export const minValue = Template.bind({});
minValue.args = {
    min: 16688
}

export const maxValue = Template.bind({});
maxValue.args = {
    max: 65000
}

export const allValue = Template.bind({});
allValue.args = {
    min: 0,
    max: 155000
}