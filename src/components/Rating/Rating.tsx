import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingProps = {
    value: RatingValueType
    onClick: (num: RatingValueType) => void
}

export function Rating(props: RatingProps) {
    console.log('Rating rendering')

    return (
        <div>
            {/*подсветка звездочек в рейтинге со знаком больше делается:*/}
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2} />
            <Star selected={props.value > 2} onClick={props.onClick} value={3} />
            <Star selected={props.value > 3} onClick={props.onClick} value={4} />
            <Star selected={props.value > 4} onClick={props.onClick} value={5} />
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    onClick: (num: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    console.log('Star rendered')
    return <span onClick={() => {
        debugger
        props.onClick(props.value)
    } }>{props.selected ? <b>star </b> : ' star '}</span>
}

