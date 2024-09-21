import React, { useEffect } from 'react';
import { Tabs } from 'antd'; // Make sure to import Tabs from the correct library
import MyProfile from './MyProfile';
import MyBookings from './MyBookings';
import BookingList from '../Admin_Components/BookingList';
import RoomList from '../Admin_Components/RoomList';
import AddRoom from '../Admin_Components/AddRoom';
import Users from '../Admin_Components/Users';
import './Profile.css';

function Profile() {

    const userObj = sessionStorage.getItem('userObj');
    const userDetails = userObj ? JSON.parse(userObj) : {};

    const items = [
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
        }
    ];

    // const onChange = (key) => {
    //     console.log(key);
    // };

    useEffect(() => {

        if (!userDetails) {
            document.location.href = '/login'
        }

        try {

        } catch (error) {

        }

    }, []);

    return (

        <>
            <div className="container-fluid mt-3 mb-5">
                <div className='bs mx-5'>
                    <h3 className='text-center mt-3'>Admin Panel</h3>
                    <div className="row justify-content-center w-100 mt-3 px-5" style={{ fontSize: '20px' }}>
                        <Tabs defaultActiveKey="1" items={items}  />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;

