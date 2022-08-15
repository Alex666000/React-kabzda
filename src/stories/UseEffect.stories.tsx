import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect',
    // component: Button,
}

export const SimpleExample1 = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    useEffect(() => {
        console.log('Сработает при каждом "рендере" Компоненты')
        // сделаем title коунтером:
        document.title = counter.toString()
        // api.getUsers().then
        // setInterval
        // indexedDB - работа с БД локальной в браузере
        // обращение к документу document.getElementById
        // изменение title документа на вкладке браузера document.title = "User"
    },)
    useEffect(() => {
        console.log('Сработает только один раз при вмонтировании К аналог CDM')
        document.title = counter.toString()
    }, [])
    useEffect(() => {

        console.log('Когда зависимость меняется')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
    </>
}

// 2
export const SetTimeoutExample1 = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
// поменяй title всего 1 раз:
    /*
     useEffect(() => {
        setTimeout(() => {
            console.log('SetTimeout')
            document.title = counter.toString()
        }, 1000)
    }, [])  -- так как пустая зависимость
     */

    // поменяем title каждый раз при изменении counter - перезапускай эффект - если поменяем fake,то эффект не перезапуститься :

    /*useEffect(() => {
        setTimeout(() => {
            console.log('SetTimeout')
            document.title = counter.toString()
        }, 1000)
    }, [counter])*/

    /* раскоментируй и часики будут
       useEffect(() => {
       setInterval(() => {
           console.log('Tick...' + counter)
       setCounter(state => state + 1)
       }, 100000)
     }, [counter])*/

    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
    </>
}

// 3
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('Effect occurred' + counter)

        return () => {
            console.log('Reset Effect'  + counter)
        }

    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>counter+</button>
    </>
}
// 4 - отслеживаем события нажатия на клавиши за пределами К-ты:
export const KeyTrackerExample = () => {
    const [text, setText] = useState(1)

    console.log('rendered with' + text)

    useEffect(() => {
        const handler = (e: any) => {
            console.log(e.key)
            // @ts-ignore
            setText((state) => state + e.key )
        }
        // при уходе с вкладки надо очищать мусор:
       window.addEventListener('keypress', handler)
        // отписка = очистка мусора:
        return () => {
           window.removeEventListener('keypress', handler)
        }

    }, [])

    return <>
       Text: {text}
    </>
}
// 5
export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log('rendered with' + text)

    useEffect(() => {
      const timeoutId = setTimeout(() => {
            setText('3 sec.passed')
        },3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
    return <>
        Text: {text}
    </>
}


