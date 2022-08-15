import {Clock} from './Clock';

export default {
    title: 'Clock',
    component: Clock
}

export const AnalogClockHistory = () => {
    return <Clock mode={'analog'}/>
}

export const DigitalClockHistory = () => {
    return <Clock mode={'digital'}/>
}