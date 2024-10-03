import { createContext, useReducer } from "react";
import Reducer, { initialState } from "./reducer";

export const context = createContext<any>(null)

function UseStore() {
    const [state,dispatch] = useReducer(Reducer,initialState)

    return [state,dispatch]
}

export default UseStore;