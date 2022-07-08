import React from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    console.log('Select rendering')

    return (
        <div>
            <div>
                {/*{props.items.find(item => item.value===props.value)}*/}
            </div>
        </div>
    );
}