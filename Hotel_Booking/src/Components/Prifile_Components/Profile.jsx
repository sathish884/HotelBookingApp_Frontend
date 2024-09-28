import React, { useEffect } from 'react';
import { Tabs } from 'antd'; // Make sure to import Tabs from the correct library
import MyProfile from './MyProfile';
import MyBookings from './MyBookings';
import BookingList from '../Admin_Components/BookingList';
import RoomList from '../Admin_Components/RoomList';
import AddRoom from '../Admin_Components/AddRoom';
import Users from '../Admin_Components/Users';
import './Profile.css';
import ReviewList from '../Admin_Components/ReviewList';
import ContactList from '../Admin_Components/ContactList';

function Profile() {

    const userObj = sessionStorage.getItem('userObj');
    const userDetails = userObj ? JSON.parse(userObj) : {};

    // Define the tabs
    const allItems = [
        {
            key: '1',
            label: 'Profile',
            children: <MyProfile />,
        },
        {
            key: '2',
            label: 'Booking',
            children: <MyBookings />,
        },
        {
            key: '3',
            label: 'Booking List',
            children: <BookingList />,
        },
        {
            key: '4',
            label: 'Room List',
            children: <RoomList />,
        },
        {
            key: '5',
            label: 'User List',
            children: <Users />,
        },
        {
            key: '6',
            label: 'Add Rooms',
            children: <AddRoom />,
        },
        {
            key: '7',
            label: 'Reviews',
            children: <ReviewList />,
        },
        {
            key: '8',
            label: 'Contacts',
            children: <ContactList />,
        }
    ];

    // Filter items based on the user role
    const items = allItems.filter(item => {
        if (userDetails.role === 'admin') {
            return true; // Show all tabs for admin
        } else {
            // Hide tabs 3-8 for non-admin users
            return ['1', '2'].includes(item.key);
        }
    });

    useEffect(() => {
        if (!userDetails) {
            document.location.href = '/login';
        }
    }, [userDetails]);

    return (
        <>
            <div className="container-fluid mt-3 mb-5">
                <div className='bs mx-5'>
                    <h3 className='text-center mt-3'>Admin Panel</h3>
                    <div className="row justify-content-center w-100 mt-3 px-5" style={{ fontSize: '20px' }}>
                        <Tabs defaultActiveKey="1" items={items} />
                    </div>
                </div>
            </div>
        </>
    );

}

export default Profile;

