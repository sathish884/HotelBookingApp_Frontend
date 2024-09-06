import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './Booking.css';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';
import moment from 'moment';
import { getSingleRoom, bookingRooms } from '../../Services/Api';


function Booking() {
    const { roomid } = useParams();
    const location = useLocation();
    const { fromDate, toDate } = location.state;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [room, setRoom] = useState(null);

    const fromDateMoment = moment(fromDate, 'DD-MM-YYYY');
    const toDateMoment = moment(toDate, 'DD-MM-YYYY');
    const totaldays = moment.duration(toDateMoment.diff(fromDateMoment)).asDays() + 1;

    const totalamount = room ? room.rentperday * totaldays : 0;

    useEffect(() => {
        const getRoom = async () => {
            try {
                const response = await getSingleRoom(roomid);
                setRoom(response.data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        getRoom();
    }, [roomid]);

    const handleBooking = async () => {
        const body = {
            room: {
                name: room.name,
                _id: room._id
            },
            userid: JSON.parse(sessionStorage.getItem('userObj'))._id,
            fromDate,
            toDate,
            totalamount,
            totaldays
        };
        try {
            await bookingRooms(body);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className='m-5'>
            {loading ? (
                <Loader />
            ) : error ? (
                <Error />
            ) : (
                <div className='room pt-3 pb-5'>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-5">
                            <h2 className='pb-2'>{room.name}</h2>
                            <img className='room-img w-100' src={room.imagesurls[0]} alt="Room" />
                        </div>

                        <div className="col-md-5">
                            <div style={{ textAlign: 'right' }}>
                                <h2 className='pb-2'>Booking Details</h2>
                                <hr />
                                <b>
                                    <p>Name: {room.name}</p>
                                    <p>From Date: {fromDate}</p>
                                    <p>To Date: {toDate}</p>
                                    <p>Max Count: {room.maxCount}</p>
                                </b>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <h2>Amount</h2>
                                <hr />
                                <b>
                                    <p>Total days: {totaldays}</p>
                                    <p>Rent per day: {room.rentperday}</p>
                                    <p>Total Amount: {totalamount}</p>
                                </b>
                            </div>

                            <div style={{ float: 'right' }}>
                                <button className='btn btn-primary' onClick={handleBooking}>Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Booking