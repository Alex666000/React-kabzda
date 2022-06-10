import React, {useState} from 'react';

type RatingProps = {
    // value: 1 | 2 | 3 | 4 | 5 | 0
}

export function UnControlledRating(props: RatingProps) {
    console.log('Rating rendering')

    // const selected = true
    const [value, setValue] = useState(0)

    return (
        <div>
            {/* кликает по 4 звезде подсветяться все предыдущие:*/}
            <Star callback={ () => {setValue(1)} } selected={value > 0}/>
            <button onClick={ () => { setValue(1) } }>1</button>
            <Star callback={ () => {setValue(2)} }  selected={value > 1}/>
            <button onClick={ () => { setValue(2) } }>2</button>
            <Star callback={ () => {setValue(3)} }  selected={value > 2}/>
            <button onClick={ () => { setValue(3) } }>3</button>
            <Star callback={ () => {setValue(4)} }  selected={value > 3}/>
            <button onClick={ () => { setValue(4) } }>4</button>
            <Star callback={ () => {setValue(5)} }  selected={value > 4}/>
            <button onClick={ () => { setValue(5) } }>5</button>
        </div>
    );
}


type StarPropsType = {
    selected: boolean
    callback: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendered')

    return props.selected
        ? <span onClick={ () => {props.callback()} }><b>star </b></span>
        : <span onClick={ () => {props.callback()} }>star </span>
}