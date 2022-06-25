// storybook - это стенд компонент
import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';
// настройки
export default {
    title: 'Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;
// сценарии:
const callback = action('Accordion mode change event fired')

export const MenuCollapsedMode: ComponentStory<typeof Accordion> = (args) => <Accordion titleValue={'Menu'} collapsed onClick={callback}/>;
export const UsersCollapsedMode: ComponentStory<typeof Accordion> = (args) => <Accordion titleValue={'Users'} collapsed={false} onClick={callback}/>;
export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return  <Accordion titleValue={'Users'} collapsed={value} onClick={() => {setValue(!value)} }/>
}


