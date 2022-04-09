import React from 'react';
import { ComponentStory } from "@storybook/react";
import { Input } from "./input";
import { PasswordInput } from './password-input';
import { LocationInput } from './location-input';

import 'assets/styles/tailwind.css';
import 'assets/styles/fonts.css';

export default {
  title: "UI/Controls/Input",
  component: Input,
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Empty = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
}

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Email'
}

export const WithError = Template.bind({});
WithError.args = {
  isInvalid: true,
  errorText: 'Email adress entered incorrect.'
}

const PasswordTemplate: ComponentStory<typeof PasswordInput> = (args) => <PasswordInput {...args} />;
export const Password = PasswordTemplate.bind({});
Password.args = {}

const LocationTemplate: ComponentStory<typeof LocationInput> = (args) => <LocationInput {...args} />;
export const Location = LocationTemplate.bind({});
Location.args = {}
