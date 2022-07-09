import React, {useState} from 'react';

export default {
    title: 'React.memo demo',
    // component: Button,
}
const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS")

    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
}
// обертка над UsersSecret - теперь КК что вылезла из React.memo не будет перезапускать UsersSecret если пропсы не изменились
// т.е мы меняем в родителе, а множество компонент внутри не меняются - не отрисовываются снова
const Users = React.memo(UsersSecret)

export const Exemple1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Valera', 'Artem','Alex'])
    // так как данные меняются не "иму-табельно", то Users не пере-рисуется хотя пере-рисовка происходит за кадром мы ее не видим
    const addUsers = () => {
        // users.push('Sveta' + new Date().getTime())
        setUsers(users)
    }

    return <>
       {/* так как изменится стейт  Exemple1 - пойдет перерисовка всех компонент внутри него и кнопки - jsx разметки - но </Users> не изменился он получает тот же самый массив users что и раньше  он вернет нам тот же самый jsx а значит тот же самый виртуалДОМ - значит ничего не изменится в настоящем ДОМ_е то Реакт будет напрягаться и будет делать этот пересчёт*/}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUsers}>add users</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}