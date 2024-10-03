import React, { useState } from "react"
import { context, initialState, stateType } from "./context"
function Provider({children} : any) {
   
    const [state,setState] = useState<stateType>(initialState)
    
    return (
        <context.Provider value={[state, setState]}>
            {children}
        </context.Provider>
    )
}



export default Provider