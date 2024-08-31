import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleRoom } from '../../Services/Api';
import './Booking.css';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';

function Booking() {

    const { roomid } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [room, setRoom] = useState();

    useEffect(() => {
        getRoom();
    }, []);

    const getRoom = async () => {
        try {
            setLoading(true);
            const response = await getSingleRoom(roomid);
            console.log(response.data);
            setRoom(response.data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    return (
        <div className='m-5'>
            {loading ? (<Loader />) : room ? (
                <div className='room pt-3 pb-5'>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-5">
                            <h2 className='pb-2'>{room.name}</h2>
                            <img className='room-img w-100' src={room.imagesurls[0]} />
                        </div>

                        <div className="col-md-5">
                            <div style={{ textAlign: 'right' }}>
                                <h2 className='pb-2'>Booking Details</h2>
                                <hr />
                                <b>
                                    <p>Name :</p>
                                    <p>From Date :</p>
                                    <p>To Date :</p>
                                    <p>Max Count : {room.maxCount}</p>
                                </b>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <h2>Amount</h2>
                                <hr />
                                <b>
                                    <p>Total days : </p>
                                    <p>Rent per day : {room.rentperday}</p>
                                    <p>Total Amount : </p>
                                </b>
                            </div>
                            <div style={{ float: 'right' }}>
                                <button className='btn btn-primary'>Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<Error />)}
        </div>
    );
}

export default Booking