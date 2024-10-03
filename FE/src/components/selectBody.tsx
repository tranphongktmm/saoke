import React, { useContext } from 'react';
import '../App.css'
import { context } from '../hooks/useStore';


function SelectBody ({tittle,name,value,method,children}: any) {

    const [state,dispatch] = useContext(context)

    return (
        <div className=''>
            <p className='text-left font-medium text-sm pb-1'>{tittle}</p>
            <select 
                name={name} 
                value={value}
                id={name}
                onChange={(e) => dispatch(method(e.target.value))}
                className='border-solid border w-full p-2 rounded-lg'
            >
                {children}
            </select>
            
        </div>
    )
}

export default SelectBody