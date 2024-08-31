import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Room.css'
import { Button, Modal, Carousel } from 'react-bootstrap';

function Room({ rooms }) {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBookingRoom = (id) => {
        navigate(`/booking-room/${id}`);
    };
    
    return (
        <>
            <div className="row bs">
                <div className="col-md-4">
                    <img src={rooms.imagesurls[0]} className='smallimg' />
                </div>
                <div className="col-md-7">
                    <h1 style={{ fontSize: '20px' }}>{rooms.name}</h1>
                    <b>
                        <p>Max Count : {rooms.maxCount}</p>
                        <p>Type : {rooms.type}</p>
                        <p>Number</p>
                    </b>
                    <div style={{ float: 'right' }}>
                        <button
                            className='btn bg-dark text-white'
                            onClick={() => handleBookingRoom(rooms._id)}>
                            Book Now
                        </button>
                        <Link to={'/hotel'}> <button className='btn bg-dark text-white' onClick={handleShow}>View Details</button></Link>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{rooms.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {rooms.imagesurls.map((url, index) => {
                            return <Carousel.Item key={index}>
                                <img src={url} className='d-block w-100 room-carousal-img' />
                            </Carousel.Item>
                        })}
                    </Carousel>
                    <p>{rooms.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Room