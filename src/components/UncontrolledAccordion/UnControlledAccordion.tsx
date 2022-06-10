import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean // вместо коллапса сделать локальный стейт
}
function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('Accordion rendering')

    const [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle callback={setCollapsed(!collapsed)} title={props.titleValue}/><button onClick={() => {setCollapsed(!collapsed)
        }}>TOGGLE
        </button>

        {/*/!*Условный рендеринг: либо отрисуем компонент либо нет.  Выражение props.collapsed === false превратиться в true тогда <AccordionBody/> отрисуется ЭТО ЗАМЕНА ДЛИННОМУ IF  --  ELSE*!/ Если не свернут то покажи <AccordionBody/>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    callback: (e: number) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    return <div>
        <h3 onClick={ (e) => { props.callback() } }>---{props.title}---</h3>
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


export default UncontrolledAccordion;