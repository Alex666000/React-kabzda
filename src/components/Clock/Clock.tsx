import React, {useEffect, useState} from 'react';

type PropsType = {}

const getTwoDigitsString = (num: number) => {
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

    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    );
};
