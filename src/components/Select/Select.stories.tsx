import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';


export default {
    title: 'Select',
    component: Select,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Select>;


const Template: ComponentStory<typeof Select> = (props) => <Select {...props} />;

export const Select_my = Template.bind({});
Select_my.args = {
    // primary: true,
    // label: 'Button',
};
