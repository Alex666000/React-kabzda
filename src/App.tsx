import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UnControlledAccordion';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './UncontrolledOnOff/UncontrolledOnOff';
import {UnControlledRating} from './components/UnControledRating/UnControledRating';


const App = (props: any) => {
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <Accordion titleValue={'Menu'} collapsed onClick={x=>x}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <OnOff on={true} onClick={x=>x}/>
            <UncontrolledOnOff defaultOn onChange={x=>x}/>
            <Rating value={0} onClick={x => x}/>
            <UnControlledRating onChange={x => x}/>
        </div>
    );
};
;

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendered')
    return <h1>{props.title}</h1>
}

export default App;
