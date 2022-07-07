import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UnControlledRating} from './UnControledRating';
import {action} from '@storybook/addon-actions';
// настройки
export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UnControlledRating>;

// action() возвращает всегда callback а в нем много фишек...
const callback = action('rating changed inside component')

// сценарии: ПЕРЕДАЕМ СО СТАРТА ДЕФОЛТНОЕ ЗНАЧЕНИЕ И ПОЛУЧАЕМ ИЗМЕНЕННОЕ ЗНАЧЕНИЕ СЕБЕ В БИЗНЕС ЧТОБЫ ЗНАТЬ ГДЕ ИЗМЕНИЛОСЬ И КАКОЕ ЗНАЧЕНИЕ:
export const EmptyRating: ComponentStory<typeof UnControlledRating> = (args) => <UnControlledRating defaultValue={0} onChange={callback} />;

export const Rating1: ComponentStory<typeof UnControlledRating> = (args) => <UnControlledRating defaultValue={1} onChange={callback} />;

export const Rating2: ComponentStory<typeof UnControlledRating> = (args) => <UnControlledRating defaultValue={2} onChange={callback} />;

export const Rating3: ComponentStory<typeof UnControlledRating> = (args) => <UnControlledRating defaultValue={3} onChange={callback} />;

export const Rating4: ComponentStory<typeof UnControlledRating> = (args) => <UnControlledRating defaultValue={4} onChange={callback} />;

export const Rating5: ComponentStory<typeof UnControlledRating> = (args) => <UnControlledRating defaultValue={5} onChange={callback}  />;
