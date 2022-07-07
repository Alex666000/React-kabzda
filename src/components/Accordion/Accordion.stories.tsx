// storybook - это стенд компонент
import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';

// настройки:
export default {
    title: 'Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;

// шаблон - рисуем Accordion с какими то пропсами которые к нам могут прийти и не забываем типизировать - благодаря такой записи TS будет знать какие пропсы подхватить в копии истории в MenuCollapsedMode2.args:
const Template: ComponentStory<typeof Accordion> = (args: AccordionPropsType) => <Accordion {...args} />;

// получаем копию с помощью bind - наши истории на основе этого шаблона теперь создаем делая копии:
export const CopyMenuCollapsedMode = Template.bind({})

// пропсы свойства для истории
CopyMenuCollapsedMode.args = {
    titleValue:'Menu',
    collapsed:true,
    onChange: ()=> callback
}
// БЛАГОДАРЯ ЗАПИСИ ВЫШЕ 6 ВЕРСИИ -- CopyMenuCollapsedMode -- БУДЕТ ТАКЖЕ РАБОТАТЬ КАК -- MenuCollapsedMode -- 5 ВЕРСИИ ЧТО НИЖЕ ПРОПИСАНА:

// истории компоненты:
const callback = action('Accordion mode change event fired')
const onClickCallback = action('some item was clicked')

// 1 скрыто меню:
export const MenuCollapsedMode: ComponentStory<typeof Accordion> = (args) => <Accordion
    collapsed
    onChange={callback}
    titleValue={'Menu'}
    // onClick={onClickCallback}

    // items={[]}/>; /*передали пустой массив т.к меню collapsed - свернуто можно просто пустой передать...*/
/>

// 2 показаны - пользователи
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
// 3 режим переключения:
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


