import React, {useState} from 'react';

type OnOffPropsType = {
    // on: boolean
}

const OnOff = (props: OnOffPropsType) => {
    // useState - означает со старта сидит false, setOn функция которую если вызвать и передать ей новое значение она этим значением перезапишет on и произойдет перерисовка компоненты:

    let [on,setOn] = useState(false) // hook

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
            <div style={onStyle} onClick={ () => { setOn(true) } }>on</div>
            <div style={offStyle} onClick={ () => { setOn(false)} }>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;