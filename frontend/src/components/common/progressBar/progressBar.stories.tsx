import React from "react";
import { ComponentStory } from "@storybook/react";
import ProgressBar from "./progressBar";

export default {
    title: 'UI/Controls/ProgressBar',
    component: ProgressBar
}

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Empty = Template.bind({});

export const checkProgressBar = Template.bind({});
checkProgressBar.args = {
    full: 627000,
    progress: 450000
}