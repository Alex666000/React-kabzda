// DigitalClockView:
import React from 'react';
import {ClockViewPropsType, getTwoDigitsString} from './Clock';

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <div>
            <span>{getTwoDigitsString(date.getHours())}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    );
};