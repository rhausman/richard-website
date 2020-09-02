import React, { useReducer, useEffect, assert } from "react";

const loadedProperty = "__loaded";

const reducer = (state, {i, type}) => {
    switch (type) {
        case "ready":
        let stateCopy = [...state];
        let itemCopy = {...stateCopy[i]}
        itemCopy[loadedProperty] = true
        stateCopy[i] = itemCopy
        //copy[i][loadedProperty] = true;
        //const copy = Object.assign({"__loaded":true}, state)
        return stateCopy;
        default:
        return state;
    }
};

const defaults = {};

export const useSequentialRenderer = (input, options = defaults) => {
    console.log("T 2 "+Array.isArray(input), input)
    const [state, dispatch] = useReducer(options.reducer || reducer, input);

    console.log("T3 " + Array.isArray(state), state)


    const index = state.findIndex(a => !a[loadedProperty]); //find the first component that isn't loaded
    const sliced = index < 0 ? state.slice() : state.slice(0, index + 1); //sliced=all rendered+ first not rendered

    const items = sliced.map((item, i) => { //transform sliced. for each (item, index)...
        function done() { //define a function which dispatches a ready property, reduces and returns the index
        dispatch({ type: "ready", i });
        return i; 
        }

        return { ...item, done }; //replace each item in sliced with the same object, but with a pointer to the done function
    });
    console.log("T4 " + Array.isArray(items))

    return { items }; //return the remaining items with the done functions
};
