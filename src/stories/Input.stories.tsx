import React, {useRef, useState} from 'react';
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

    return (
        <> <input
            onChange={(e) => {
                e.currentTarget.value;
                setValue(e.currentTarget.value)
            }}
            value={value}/> ---- {value}
        </>
    )
}
export const GetValueOfUncontrolledInputByPressButton = () => {
    const [value, setValue] = useState<>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = (e: React.MouseEvent<HTMLButtonElement>) => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <>
        (<input ref={inputRef}/>
        <button
            onClick={save}
        >save
        </button>
        --- actual value: {value}
        )
    </>
}


