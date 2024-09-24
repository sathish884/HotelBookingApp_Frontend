import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Room.css'
import { Button, Modal, Carousel } from 'react-bootstrap';

function Room({ rooms, fromdate, todate, difference }) {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBookingRoom = (id, fromdate, todate, difference) => {
        navigate(`/booking-room/${id}`, { state: { fromdate: fromdate, todate: todate, days: difference } });
    };


    return (
        <>
            {/* <div className="row bs">
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
                        {(fromdate && todate) && (
                            <button
                                className='btn bg-dark text-white'
                                onClick={() => handleBookingRoom(rooms._id, fromdate, todate, difference)}>
                                Book Now
                            </button>
                        )}

                        <Link to={'/hotel'}> <button className='btn bg-dark text-white' onClick={handleShow}>View Details</button></Link>
                    </div>
                </div>
            </div> */}


            {/* <!-- Home Room Section Begin --> */}
            <section className="hp-room-section spad">
                <div className="container-fluid">
                    <div className="hp-room-items">
                        <div className="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                            <div className="col-lg-4 col-md-6 colsss" style={{ position: 'relative' }}>
                                <img className='set-bg' src={rooms.imagesurls[0]} alt="" style={{ position: 'absolute' }} />
                                <div className="hp-room-item">
                                    <div className="hr-text">
                                        <h3>{rooms.name}</h3>
                                        <h2>{rooms.rentperday}$<span>/Perday</span></h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="r-o">Size:</td>
                                                    <td>30 ft</td>
                                                </tr>
                                                <tr>
                                                    <td className="r-o">Capacity:</td>
                                                    <td>Max persion {rooms.maxCount}</td>
                                                </tr>
                                                <tr>
                                                    <td className="r-o">Bed:</td>
                                                    <td>King Beds</td>
                                                </tr>
                                                <tr>
                                                    <td className="r-o">Services:</td>
                                                    {/* <td>{rooms.amenities[0].name}</td> */}
                                                    {/* {rooms.amenities.map((room, index) => (
                                                        <td key={index}>{room.name}</td>
                                                    ))} */}

                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Link to={'/hotel'} className='text-white' onClick={handleShow} style={{fontSize:'16px'}}>more details</Link>

                                            <div style={{ float: 'right' }}>
                                                {(fromdate && todate) && (
                                                    <button
                                                        className='btn' style={{ background: '#dfa974', fontWeight: '500' }}
                                                        onClick={() => handleBookingRoom(rooms._id, fromdate, todate, difference)}>
                                                        Book Now
                                                    </button>
                                                )}

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-lg-3 col-md-6">
                                    <div className="hp-room-item set-bg">
                                        <div className="hr-text">
                                            <h3>Family Room</h3>
                                            <h2>299$<span>/Pernight</span></h2>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="r-o">Size:</td>
                                                        <td>30 ft</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="r-o">Capacity:</td>
                                                        <td>Max persion 5</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="r-o">Bed:</td>
                                                        <td>King Beds</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="r-o">Services:</td>
                                                        <td>Wifi, Television, Bathroom,...</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <a href="#" className="primary-btn">More Details</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="hp-room-item set-bg">
                                        <div className="hr-text">
                                            <h3>Family Room</h3>
                                            <h2>299$<span>/Pernight</span></h2>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="r-o">Size:</td>
                                                        <td>30 ft</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="r-o">Capacity:</td>
                                                        <td>Max persion 5</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="r-o">Bed:</td>
                                                        <td>King Beds</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="r-o">Services:</td>
                                                        <td>Wifi, Television, Bathroom,...</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <a href="#" className="primary-btn">More Details</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="hp-room-item set-bg">
                                        <div className="hr-text">
                                            <h3>Family Room</h3>
                                            <h2>299$<span>/Pernight</span></h2>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="r-o">Size:</td>
                                                        <td>30 ft</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="r-o">Capacity:</td>
                                                        <td>Max persion 5</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="r-o">Bed:</td>
                                                        <td>King Beds</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="r-o">Services:</td>
                                                        <td>Wifi, Television, Bathroom,...</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <a href="#" className="primary-btn">More Details</a>
                                        </div>
                                    </div>
                                </div> */}

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Home Room Section End --> */}

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