import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App(props: any) {
    console.log('App rendering')
    return (
        <div className="App">
            <input/>
            <input checked={true} value='yo' type={"password"}/>
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
            <Rating value={5 }/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendered')
    return <h1>{ props.title }</h1>
}

export default App;
