import React from 'react';
type ItemType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Elements should be not collapsed
     */
    items: ItemType[]
    onChange: () => void
    /**
     * Color optional
     */
    onClick: (value: any) => void
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <div>
        <AccordionTitle
            title={props.titleValue}
            onChange={props.onChange}
            color={props.color}

            // value={props.collapsed}
        />
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    color?: string
    onChange: () => void
    // onClick: (val: boolean) => void
    // value: boolean

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    return <div>

        <h3 style={{color: props.color ? props.color : 'black'}}
            onClick={(e) => {
                props.onChange()
            }}>---{props.title}---</h3>
    </div>
}

type AccordionBodyPropsType = {
   items: ItemType[]
    onClick: (value: any) => void

}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')

    return <ul>
        {props.items.map((i, index) => <li onClick={ () => {props.onClick(i.value)} } key={index}>{i.title}</li>) }
        </ul>

}



