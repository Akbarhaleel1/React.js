import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'increment5':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement5':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

const UseReducerCounterTwo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Counter - {state.firstCounter}</h1>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment5', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement5', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default UseReducerCounterTwo;
