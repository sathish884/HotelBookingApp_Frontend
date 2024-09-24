import React, { useState, useEffect } from 'react'
import { getRoomList } from '../../Services/Api';
import Room from '../Room_Components/Room';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';
import { DatePicker, Divider, Carousel } from 'antd';
//import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;
import moment from 'moment';
import './Hotel.css';

function Hotel() {

    const prevArrow = (
        <div className="custom-prev-arrow">
            <i className="bi bi-arrow-left-circle" style={{ fontSize: '34px', color: '#000', fontWeight: 'bolder', position: 'absolute', right: '100%'}}></i>
        </div>
    );

    const nextArrow = (
        <div className="custom-next-arrow">
            <i className="bi bi-arrow-right-circle" style={{ fontSize: '34px', color: '#000', fontWeight: 'bolder', position: 'absolute', left: '100%'}}></i>
        </div>
    );


    const [roomList, setRoomList] = useState([]);
    const [duplicaterooms, setDuplicaterooms] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();
    const [searchkey, setSearchKey] = useState('')
    const [type, setType] = useState('all')

    useEffect(() => {
        const getList = async () => {
            try {
                setLoading(true);
                const response = await getRoomList();
                setRoomList(response.data);
                setDuplicaterooms(response.data); // Store unfiltered rooms
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.response.data);
            }
        };
        getList();
    }, []);


    // Filter the rooms by date
    const filterByDate = (dates) => {
        if (dates && dates.length === 2) {
            const startDate = dates[0].$d;
            const endDate = dates[1].$d;

            const fromDate = moment(startDate).format('DD-MM-YYYY');
            const toDate = moment(endDate).format('DD-MM-YYYY');
            setFromDate(fromDate);
            setToDate(toDate);

            // Filter rooms based on availability
            const filteredRooms = duplicaterooms.filter(room => {
                return room.currentbooking.every(bookedRange => {
                    const bookedFrom = moment(bookedRange.fromdate, 'DD-MM-YYYY');
                    const bookedTo = moment(bookedRange.todate, 'DD-MM-YYYY');

                    // Check if selected date range overlaps with booked date range
                    return (
                        moment(fromDate, 'DD-MM-YYYY').isAfter(bookedTo) ||
                        moment(toDate, 'DD-MM-YYYY').isBefore(bookedFrom)
                    );
                });
            });

            setRoomList(filteredRooms); // Update the room list with available rooms
        }
    };

    // Filter the rooms by search
    const filterBySearch = () => {
        const temprooms = duplicaterooms.filter(room => room.name.toLowerCase().includes(searchkey.toLowerCase()));
        setRoomList(temprooms)
    }

    // Filter the rooms by type
    const filterByType = (e) => {
        setType(e)
        if (e != 'all') {
            const temprooms = duplicaterooms.filter(room => room.name.toLowerCase() == e.toLowerCase());
            setRoomList(temprooms)
        } else {
            setRoomList(duplicaterooms)
        }
    }

    return (
        <>
            <div className="row hotel-backimg d-flex flex-row justify-content-center align-items-center">
                {error ? <Error error={error} /> : ""}
                <div className="bs filter-box">
                    <div className="col-md-3">
                        <RangePicker format={'DD-MM-YYYY'} onChange={filterByDate} />
                    </div>
                    <div className="col-md-3">
                        <input type='text' className='form-control' value={searchkey} onChange={(e) => { setSearchKey(e.target.value) }} onKeyUp={filterBySearch} placeholder='Search rooms' />
                    </div>
                    <div className="col-md-3">
                        <select className='form-control' value={type} onChange={(e) => { filterByType }}>
                            <option value="all">All</option>
                            <option value="delux">Delux</option>
                            <option value="non-delux">Non-Delux</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '60vh', flexDirection: 'column' }}>


                {/* <!-- About Us Section Begin --> */}
                <section className="aboutus-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-text">
                                    <div className="section-title">
                                        <span>About Us</span>
                                        <h2>Intercontinental LA <br />Westlake Hotel</h2>
                                    </div>
                                    <p className="f-para">Sona.com is a leading online accommodation site. We’re passionate about
                                        travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41
                                        languages.</p>
                                    <p className="s-para">So when it comes to booking the perfect hotel, vacation rental, resort,
                                        apartment, guest house, or tree house, we’ve got you covered.</p>
                                    <a href="#" className="primary-btn about-btn">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-pic">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <img src="src/assets/imgs/img1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- About Us Section End --> */}

                <Divider plain style={{ borderColor: '#7cb305' }}></Divider>
                {/* <!-- Services Section End --> */}
                <section className="services-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <span>What We Do</span>
                                    <h2>Discover Our Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-item">
                                    <i className="flaticon-036-parking"></i>
                                    <h4>Travel Plan</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-item">
                                    <i className="flaticon-033-dinner"></i>
                                    <h4>Catering Service</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-item">
                                    <i className="flaticon-026-bed"></i>
                                    <h4>Babysitting</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-item">
                                    <i className="flaticon-024-towel"></i>
                                    <h4>Laundry</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-item">
                                    <i className="flaticon-044-clock-1"></i>
                                    <h4>Hire Driver</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-item">
                                    <i className="flaticon-012-cocktail"></i>
                                    <h4>Bar & Drink</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Services Section End --> */}
                <Divider plain style={{ borderColor: '#7cb305' }}></Divider>


                <div className="row justify-content-center w-100">
                    {loading ? (<Loader />) : (
                        roomList.map((room, index) => (
                            <div className="col-md-9 mb-5" key={index}>
                                <Room rooms={room} fromdate={fromdate} todate={todate} />
                            </div>
                        ))
                    )}
                </div>

                <Divider plain style={{ borderColor: '#7cb305' }}></Divider>

                {/* <!-- Testimonial Section Begin --> */}
                <section className="testimonial-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <span>Testimonials</span>
                                    <h2>What Customers Say?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="testimonial-slider owl-carousel">
                                    <Carousel arrows prevArrow={prevArrow} nextArrow={nextArrow} autoplay>
                                        <div className="ts-item">
                                            <p>After a construction project took longer than expected, my husband, my daughter, and I needed a place to stay for a few nights. As a Chicago resident, we know a lot about our city, neighborhood, and the types of housing options available and absolutely love our vacation at Sona Hotel.</p>
                                            <div className="ti-author">
                                                <div className="rating">
                                                    <i className="icon_star"></i>
                                                    <i className="icon_star"></i>
                                                    <i className="icon_star"></i>
                                                    <i className="icon_star"></i>
                                                    <i className="icon_star-half_alt"></i>
                                                </div>
                                                <h5> - Alexander Vasquez</h5>
                                            </div>
                                        </div>

                                        <div className="ts-item">
                                            <p>After a construction project took longer than expected, my husband, my daughter, and I needed a place to stay for a few nights. As a Chicago resident, we know a lot about our city, neighborhood, and the types of housing options available and absolutely love our vacation at Sona Hotel.</p>
                                            <div className="ti-author">
                                                <div className="rating">
                                                    <i className="icon_star"></i>
                                                    <i className="icon_star"></i>
                                                    <i className="icon_star"></i>
                                                    <i className="icon_star"></i>
                                                    <i className="icon_star-half_alt"></i>
                                                </div>
                                                <h5> - Alexander Vasquez</h5>

                                            </div>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Testimonial Section End --> */}


            </div>
        </>
    );

}

export default Hotel


