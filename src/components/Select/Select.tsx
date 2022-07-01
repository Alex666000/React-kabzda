import React from 'react';

type ItemType = {
    title: string
    value: any // что угодно, если сообщим родителю наверх что что-то кликнуто - любого типа данных
}

type SelectProps = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectProps) {
    console.log('Select rendering')

    return (
        <div>
            <div>
                {/*{props.items.find(item => item.value===props.value)}*/}
            </div>
            {/*{props.map(item => <div>{item.title}</div>)}*/}

            {/*подсветка звездочек в рейтинге со знаком больше делается:*/}
            {/*{props.map(i => <div>{i.title}</div>)}*/}
        </div>
    );
}