import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";


function Page({value}: any){
    return( 
        <a href="" className="p-6">{value}</a>
    )
}

function Footer(){

    const [page,setPage] = useState(2)

    return(
        <div>
            <nav>
                <a><FontAwesomeIcon icon={faAnglesLeft} /></a>
                <a href="" className="p-6">{page-1}</a>
                <a href="" className="p-6">{page}</a>
                <a href="" className="p-6">{page+1}</a>
                <a><FontAwesomeIcon icon={faAnglesRight} /></a>
                
            </nav>
        </div>
    )
}

export default Footer;