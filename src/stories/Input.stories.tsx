import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from './Button';

export default {
    title: 'input_cat',
    // component: Input,
}

export const UncontrolledInput = () => <input/>
export const ControlledInput = () => <input value="It-cat-incubator"/>
// наблюдаем за изменением значения input в дочке:
export const TrackUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onInputChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value;
        setValue(e.currentTarget.value);
    }

    return (
        <> <input
            onChange={ onInputChangeValue }
            value={value}/> ---- {value}
        </>
    )
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    // ref позволяет нам создать ссылку на элемент и связать ее с ним и в коде обращаться к ней по каррент...
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const inputEl = inputRef.current as HTMLInputElement
        setValue(inputEl.value)
    }

    return <><input ref={inputRef} id={'inputId'}/><button onClick={save}>sav</button>actual value: {value}</>
}


