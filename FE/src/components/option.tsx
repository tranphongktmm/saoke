import React from 'react';
import '../App.css'

function OptionBody ({value} : any) {
    return (
       <option value={value}>{value}</option>
    )
}

export default OptionBody