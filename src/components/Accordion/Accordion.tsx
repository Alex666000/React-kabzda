import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (val: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <div>
        <AccordionTitle
            title={props.titleValue}
            onClick={props.onClick}
            value={props.collapsed}
        />
        {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}


export default Accordion;