import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';

test('collapsed is true?', () => {
    // data
    const state: StateType = {
        collapsed: false
    }
    // actions
    // диспатчим экшн тестируем...
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // expect
    expect(newState.collapsed).toBe(true)
})


test('collapsed is false', () => {
    // data
    const state: StateType = {
        collapsed: true
    }
    // actions
    // диспатчим экшн тестируем...
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // expect
    expect(newState.collapsed).toBe(false)
})

test('error', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // если тип с "фейковым" типом:
    expect( () => {
        reducer(state, {type: 'FAKE'})
    } ).toThrowError()

    // expect

})