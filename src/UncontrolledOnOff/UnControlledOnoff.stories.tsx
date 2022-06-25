import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';
// настройки
export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
} as ComponentMeta<typeof UncontrolledOnOff>;
// сценарии:
const callback = action('on or off clicked')

export const OnMode: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff defaultOn={true}  onChange={callback}/>;
export const OffMode: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff defaultOn={false}  onChange={callback}/>;
export const BugMode: ComponentStory<typeof UncontrolledOnOff> = (args) => <div>Unsync when change defaultValue</div>
export const DefaultInputValue: ComponentStory<typeof UncontrolledOnOff> = (args) => <input defaultValue={'yo'}/>;




