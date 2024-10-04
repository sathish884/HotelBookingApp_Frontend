import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Booking.css';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';
import moment from 'moment';
import { getSingleRoom, bookingRooms } from '../../Services/Api';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';


function Booking() {
    const { roomid } = useParams();
    const location = useLocation();
    const { fromdate, todate } = location.state;
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [room, setRoom] = useState(null);

    const fromDateMoment = moment(fromdate, 'DD-MM-YYYY');
    const toDateMoment = moment(todate, 'DD-MM-YYYY');
    const totaldays = moment.duration(toDateMoment.diff(fromDateMoment)).asDays() + 1;

    const totalamount = room ? room.rentperday * totaldays : 0;

    useEffect(() => {
        const getRoom = async () => {
            try {
                setLoading(true);
                const response = await getSingleRoom(roomid);
                setRoom(response.data);
                setLoading(false); // Ensure loading is stopped after success
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        getRoom();
    }, [roomid]);

    const onToken = async (token) => {

        const userObj = sessionStorage.getItem('userObj');

        if (!userObj) {
            console.log("User is not logged in.");
            return;
        }

        const userId = JSON.parse(userObj)._id;

        const body = {
            room: {
                name: room.name,
                _id: room._id
            },
            userid: userId,
            fromdate,
            todate,
            totalamount,
            totaldays,
            token
        };

        try {
            setLoading(true)
            await bookingRooms(body);
            setLoading(false);
            Swal.fire('Congratulation', 'Your room booked successfully', 'success').then(result => {
                navigate('/profile')
            })
        } catch (err) {
            setLoading(false);
            Swal.fire('Oops', 'Somthing went wrong', 'error')
        }
    }

    return (
        <>
            <div className="container booking-section">


                <div className='m-5 booking-items'>
                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <Error />
                    ) : room ? (
                        <div className='room pt-3 pb-5'>
                            <div className="row justify-content-center mt-5">
                                <div className="col-md-5">
                                    <h2 className='pb-2'>{room.name}</h2>
                                    {room.imagesurls && room.imagesurls.length > 0 ? (
                                        <img className='room-img w-100' src={room.imagesurls[0]} alt="Room" />
                                    ) : (
                                        <p>No image available</p>
                                    )}
                                </div>

                                <div className="col-md-5">
                                    <div style={{ textAlign: 'right' }}>
                                        <h2 className='pb-2'>Booking Details</h2>
                                        <hr />
                                        <b>
                                            <p><span style={{fontSize:'17px'}}>Name</span>&nbsp;: {room.name}</p>
                                            <p><span style={{fontSize:'17px'}}>From Date</span>&nbsp;: {fromdate}</p>
                                            <p><span style={{fontSize:'17px'}}>To Date</span>&nbsp;: {todate}</p>
                                            <p><span style={{fontSize:'17px'}}>Max Count</span>&nbsp;: {room.maxCount}</p>
                                        </b>
                                    </div>

                                    <div style={{ textAlign: 'right' }}>
                                        <h2>Amount</h2>
                                        <hr />
                                        <b>
                                            <p><span style={{fontSize:'17px'}}>Total days</span>&nbsp;: {totaldays}</p>
                                            <p><span style={{fontSize:'17px'}}>Rent per day</span>&nbsp;: {room.rentperday}</p>
                                            <p><span style={{fontSize:'17px'}}>Total Amount</span>&nbsp;: {totalamount}</p>
                                        </b>
                                    </div>

                                    <div style={{ float: 'right' }}>
                                        <StripeCheckout
                                            amount={totalamount * 100}
                                            token={onToken}
                                            currency='INR'
                                            stripeKey="pk_test_51PxieW2KGc3uEogJDyCiZ62PeZ5Y7aKYqjJfIpD9pWC1aascvQo2zZjdsVBK0uw0CljB40QKggvLmKwHAf1mbsiU00A7ZjVDI1"
                                        >
                                            <button className='btn btn-primary'>Pay Now</button>
                                        </StripeCheckout>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Error message="Room not found" />
                    )}
                </div>
            </div>
        </>
    );
}

export default Booking