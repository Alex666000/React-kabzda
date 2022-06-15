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
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>

        </div>
    );
}


type StarPropsType = {
    selected: boolean
    setValue: () => void

}

function Star(props: StarPropsType) {
    console.log('Star rendered')

    return <span onClick={ ()=> { props.setValue() } }>{props.selected ? <b> star </b> : ' star'}</span>
}

