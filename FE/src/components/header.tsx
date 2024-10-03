import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Header ({method}: any) {

    return (
        <div className=" flex flex-row p-5 shadow-lg">
            <div className="basis-1/4 font-bold">Bão số 3 Yagi</div>
            <div className="basis-1/2"></div>
            <div className="basis-1/12">
                <a href='http://localhost:3000/'>Trang chủ</a>
            </div>
            <div className="basis-1/12">
                <a href="#">Thống kê</a>
            </div>
            <button 
                className="basis-1/12"
                onClick={method}>
                <FontAwesomeIcon icon={faMoon} />
            </button>
        </div>
    )
}

export default Header

