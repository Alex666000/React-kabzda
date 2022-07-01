import React from 'react';

type ItemType = {
    title: string
    value: any // что угодно, если сообщим родителю наверх что что-то кликнуто - ЛЮБОГО ТИПА ДАННЫХ - ANY УДОБНО ТУТ...
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    items: ItemType[]
    onChange: () => void
    onClick: (value: any) => void

}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <div>
        <AccordionTitle
            title={props.titleValue}
            onClick={props.onClick}
            value={props.collapsed}
        />
        {!props.collapsed && <AccordionBody onChange={props.onChange} items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: (val: boolean) => void
    value: boolean

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <div>
        <h3 onClick={ () => { props.onClick(!props.value) } }>---{props.title}---</h3>
    </div>
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onChange: () => void
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <div>
        <ul>
            {/*если меняется СОСТАВ массива или происходит его СОРТИРОВКА index нельзя использовать*/}
            {props.items.map((i, index) => <li onChange={()=> {props.onChange()} } onClick={()=> {props.onClick(i.value)} } key={index}>{i.title} </li>)}
        </ul>
    </div>
}


export default Accordion;