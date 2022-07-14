import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo',

}
// 1 сценарий использования: предотвращать чрезмерное напряжение процессора батареи мобильника которое приводит к визуальной задержке, разрядке батареи, нагревания устройства и тд
export const DifficultCounting = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1

        for (let i = 0; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                let fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 0; i <= a; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={a} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}
// 2 сценарий использования: чтобы React.Memo работал корректно useMemo помогает React.Memo не ошибиться
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')

    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Valera', 'Artem', 'Alex'])
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUsers = () => {
        // users.push('Sveta' + new Date().getTime())
        setUsers(users)
    }

    return <>
        {/* так как изменится стейт  Exemple1 - пойдет перерисовка всех компонент внутри него и кнопки - jsx разметки - но </Users> не изменился он получает тот же самый массив users что и раньше  он вернет нам тот же самый jsx а значит тот же самый виртуалДОМ - значит ничего не изменится в настоящем ДОМ_е то Реакт будет напрягаться и будет делать этот пересчёт*/}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUsers()}>add_user</button>
        {counter}
        <Users users={newArray}/>
    </>
}