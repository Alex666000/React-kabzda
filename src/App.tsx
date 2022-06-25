import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './UncontrolledOnOff/UncontrolledOnOff';
import {UnControlledRating} from './components/UnControledRating/UnControledRating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UnControlledAccordion';
import {OnOff} from './components/OnOff/OnOff';


const App = (props: any) => {
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <Accordion titleValue={'Users'} collapsed onClick={setAccordionCollapsed}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <OnOff on={switchOn} onClick={setSwitchOn}/>
            <UncontrolledOnOff defaultOn={true} onChange={x=>x}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
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
