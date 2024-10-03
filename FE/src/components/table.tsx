import React, { useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import  {fetchDataparam} from "../api/callapi"
import { useQuery } from "@tanstack/react-query";


function Table(){
    
    // const path = useMemo(() => {
    //     const path = `search?search=${search}&startdate=${startDate}&enddate=${endDate}
    //     &follow=${follow}&money=${money}&bank=${bank}`
    //     return path

    // },[todos])
    
    // const results = useQuery({
    //     queryKey:["Data"],
    //     queryFn: () => fetchData()

    // })

    const path = useMemo(() => {
        let path =''
        if(window.location.search){
            path = `/search${decodeURIComponent(window.location.search)}`
        }
        return path
    },[window.location.search])
    const results = useQuery({
        queryKey:["Data",path],
        queryFn: () => fetchDataparam(path)

    })
    const data = results.data

    return (
        <div className="shadow-lg rounded-md border-solid border m-5"> 
            <table className="min-w-full table-auto" >
                <thead className='flex flex-row' style={{background:'#ccc'}}>
                    <tr className="basis-1/12">
                        <td>
                            Ngày
                            <FontAwesomeIcon icon={faCircleDown} />
                        </td>
                    </tr>
                    <tr className="basis-1/6">
                        <td>
                            Số Tiền
                            <FontAwesomeIcon icon={faCircleDown} />
                        </td>
                    </tr>
                    <tr className="basis-1/2">
                        <td>Nội Dung</td>
                    </tr>
                    <tr className="basis-1/12">
                        <td>Ngân Hàng</td>
                    </tr>
                </thead>
                <tbody className=''>
                    {data && data.map((item: any,index: any)=> (
                        <tr className="flex flex-row border-solid border" key={index}>
                            <td className="basis-1/12">{item.date}</td>
                            <td className="basis-1/6">{item.money}</td>
                            <td className="basis-1/2">{item.description}</td>
                            <td className="basis-1/12">BIDV</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Table;