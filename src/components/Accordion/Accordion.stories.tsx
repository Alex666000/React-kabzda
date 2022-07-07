// storybook - это стенд компонент
import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';

// настройки
export default {
    title: 'Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;

const callback = action('Accordion mode change event fired')
const onClickCallback = action('some item was clicked')

// истории компоненты:

// скрыто меню:
export const MenuCollapsedMode: ComponentStory<typeof Accordion> = (args) => <Accordion
    // onClick={onClickCallback}
    titleValue={'Menu'}
    collapsed={true}
    onChange={callback}
    // items={[]}/>; /*передали пустой массив т.к меню collapsed - свернуто можно просто пустой передать...*/
/>

// показаны - пользователи
export const UsersUnCollapsedMode: ComponentStory<typeof Accordion> = (args) => <Accordion
    // onClick={onClickCallback}
    titleValue={'Users'}
    collapsed={false}
    onChange={callback}
    //     items={[
    //     {title:"Dima", value: 1},
    //     {title:"Valera", value:2 } ,
    //     {title:"Artem", value:3 },
    //     {title:"Victor", value:4 }
    // ]};
/>
// режим переключения:
export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        //     items={[
        //     {title:"Dima", value: 1},
        //     {title:"Valera", value:2 },
        //     {title:"Artem", value:3 },
        //     {title:"Victor", value:4 }
        // ]}
        titleValue={'Users'}
        collapsed={value}
        onChange={() => {
            setValue(!value)
        }}
        // onClick={(value: any) => {alert(`user with ID ${value} should be happy`)}}
    />
}


