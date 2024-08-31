import React, { useState, useEffect } from 'react'
import { getRoomList } from '../../Services/Api';
import Room from '../Room_Components/Room';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';

function Hotel() {

    const [roomList, setRoomList] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

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

    return (
        <>
            <div className='container'>
                <div className="row justify-content-center mt-5">
                    {loading ? (<Loader />) : roomList.length > 1 ? (roomList.map((room, index) => {
                        return <div className="col-md-9 mb-5" key={index}>
                            <Room rooms={room} />
                        </div>
                    })) : (<Error />)}
                </div>
            </div>
        </>
    )
}

export default Hotel