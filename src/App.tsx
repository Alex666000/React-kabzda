import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <input/>
            <input checked={true} value='yo' type={"password"}/>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendered')
    return <>This is App component</>
}

export default App;
