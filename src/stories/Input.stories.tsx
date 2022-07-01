// storybook - это стенд компонент...
import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
// настройки:
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

export const ControlledInput = () => {
    const [parentValue,setParentValue] = useState("")
    // action выплевывает колбек - что же прило в наш колбек какие значения - превращается в колбек с бесконечным количеством аргументов:
   // return <input value={parentValue} onChange={action("Want to change")}/>
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={ onChange }/>
}

export const ControlledCheckbox = () => {
    const [parentValue,setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={ onChange }/>
}

export const ControlledSelect = () => {
    // const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const [parentValue, setParentValue] = useState<string | undefined>("3") /*захардкодили значение на Kiev*/
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value) /*берем значение*/
    }
    // select по умолчанию неконтролируемый
        return <select value={parentValue} onChange={onChange}>
            {/*у опций значение как правило id*/}
            <option>none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moscow</option>
            <option value={"3"}>Kiev</option>
        </select>




    // export const ControlledInputFixedValue = () => <input value="It-incubator"/>
}
