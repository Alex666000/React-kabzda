// storybook - это стенд компонент
import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
/*const Events = {
    table: {
        category: 'EVENTS',
    }
}
const Colors = {
    table: {
        category: 'All colors',
    }
}*/
const GetCategoryObj = (category: 'All_colors_cat' | 'Events_cat' | 'Main (other)') => ({
    table: {
        category: category,
    }
})
export default {
    title: 'Cats/ Accordion',
    component: Accordion,
    // до-настройка пропсов чтобы они выглядели круто в личном кабинете "сторибука":
    argTypes: {
        // свойства настроек:
        color: {
            control: 'color',
            ...GetCategoryObj('All_colors_cat')
        },
        onChange: {
            ...GetCategoryObj('Events_cat')
        },
        onClick: {
            ...GetCategoryObj('Events_cat')
        },
        items: {
            ...GetCategoryObj('Main (other)')
        },
        collapsed: {
            ...GetCategoryObj('Main (other)')
        },
        titleValue: {
            ...GetCategoryObj('Main (other)')
        }
    }
} as ComponentMeta<typeof Accordion>;

const callback = action('Accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: ComponentStory<typeof Accordion> = (args: AccordionPropsType) => <Accordion {...args} />;

//  ---начало--- деструктуризировали повторяющийся код рефакторинг
const callbackProps = {
    onChange: () => callback,
    onClick: () => onClickCallback
}
// ---конец--- деструктуризировали повторяющийся код рефакторинг

export const MenuCollapsedMode = Template.bind({})

// 1 истории компоненты:
MenuCollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Menu',
    collapsed: true,
    items: [],
}
// 2 показаны - пользователи
export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Users',
    collapsed: false,
    items: [
        {title: 'Dima', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Victor', value: 4},
    ],
}
// 3 режим переключения:
export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion {...args}
                      collapsed={value}
                      onChange={() => {
                          setValue(!value)
                      }}
                      items={[
                          {title: 'Dima', value: 1},
                          {title: 'Valera', value: 2},
                          {title: 'Artem', value: 3},
                          {title: 'Victor', value: 4},
                      ]}
                      onClick={(id) => alert(`user ${value} with ${id}`)}
    />
}
ModeChanging.args = {
    titleValue: 'Users',
    items: [
        {title: 'Dima', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Victor', value: 4},
    ],
}



