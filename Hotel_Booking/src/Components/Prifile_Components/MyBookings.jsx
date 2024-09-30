import React, { useEffect, useState } from 'react'
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';
import { getRoomsByUser, cancelBookingRooms } from '../../Services/Api';
import Swal from 'sweetalert2';
import { Tag } from 'antd';
import './Profile.css'

function MyBookings() {

    // State to store the list of bookings, loading state, and error state
    const [bookingList, setBookingList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Retrieving user details from session storage
    const userObj = sessionStorage.getItem('userObj');
    const userDetails = userObj ? JSON.parse(userObj) : {};

    // useEffect to fetch bookings data when component mounts or user details change
    useEffect(() => {
        const fetchBookings = async () => {
            const body = {
                userid: userDetails._id
            };
            try {
                // Set loading state to true before fetching data
                setLoading(true);
                const response = await getRoomsByUser(body);
                // Update booking list with fetched data
                setBookingList(response.data);
                // Set loading to false after data is fetched
                setLoading(false);
            } catch (error) {
                // Handle any errors during fetching
                setLoading(false);
                setError(error);
            }
        };

        fetchBookings();
    }, [userDetails._id]); // Effect depends on userDetails._id to re-run if it changes

    // Function to cancel a booking
    const cancelBooking = async (bookingid, roomid) => {
        const body = {
            bookingid,
            roomid
        };
        try {
            // Set loading state to true before making the cancel request
            setLoading(true);
            const response = await cancelBookingRooms(body);
            setLoading(false);
            // Display success message and reload the page upon successful cancellation
            Swal.fire('Congrats', 'Your booking has been cancelled', 'success').then(result => {
                document.location.reload();
            });
        } catch (error) {
            // Handle cancellation errors
            console.log(error);
            setLoading(false);
            setError(error);
            // Display error message if something goes wrong
            Swal.fire('Oops', 'Something went wrong', 'error');
        }
    };

    return (
        <div className="container booking-container">
            {/* Show loader if data is still being fetched */}
            {loading && (<Loader />)}

            {/* Check if there are any bookings to display */}
            {bookingList.length > 0 ? (
                <div className="row">
                    {/* Map through bookingList to display each booking in a card */}
                    {bookingList.map((booking, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
                            {/* Card for each booking with a hover animation */}
                            <div className="card booking-card w-100">
                                <div className="card-body">
                                    <h3 className='text-center mb-3'>{booking.room}</h3>
                                    {/* Display booking details */}
                                    <p><b>Booking ID</b>: <span className='p-3'>{booking._id}</span></p>
                                    <p><b>Check In</b>: <span className='p-3'>{booking.fromdate}</span></p>
                                    <p><b>Check Out</b>: <span className='p-3'>{booking.todate}</span></p>
                                    <p><b>Amount</b>: <span className='p-3'>{booking.totalamount}</span></p>
                                    {/* Display booking status with color tags */}
                                    <p><b>Status</b>: {booking.status === 'booked' ? (
                                        <Tag color="green">CONFIRMED</Tag>) : (
                                        <Tag color="red">CANCELLED</Tag>)}
                                    </p>
                                    {/* Show Cancel button if the booking is not already cancelled */}
                                    {booking.status !== 'cancelled' && (
                                        <button className='btn btn-danger float-end' onClick={() => { cancelBooking(booking._id, booking.roomid) }}>
                                            Cancel Booking
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // If no bookings are available, show a message
                <p>No bookings available.</p>
            )}
        </div>

    );
}

export default MyBookings