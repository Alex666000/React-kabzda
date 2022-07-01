// storybook - это стенд компонент
import React, {ChangeEvent, MouseEventHandler, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

// настройки
export default {
    title: 'input',
    // component: input,
}

export const UncontrolledInput = () => <input/>
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('')
    // у некотролируемого инпута можем прокинуть колбек и на изменения получать инфу что поменялось:
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <>
        <input onChange={onChange}/>
        --- {value} ---
    </>
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


export const ControlledInputFixedValue = () => <input value="It-incubator"/>

