import React, { useState, useEffect } from 'react'
import { getRoomList } from '../../Services/Api';
import Room from '../Room_Components/Room';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';
import { DatePicker, Space } from 'antd';
//import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;
import moment from 'moment';

function Hotel() {

    const [roomList, setRoomList] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();

    useEffect(() => {
        getList()
    }, []);

    const getList = async () => {
        try {
            setLoading(true)
            const response = await getRoomList();

            console.log(response.data);

            if (response.status === 200) {
                setRoomList(response.data);
                setLoading(false)
            }
        } catch (error) {
            setError(true)
            console.log(error.message);
            setLoading(false)
        }
    }

    const filterByDate = (dates) => {
        console.log(dates);

        if (dates && dates.length === 2) {
            const fromDate = moment(dates[0]).format('DD-MM-YYYY');
            const toDate = moment(dates[1]).format('DD-MM-YYYY');

            console.log('from', fromDate);
            console.log('to', toDate);

        } else {
            console.error('Invalid dates input:', dates);
        }
    };


    return (
        <>
            <div className='container'>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <RangePicker onChange={filterByDate} />
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    {loading ? (<Loader />) : roomList.length > 1 ? (roomList.map((room, index) => {
                        return <div className="col-md-9 mb-5" key={index}>
                            <Room rooms={room} fromdate={fromdate} todate={todate} />
                        </div>
                    })) : (<Error />)}
                </div>
            </div>
        </>
    )
}

export default Hotel