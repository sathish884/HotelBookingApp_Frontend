import React, { useEffect, useState } from 'react'
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';
import { getRoomsByUser, cancelBookingRooms } from '../../Services/Api';
import Swal from 'sweetalert2';
import { Tag } from 'antd';

const styles = {
    fontSize: '17px'
}

function MyBookings() {
    const [bookingList, setBookingList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const userObj = sessionStorage.getItem('userObj');
    const userDetails = userObj ? JSON.parse(userObj) : {};

    useEffect(() => {
        const fetchBookings = async () => {
            const body = {
                userid: userDetails._id
            };
            try {
                setLoading(true);
                const response = await getRoomsByUser(body);
                setBookingList(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };

        fetchBookings();
    }, [userDetails._id]);

    const cancelBooking = async (bookingid, roomid) => {
        const body = {
            bookingid,
            roomid
        }
        try {
            setLoading(true);
            const response = await cancelBookingRooms(body);
            setLoading(false);
            Swal.fire('Congrats', 'Your booking has been cancelled', 'success').then(result => {
                document.location.reload();
            })
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
            Swal.fire('Oops', 'Something went wrong', 'error')
        }
    }

    return (
        <>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {loading && (<Loader />)}
                {bookingList.length > 0 ? (
                    bookingList.map((booking, index) => (
                        <div key={index} className="card mb-5 bs" style={{ width: '48%', marginBottom: '20px' }}>
                            <div className="card-body">
                                <div className="row">
                                    <h3 className='text-center mb-3'>{booking.room}</h3>
                                    <p style={styles}><b>Booking ID</b>: {booking._id}</p>
                                    <p style={styles}><b>CheckIn </b>: {booking.fromdate}</p>
                                    <p style={styles}><b>CheckOut </b>: {booking.todate}</p>
                                    <p style={styles}><b>Amount </b>: {booking.totalamount}</p>
                                    <p style={styles}><b>Status</b>: {booking.status === 'booked' ? (<Tag color="green">CONFIRMED</Tag>) : (<Tag color="red">CANCELLED</Tag>)}</p>
                                </div>
                                {booking.status !== 'cancelled' && (
                                    <div className="row" style={{ float: 'right' }}>
                                        <button className='btn btn-dark' onClick={() => { cancelBooking(booking._id, booking.roomid) }}>
                                            Cancel Booking
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No bookings available.</p>
                )}
            </div>

        </>
    );
}

export default MyBookings