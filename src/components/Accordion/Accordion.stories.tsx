// storybook - это стенд компонент
import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Accordion, {AccordionPropsType} from './Accordion';
import {Button} from '../../stories/Button';
// настройки
export default {
    title: 'Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;
// сценарии:
const callback = action('Accordion mode change event fired')
// пример с использованием шаблона - заменим старые компоненты на с использованием шаблона = переход от 5 версии к 6 версии
const Template: ComponentStory<typeof Accordion> = (args: AccordionPropsType) => <Accordion {...args} />;
export const MenuCollapsedMode2 = Template.bind({})
MenuCollapsedMode2.args = {

}




export const MenuCollapsedMode: ComponentStory<typeof Accordion> = (args) => <Accordion titleValue={'Menu'} collapsed onClick={callback}/>;
export const UsersCollapsedMode: ComponentStory<typeof Accordion> = (args) => <Accordion titleValue={'Users'} collapsed={false} onClick={callback}/>;
export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return  <Accordion titleValue={'Users'} collapsed={value} onClick={() => {setValue(!value)} }/>
}


