import React, {useEffect, useState} from 'react';
import {AnalogClockView} from './AnalogClockView';
import {DigitalClockView} from './DigitalClockView';

type PropsType = {
    mode?: 'analog' | 'digital'
}

export const getTwoDigitsString = (num: number) => {
    // return date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return num < 10 ? '0' + num : num
}
// часы:
export const Clock: React.FC<PropsType> = (props) => {
    console.log('TICK..............')
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])
    // если кол-во секунд меньше 10 - то в начало добавляем нолик:
    const secondsString = getTwoDigitsString(date.getSeconds())
    const minutesString = getTwoDigitsString(date.getMinutes())
    const hoursString = getTwoDigitsString(date.getHours())

    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }
    return <div>
        {view}
    </div>
}

// общий пропс для DigitalClockView и AnalogClockView - этот родительский пропс отсавим в этом родительском файле:
export type ClockViewPropsType = {
    date: Date
}






