import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Rating, RatingValueType} from './Rating';
// настройки
export default {
    title: 'Rating stories',
    component: Rating,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Rating>;
// сценарии:
export const EmptyRating: ComponentStory<typeof Rating> = (args) => <Rating value={0} onClick={x => x} />;
export const Rating1: ComponentStory<typeof Rating> = (args) => <Rating value={1} onClick={x => x} />;
export const Rating2: ComponentStory<typeof Rating> = (args) => <Rating value={2} onClick={x => x} />;
export const Rating3: ComponentStory<typeof Rating> = (args) => <Rating value={3} onClick={x => x} />;
export const Rating4: ComponentStory<typeof Rating> = (args) => <Rating value={4} onClick={x => x} />;
export const Rating5: ComponentStory<typeof Rating> = (args) => <Rating value={5} onClick={x => x} />;
export const RatingChanging: ComponentStory<typeof Rating> = (args) => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} onClick={setRating} />;
}

