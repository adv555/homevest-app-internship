import React from 'react';
import { ComponentStory } from '@storybook/react';
import Error from './error'

export default {
    title: 'UI/Controls/Error', 
    component: Error
}

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />

export const Default = Template.bind({});

export const Message = Template.bind({});
Message.args = {
    message: 'Upps...Page not found!'
}

export const Link = Template.bind({});
Link.args = {
    path: 'https://google.com',
    isLink: true,
    message: 'Upps...Page not found!'
}