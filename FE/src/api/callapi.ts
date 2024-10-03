import axios from "axios";
import UseStore from "../hooks/useStore";
    
const baseURL =  "http://localhost:8080"

// function Parameter(): string{
//     const [state,dispatch] = UseStore()
//     const {search,startDate,endDate,line,follow,sort,money,bank,todos} = state
//     const param = `?search=${search}&startDate=${startDate}&endDate=${endDate}&line=${line}&follow=${follow}&
//                 sort=${sort}&money=${money}&bank=${bank}`
//     return param
// }

export async function fetchData() {
    
    try{
        const response = await axios.get(`${baseURL}/bidv`)
        const data = await response.data
        return data        
    }catch(error) {
        console.error(error)
        return null
    }
}

export async function fetchDataparam(path: any) {
    try{
        const response = await axios.get(`${baseURL}/bidv${path}`)
        const data = await response.data
        return data        
    }catch(error) {
        console.error(error)
        return null
    }
}

