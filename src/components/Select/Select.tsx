import React, {useState} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value?: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hovered, setHovered] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hovered)
    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    return (
        <>
            <select>
                <option value={''}>Minsk</option>
                <option value={''}>Moscow</option>
                <option value={''}>Kiev</option>
            </select>
            {/*класс select всегда, а класс active если активен элемент*/}
            <div className={styles.select}>
                <div>
                    <span className={styles.main} onClick={toggleItems}>
                        {selectedItem && selectedItem.title} </span>
                    {/*элементы*/}
                    {active && <div className={styles.items}>
                        {props.items.map(i => <div className={styles.item + '' + (hovered === i ? styles.selected : '')}
                            key={i.value}
                            onClick={onItemClick}
                        >{i.title}</div>)}
                    </div>
                    }


                </div>
            </div>
        </>
    );
}