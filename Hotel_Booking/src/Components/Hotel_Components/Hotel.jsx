import React, { useState, useEffect } from 'react'
import { getRoomList } from '../../Services/Api';
import Room from '../Room_Components/Room';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';
import { DatePicker, Space } from 'antd';
//import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;
import moment from 'moment';
import './Hotel.css'

function Hotel() {

    const [roomList, setRoomList] = useState([]);
    const [duplicaterooms, setDuplicaterooms] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();
    const [searchkey, setSearchKey] = useState('')
    const [type, setType] = useState('all')

    useEffect(() => {
        const getList = async () => {
            try {
                setLoading(true);
                const response = await getRoomList();
                setRoomList(response.data);
                setDuplicaterooms(response.data); // Store unfiltered rooms
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.response.data);
            }
        };
        getList();
    }, []);


    // Filter the rooms by date
    const filterByDate = (dates) => {
        if (dates && dates.length === 2) {
            const startDate = dates[0].$d;
            const endDate = dates[1].$d;

            const fromDate = moment(startDate).format('DD-MM-YYYY');
            const toDate = moment(endDate).format('DD-MM-YYYY');
            setFromDate(fromDate);
            setToDate(toDate);

            // Filter rooms based on availability
            const filteredRooms = duplicaterooms.filter(room => {
                return room.currentbooking.every(bookedRange => {
                    const bookedFrom = moment(bookedRange.fromdate, 'DD-MM-YYYY');
                    const bookedTo = moment(bookedRange.todate, 'DD-MM-YYYY');

                    // Check if selected date range overlaps with booked date range
                    return (
                        moment(fromDate, 'DD-MM-YYYY').isAfter(bookedTo) ||
                        moment(toDate, 'DD-MM-YYYY').isBefore(bookedFrom)
                    );
                });
            });

            setRoomList(filteredRooms); // Update the room list with available rooms
        }
    };

    // Filter the rooms by search
    const filterBySearch = () => {
        const temprooms = duplicaterooms.filter(room => room.name.toLowerCase().includes(searchkey.toLowerCase()));
        setRoomList(temprooms)
    }

    // Filter the rooms by type
    const filterByType = (e) => {
        setType(e)
        if (e != 'all') {
            const temprooms = duplicaterooms.filter(room => room.name.toLowerCase() == e.toLowerCase());
            setRoomList(temprooms)
        } else {
            setRoomList(duplicaterooms)
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center p-5" style={{ minHeight: '60vh', flexDirection: 'column' }}>
            <div className="row hotel-backimg">
            {error ? <Error error={error} /> : ""}
                <div className="d-flex flex-row justify-content-center align-items-center bs filter-box">

                    <div className="col-md-3">
                        <RangePicker format={'DD-MM-YYYY'} onChange={filterByDate} />
                    </div>

                    <div className="col-md-3">
                        <input type='text' className='form-control' value={searchkey} onChange={(e) => { setSearchKey(e.target.value) }} onKeyUp={filterBySearch} placeholder='Search rooms' />
                    </div>

                    <div className="col-md-3">
                        <select className='form-control' value={type} onChange={(e) => { filterByType }}>
                            <option value="all">All</option>
                            <option value="delux">Delux</option>
                            <option value="non-delux">Non-Delux</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className="row justify-content-center w-100">
                {loading ? (<Loader />) : (
                    roomList.map((room, index) => (
                        <div className="col-md-9 mb-5" key={index}>
                            <Room rooms={room} fromdate={fromdate} todate={todate} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );

}

export default Hotel


