import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo',
    // component: Button,
}

function generateData() {
    console.log('generateData')
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    // const initialValue = useMemo(generateData,[])

    const [counter, setCounter] = useState(generateData) // [568235520935, function(newValue)]

    /* const changer = (state: number) => {
         debugger
         return state + 1
     }*/

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}