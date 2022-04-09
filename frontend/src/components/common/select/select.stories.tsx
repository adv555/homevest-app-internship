import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Select } from './select'

import 'assets/styles/tailwind.css';
import 'assets/styles/fonts.css';

export default {
  title: 'UI/Controls/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const options = [
  { value: '1', label: 'Kyiv' },
  { value: '2', label: 'Mukachevo' },
  { value: '3', label: 'Ivano-Frankivsk' }
];

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  options,
  placeholder: 'Select an item from the list',
}