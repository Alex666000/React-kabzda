import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';

const App = (props: any) => {
    console.log('App rendering')

    // const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    // const [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className="App">
            <Accordion
                color={'red'}
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
                items={[]}
                onClick={(value: any) => {setAccordionCollapsed(!value)} }
            />
        </div>
    );
};
/*

    return (
        <div className="App">
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={()=> {setAccordionCollapsed(!accordionCollapsed)} } />
            <Accordion onChange={()=> {setAccordionCollapsed(!accordion)} } titleValue={'Users'} collapsed onClick={() => setAccordionCollapsed(false)} items={[
                {title:"Dima", value: 1},
                {title:"Valera", value:2 },
                {title:"Artem", value:3 },
                {title:"Victor", value:4 }
            ]}/>
           <UncontrolledAccordion titleValue={'Menu'}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            // <UncontrolledOnOff />

            *<Rating value={ratingValue} onClick={setRatingValue} />
            <UnControlledRating onChange={()=>{setRatingValue(5)} }/>
        </div>
    );
};
*/


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendered')
    return <h1>{props.title}</h1>
}


export default App

