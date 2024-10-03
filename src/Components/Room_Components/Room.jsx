import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Room.css'
import { Modal, Carousel } from 'react-bootstrap';
import { Col, Row, Badge } from 'antd';
import { PiCurrencyInrBold } from "react-icons/pi"

const style = { background: 'rgb(80 107 127)', textAlign: 'center', fontSize: '17px', padding: '10px !important' };

function Room({ rooms, fromdate, todate, difference }) {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBookingRoom = (id, fromdate, todate, difference) => {
        const isuserLoggedIn = sessionStorage.getItem('isUserLoggedIn') === 'true'; // or however you check authentication
        if (!isuserLoggedIn) {
            navigate('/login', {
                state: {
                    redirectTo: `/booking-room/${id}`,
                    bookingDetails: { fromdate, todate, days: difference }
                }
            });
        } else {
            navigate(`/booking-room/${id}`, { state: { fromdate, todate, days: difference } });
        }
    };

    return (
        <>
            {/* <!-- Home Room Section Begin --> */}
            <section className="hp-room-section py-5">
                <div className="container-fluid">
                    <Badge.Ribbon text="Hippies">
                        <div className="hp-room-items">
                            <div className="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    <img className='set-bg' src={rooms.imagesurls[0]} alt="" style={{ position: 'absolute', borderRadius: '15px' }} />
                                    <div className="hp-room-item" style={{ borderRadius: '15px' }}>
                                        <div className="hr-text">
                                            <h3>{rooms.name}</h3>
                                            <h2>{rooms.rentperday}<PiCurrencyInrBold /><span>/Perday</span></h2>
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
                                                        <td>{(rooms.amenities && rooms.amenities.length > 0) ?
                                                            rooms.amenities[0].name + ', ' + rooms.amenities[1]?.name :
                                                            'No amenities available'}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className='d-flex justify-content-around align-items-center'>
                                                <Link to={'/hotel'} className='text-white' onClick={handleShow} style={{ fontSize: '16px' }}>more details</Link>
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
                            </div>
                        </div>
                    </Badge.Ribbon>
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
                    <p className='pt-5'>{rooms.description}</p>
                    <h4>Amenities</h4>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {rooms.amenities.map((amenity, index) => (
                            <Col className="gutter-row" span={6} key={index}>
                                <div className='bs text-white' style={style}>{amenity.name}</div>
                            </Col>
                        ))}
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Room