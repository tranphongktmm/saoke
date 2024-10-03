import React, { useEffect } from 'react';
import InputBody from './inputBody'
import SelectBody from './selectBody'
import OptionBody from './option'
import Table from './table'
import {setSearch, setStartDate, setEndDate,setLine,setFollow,setSort,setMoney,setBank,addToDo} from '../hooks/actions'
import UseStore, { context } from '../hooks/useStore';



function Body () {

    const [state,dispatch] = UseStore()
    const {search,startDate,endDate,line,follow,sort,money,bank,todos} = state
    // useEffect(() => {
    //     // Mỗi khi todos thay đổi, tự động lưu vào localStorage
    //     localStorage.setItem('todos', JSON.stringify(todos));
    // }, [todos]); // Mỗi khi `todos` thay đổi, effect này sẽ được chạy
    
    const handleClick = () => {
        // dispatch(addToDo({search: search,startDate: startDate,endDate: endDate}))

        localStorage.setItem('search', search)
        localStorage.setItem('startdate', startDate)
        localStorage.setItem('enddate', endDate)
        localStorage.setItem('line', line)
        localStorage.setItem('follow', follow)
        localStorage.setItem('sort', sort)
        localStorage.setItem('money', money)
        localStorage.setItem('bank', bank)
        // localStorage.setItem('todos', JSON.stringify(todos))
    }


    useEffect(() => {
        if (window.location.href == 'http://localhost:3000/'){
            localStorage.clear()
        }
        // Lấy giá trị từ localStorage khi component được mount
        const savedSearch = localStorage.getItem('search');
        const savedStartDate = localStorage.getItem('startdate');
        const savedEndDate = localStorage.getItem('enddate');
        const savedFollow = localStorage.getItem('follow');
        const savedMoney = localStorage.getItem('money');
        const savedBank = localStorage.getItem('bank');
        // const savedTodos = localStorage.getItem('todos');

        savedSearch && dispatch(setSearch(savedSearch));
        savedStartDate && dispatch(setStartDate(savedStartDate));
        savedEndDate && dispatch(setEndDate(savedEndDate));
        savedFollow && dispatch(setFollow(savedFollow));
        savedMoney && dispatch(setMoney(savedMoney));
        savedBank && dispatch(setBank(savedBank));
            
        // if (savedTodos) {
        //     dispatch(addToDo(JSON.parse(savedTodos)));
        // }

    },[]);
    return (
        <context.Provider value={[state,dispatch]}>
            <div className=''>
                <h1 className='font-bold text-lg'>Danh sách đóng góp bão số 3 Yagi cho MTTQVN</h1>
                <div className='shadow-lg rounded-md border-solid border m-5'>
                    <div className='m-5'>
                        <form method='get' action=''>
                            <div className='grid grid-cols-3 gap-4 p-2 pb-6'>
                                <InputBody tittle='Tìm kiếm' type='text' name='search' value={search} method={setSearch}/>
                                <InputBody tittle='Từ ngày' type='date' name='startdate' value={startDate} method={setStartDate}/>
                                <InputBody tittle='Đến ngày' type='date' name='enddate'  value={endDate} method={setEndDate}/>
                                {/* <SelectBody tittle='Số dòng trên trang' name='line' value={line} method={setLine}>
                                    <OptionBody value='10'/>
                                    <OptionBody value='25'/>
                                    <OptionBody value='50'/>
                                    <OptionBody value='100'/>
                                    <OptionBody value='200'/>
                                </SelectBody> */}
                                <SelectBody tittle='Sắp xếp theo' name='follow' value={follow} method={setFollow}>
                                    <OptionBody value='Ngày'/>
                                    <OptionBody value='Số tiền'/>

                                </SelectBody>
                                {/* <SelectBody tittle='Thứ tự sắp xếp' name='sort' value={sort} method={setFollow}>
                                    <OptionBody value='Giảm dần'/>
                                    <OptionBody value='Tăng dần'/>

                                </SelectBody> */}
                                <SelectBody tittle='Khoảng số tiền' name='money' value={money} method={setMoney}>
                                    <OptionBody value='Tất cả số tiền VND'/>
                                    <OptionBody value='0 đến 100,000 VND'/>
                                    <OptionBody value='100,000 đến 500,000 VND'/>
                                    <OptionBody value='500,000 đến 1,000,000 VND'/>
                                    <OptionBody value='1,000,000 đến 5,000,000 VND'/>
                                    <OptionBody value='5,000,000 đến 10,000,000 VND'/>
                                    <OptionBody value='10,000,000 đến 50,000,000 VND'/>
                                    <OptionBody value='Trên 50,000,000 VND'/>

                                </SelectBody>
                                <SelectBody tittle='Ngân hàng' name='bank' value={bank} method={setBank}>
                                    {/* <OptionBody value='Tất cả'/>
                                    <OptionBody value='Vietcombank'/>
                                    <OptionBody value='Vietinbak'/>
                                    <OptionBody value='Agribank'/> */}
                                    <OptionBody value='BIDV'/>
                                    {/* <OptionBody value='Tiền mặt'/> */}
                                </SelectBody>
                            </div>


                            <button
                                style={{background:'#172554',color:'#fff'}}
                                className='w-full p-2 rounded-lg border-double border-4'
                                onClick={handleClick}
                                type='submit'
                            >
                                Tìm kiếm
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </context.Provider>
    )
}

export default Body