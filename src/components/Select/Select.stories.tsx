import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Select} from './Select';
import {Accordion} from '../Accordion/Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Select',
    component: Select,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (props) => <Select {...props} />;

export const WithValue: ComponentStory<typeof Select> = (props) => {
    const [value,setValue] = useState('2')

    return <>
        <Select
            {...props}
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'},
            ]}
        />
    </>
}

WithValue.args = {}

export const WithoutValue: ComponentStory<typeof Select> = (props) => {
const [value,setValue] = useState(null)

    return <>
        <Select
            {...props}
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'},
            ]}
        />
    </>
}
WithoutValue.args = {}