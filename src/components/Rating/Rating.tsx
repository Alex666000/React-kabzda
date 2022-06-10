import React from "react";

type RatingProps = {
    value: 1 | 2 | 3 | 4 | 5 | 0
}

export function Rating(props: RatingProps) {
    console.log('Rating rendering')

    return (
        <div>
            {/*подсветка звездочек в рейтинге со знаком больше делается:*/}
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
            <Star selected={props.value > 5}/>
        </div>
    );
}


type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendered')

    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }


}