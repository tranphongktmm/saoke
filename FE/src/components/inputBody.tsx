import React, { useContext } from 'react';
import '../App.css'
import { context } from '../hooks/useStore';

function InputBody ({type, tittle,name,value,method} : any) {

    const [state,dispatch] = useContext(context)
    return (
        <div className=''>
            <p className='text-left font-medium text-sm pb-1'>{tittle}</p>
            <input
                value={value}
                type={type}
                placeholder='Search'
                name={name}
                onChange={(e) => dispatch(method(e.target.value))}
                className='border-solid border w-full p-2 rounded-lg'
                />
        </div>
    )
}

export default InputBody