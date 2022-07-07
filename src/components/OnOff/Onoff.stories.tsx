import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';
// настройки
export default {
    title: 'OnOff',
    component: OnOff
} as ComponentMeta<typeof OnOff>;
// сценарии:
const callback = action('on or off clicked')
//
export const OnMode = () => <OnOff on={true} onChange={callback} />
//
export const OffMode = () => <OnOff on={false} onChange={callback} />
//
export const ChangeMode = () => {
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    return <OnOff on={switchOn} onChange={(value: boolean) => {setSwitchOn(value)} } />
}

// export const OnMode: ComponentStory<typeof OnOff> = (args) => <OnOff on={true} onChange={callback}/>;
// export const OffMode: ComponentStory<typeof OnOff> = (args) => <OnOff on={false} onChange={callback}/>;
// export const ModeChanging: ComponentStory<typeof OnOff> = (args) => {
//     const [value, setValue] = useState<boolean>(true)
//
//     return <OnOff on={value} onChange={setValue}/>;
// }


