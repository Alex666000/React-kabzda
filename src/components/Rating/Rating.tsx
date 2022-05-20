import React from "react";

export function Rating() {
    console.log('Rating rendering')
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star(props: any) {
    debugger
    console.log('Star rendered')
    return <span><b>star</b></span>

}