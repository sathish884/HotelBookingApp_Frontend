import React, { useState } from 'react'
import { Layout, Button, Modal, Image } from 'antd'
import { StarFilled, WifiOutlined } from '@ant-design/icons';
import './Hotel.css';
import Room from './Room';
import Map from './Map';
import PopupModels from './PopupModels';
import RatingReviews from './RatingReviews';


const contentStyle = {
    width: '100%',
    height: "500px"
};

function Hotel() {

    const [openModal, setOpenModal] = useState(false);
    const [isModelOpen, setIsModalOpen] = useState(false);
    const [readMoreModel, setReadMoreModel] = useState(false);

    return (
        <>
            <Layout>
                <div className="row">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://images.oyoroomscdn.com/uploads/hotel_image/108887/large/2fcf96d7ee2d0b34.jpg" className="d-block w-100" alt="..." style={contentStyle} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000" >
                                <img src="https://images.oyoroomscdn.com/uploads/hotel_image/108887/large/9581a53e3cb9b974.jpg" className="d-block w-100" alt="..." style={contentStyle} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://images.oyoroomscdn.com/uploads/hotel_image/108887/large/999efb74462471ea.jpg" className="d-block w-100" alt="..." style={contentStyle} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className='' style={{ padding: '20px 250px', display: "flex", flexDirection: 'column' }}>
                    <div className="row">
                        <div className='col pt-5 px-5 text-center'>
                            <h4>OYO Townhouse Royal Plaza Koyambedu</h4>
                            <p><i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp;3,E Road,Thiruvalluvar road,Koyambedu Chennai, Chennai</p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col pt-3 px-5">
                            <h4 className='pb-3'>Amenities</h4>
                            <div className='row' style={{ gap: '15px' }}>
                                <div className="col-2 card px-3 py-3" style={{ width: '10rem' }}><span className='amenities-icons-list-items'><i className="bi bi-wifi amenities-icons"></i>&nbsp;&nbsp;Free Wifi</span></div>
                                <div className="col-2 card px-3 py-3" style={{ width: '10rem' }}> <span className='amenities-icons-list-items'> <i className="bi bi-cup-hot amenities-icons"></i>&nbsp;&nbsp;Geyser</span></div>
                                <div className="col-2 card px-3 py-3" style={{ width: '10rem' }}> <span className='amenities-icons-list-items'><i className="bi bi-battery-charging amenities-icons"></i>&nbsp;&nbsp;Power Backup</span></div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className='col pt-3 px-5'>
                            <h4 className='pb-3'>About this OYO</h4>
                            <p style={{ fontSize: '16px' }}>OYO Townhouse is based on the needs of the millennial traveler. Every single element of the hotel – from the breakfast menu to the booking process has been re-engineered for comfort, efficiency, convenience and affordability. Each Townhouse is designed to complement its neighborhood.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col pt-3 px-5'>
                            <h4 className='pb-3'>Choose Your Room</h4>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="card" >
                                    <div className="card-header room-card-header">
                                        <p className='text-center'>Start your day on a delicious note by pre-booking breakfast with your stay! Preferred by 90% customers</p>
                                    </div>
                                    <div className="card-body room-card-body">
                                        <div style={{ width: "30%" }}>
                                            <h4>Standard Queen Room</h4>
                                            <p>(189 sq.ft | City View | Queen Bed)</p>
                                            <ul>
                                                <li>Mineral Water</li>
                                                <li>Housekeeping</li>
                                                <li>Iron/Ironing Board</li>
                                                <li>Wi-Fi</li>
                                            </ul>

                                            <div>
                                                <a onClick={() => setOpenModal(true)} style={{ color: 'blue' }}>More details</a>
                                                <Room openModal={openModal} setOpenModal={setOpenModal}></Room>
                                            </div>
                                        </div>
                                        <div style={{ width: "30%" }}>
                                            <h5>Room With Free Cancellation | Breakfast only</h5>
                                            <ul style={{ listStyleType: 'none', marginLeft: '-20px' }}>
                                                <li><i className="bi bi-cup-hot-fill"></i>&nbsp;&nbsp;Free Breakfast</li>
                                                <li><i className="bi bi-circle-fill"></i>&nbsp;&nbsp;Flexible rate BB</li>
                                                <li><i className="bi bi-check-lg"></i>&nbsp;&nbsp;Free Cancellation till 3 hrs before check in</li>
                                            </ul>
                                        </div>
                                        <div className='text-center' style={{ width: "40%" }}>
                                            <Image.PreviewGroup items={['https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                                                'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                                                'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp']}>
                                                <Image style={{ width: '20rem', height: "15rem", float: 'right' }} src="https://images.oyoroomscdn.com/uploads/hotel_image/108887/large/2fcf96d7ee2d0b34.jpg" />
                                            </Image.PreviewGroup>
                                        </div>

                                    </div>
                                    <div className="card-footer text-body-secondary" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <h5><b style={{ color: "black" }}>₹1308</b> &nbsp;<span style={{ fontSize: "15px" }}><strike>₹5428</strike></span></h5>
                                            <p>+ ₹197 taxes & fee</p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <a href="#" className="btn btn-success book-btn">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col px-5 py-5'>
                            <h4 className='pb-3'>Hotel Policies</h4>
                            <div className="card px-5 pt-5 pb-3 border border-black">
                                <div><h6><span><i class="bi bi-clock"></i>&nbsp;&nbsp;Check-in: 2PM</span>&nbsp; - &nbsp;<span><i class="bi bi-clock"></i>&nbsp;&nbsp;Check-out:12PM</span></h6></div>
                                <hr />
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <ul>
                                            <li>Couple, Bachelor Rules &nbsp; <button className='btn btn-outline-success px-2 py-0'>Couple Friendly</button> <br />Unmarried couples/guests with Local IDs are allowed. </li>
                                            <li>Guests below 18 years of age are not allowed at the property.</li>
                                            <li>Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Pets are not allowed.</li>
                                            <li>Outside food is not allowed</li>
                                            <li>Smoking within the premises is not allowed</li>
                                            <li>Optional : Rollaway bed fee: INR 1200.0 per night</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='pt-3 d-flex' style={{ justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                                    <button type="button" className="btn btn-outline-primary" onClick={() => setIsModalOpen(true)}>Restrications</button>
                                    <PopupModels isModelOpen={isModelOpen} setIsModalOpen={setIsModalOpen} readMoreModel={readMoreModel} setReadMoreModel={setReadMoreModel} />
                                    <button type="button" className="btn btn-outline-dark" onClick={() => setIsModalOpen(true)}>Gust Profile</button>
                                    <button type="button" class="btn btn-outline-secondary" onClick={() => setIsModalOpen(true)}>ID Proof Related</button>
                                    <a style={{ color: 'blue' }} onClick={() => setReadMoreModel(true)}>Read All Property Rules</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="className='col px-5 pt-5'">
                            <h4 className='mb-3'>Location</h4>
                            <Map />
                        </div>
                    </div>

                    <div className="row">
                        <div className="className='col px-5 pt-5'">



                            <h4 className='mb-3'>Review and Ratings</h4>
                            <div className="card p-5" style={{backgroundColor:'#d8ddd0'}}>
                                <RatingReviews />
                            </div>
                        </div>
                    </div>

                </div>

            </Layout>
        </>
    )
}

export default Hotel