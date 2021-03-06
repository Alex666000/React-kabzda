import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './UncontrolledOnOff/UncontrolledOnOff';
import {UnControlledRating} from './components/UnControledRating/UnControledRating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UnControlledAccordion';
import {OnOff} from './components/OnOff/OnOff';
import accordion from './components/Accordion/Accordion';

const App = (props: any) => {
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <Accordion onChange={()=> {setAccordionCollapsed(!accordion)} } titleValue={'Users'} collapsed onClick={setAccordionCollapsed} items={[
                {title:"Dima", value: 1},
                {title:"Valera", value:2 } ,
                {title:"Artem", value:3 },
                {title:"Victor", value:4 }
            ]}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff defaultOn onChange={x=>x}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating onChange={()=>{setRatingValue(5)} }/>
        </div>
    );
};

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendered')
    return <h1>{props.title}</h1>
}
export default App;
