import React, {useState} from 'react';

type OnOffPropsType = {
    defaultOn?: boolean
    onChange?: (on: boolean) => void
    // on: boolean
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {
    let [on,setOn] = useState(props.defaultOn ? props.defaultOn : false)
    //задаем css стили в виде объектов:
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '4px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'

    }

    return (
        <div>
            <div
                style={onStyle}
                onClick={ () => { setOn(!on) } }
            >on</div>
            <div style={offStyle} onClick={ () => { setOn(!on)} }>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

