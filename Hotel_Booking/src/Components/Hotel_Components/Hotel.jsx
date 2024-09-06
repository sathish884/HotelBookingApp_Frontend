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
        const getList = async () => {
            try {
                setLoading(true);
                const response = await getRoomList();
                setRoomList(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false)
                setError(error.response.data)
            }
        }
        getList();
    }, []);


    const filterByDate = (dates) => {

        if (dates && dates.length === 2) {
            const startDate = dates[0].$d
            const endDate = dates[1].$d
            const fromDate = moment(startDate).format('DD-MM-YYYY');
            const toDate = moment(endDate).format('DD-MM-YYYY');
            setFromDate(fromDate);
            setToDate(toDate);
        } else {
            console.error('Invalid dates input:', dates);
        }
    };

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center p-5" style={{ minHeight: '60vh', flexDirection: 'column' }}>

                <div className="row justify-content-center w-100">
                    {error ? (<Error error={error} />) : ""}

                    <div className="col-md-3">
                        <RangePicker format={'DD-MM-YYYY'} onChange={filterByDate} />
                    </div>
                </div>

                <div className="row justify-content-center w-100">
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