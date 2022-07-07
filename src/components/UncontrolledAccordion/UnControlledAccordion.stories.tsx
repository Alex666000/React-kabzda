// storybook - это стенд компонент
import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UnControlledAccordion';
// настройки
export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
} as ComponentMeta<typeof UncontrolledAccordion>;
// сценарии:
const callback = action('Accordion mode change event fired')

export const ModeChanging: ComponentStory<typeof UncontrolledAccordion> = (args) => {
// раз компонента неконтролируема, то useState не нужен во внешнем мире так как внутрь его нельзя все равно передать - ВНТРИ КОМПОНЕНТЫ ЕСТЬ СВОЙ ЛОКАЛЬНЫЙ "СТЕЙТ" который его локально меняет
return  <UncontrolledAccordion titleValue={'Users'} />
}


