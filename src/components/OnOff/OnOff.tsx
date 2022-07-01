import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (val: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
    // useState - означает со старта сидит false, setOn функция которую если вызвать и передать ей новое значение она этим значением перезапишет on и произойдет перерисовка компоненты:
    let [on, setOn] = useState(false) // hook
    //задаем css стили в виде объектов:
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '4px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const onClicked = () => {
        props.onChange(true)
    }
    const offClicked = () => {
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={offClicked}>off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
