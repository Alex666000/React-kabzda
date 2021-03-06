import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean // вместо коллапса сделать локальный стейт
}
export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('Accordion rendering')
    const [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={ () => { setCollapsed(!collapsed) } }/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    return <div>
        <h3 onClick={ ()=> {props.onClick()}}>---{props.title}---</h3>
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
