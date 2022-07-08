import React from 'react';

type ItemType = {
    title: string
    value: any // что угодно, если сообщим родителю наверх что что-то кликнуто - ЛЮБОГО ТИПА ДАННЫХ - ANY УДОБНО ТУТ...
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Elements should be not collapsed
     */
    items?: ItemType[]
    onChange: () => void
    /**
     * Color optional
     */
    color?: string
    onClick: (value: any) => void

}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <div>
        <AccordionTitle
            title={props.titleValue}
            onChange={props.onChange}
            color={props.color}

            onClick={props.onClick}
            // value={props.collapsed}
        />
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    color?: string
    onChange: () => void
    onClick: (val: boolean) => void
    // value: boolean

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    return <div>

        <h3 style={{color: props.color ? props.color : 'black'}}
            onClick={ (e) => { props.onChange() } }>---{props.title}---</h3>
    </div>
}

function AccordionBody() {
    console.log('AccordionBody rendering')

    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            {/*если меняется СОСТАВ массива или происходит его СОРТИРОВКА index нельзя использовать*/}
            {/*{props.items.map((i, index) => <li onChange={()=> {props.onChange()} } onClick={()=> {props.onClick(i.value)} } key={index}>{i.title} </li>)}*/}
        </ul>
    </div>
}


