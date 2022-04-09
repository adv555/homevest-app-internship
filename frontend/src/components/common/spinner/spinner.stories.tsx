import React from 'react';
import { ComponentStory } from '@storybook/react';
import Spinner from './spinner';

export default {
    title: 'UI/Controls/Spinner',
    Component: Spinner
} 

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Default = Template.bind({});

export const Medium = Template.bind({});
Medium.args = {
    type: 'medium'
}

export const Small = Template.bind({});
Small.args = {
    type: 'small'
}

export const Custom = Template.bind({});
Custom.args = {
    type: 'custom'
}

export const Label = Template.bind({});
Label.args = {
    isLabel: true
}