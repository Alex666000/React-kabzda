import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/onOff';


const App = (props: any) => {
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

    return (
        <div className="App">
            <OnOff
                on={on}
                onClick={ setOn}/>

            {/*<UncontrolledOnOff/>*/}

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onClick={setAccordionCollapsed}
            />*/}

            {/*<UnControlledAccordion titleValue={'Menu'}/>*/}
            {/*<UnControlledRating />*/}
            {/*  <input/>
            <input checked={true} value="yo" type={'password'}/>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>
            Article1
            <Rating value={3}/>

            <Accordion collapsed={true} titleValue={'My name is'}/>
            <Accordion collapsed={false} titleValue={'Hello you!!!!!!!!!!'}/>

            Article2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            {/*// если компоненту отрисовать дважды у каждой компоненты будет свой локальный стейтю Две разные отрисовки компонента я храню свои данные для каждой отрисовки*/}
            {/*<OnOff on={true}/>
            <OnOff on={false}/>*/}
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
