// storybook - это стенд компонент
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

// настройки
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;


// шаблон
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
// сценарий 1
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
// сценарий 2
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
// сценарий 3
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
// сценарий 4
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
