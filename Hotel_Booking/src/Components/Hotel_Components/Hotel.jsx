import React, { useState, useEffect } from 'react'
import { getRoomList } from '../../Services/Api';
import Room from '../Room_Components/Room';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';
import { DatePicker, Divider, Tag } from 'antd';
//import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;
import moment from 'moment';
import './Hotel.css';
import Review from '../About_Components/Review';

function Hotel() {



    const [roomList, setRoomList] = useState([]);

    const [duplicaterooms, setDuplicaterooms] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();
    const [searchkey, setSearchKey] = useState('')
    const [type, setType] = useState('all')

    const [isExpanded, setIsExpanded] = useState(false); // State to manage expanded content

    // Toggle the expanded state when clicking "Read More/Show Less"
    const handleToggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

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
        if (e !== 'all') {
            const temprooms = duplicaterooms.filter(room => room.type.toLowerCase() == e.toLowerCase());
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
                        <select className='form-control' value={type} onChange={(e) => { filterByType(e.target.value) }}>
                            <option value="all">All</option>
                            <option value="delux">Delux</option>
                            <option value="non-delux">Non-Delux</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '60vh', flexDirection: 'column' }}>

                <section className="aboutus-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-text">
                                    <div className="section-title">
                                        <span>About Us</span>
                                        <h2>Intercontinental LA <br /> Westlake Hotel</h2>
                                    </div>
                                    {/* Short description that always shows */}
                                    <p className="f-para">
                                        Sona.com is a leading online accommodation site. We’re passionate about travel. Every day,
                                        we inspire and reach millions of travelers across 90 local websites in 41 languages.
                                    </p>

                                    {/* Conditionally rendered full description */}
                                    {isExpanded && (
                                        <p className="s-para">
                                            Our hotel offers world-class amenities, from luxurious suites and fine dining
                                            to spa treatments and a rooftop pool with stunning views of Los Angeles.
                                            Whether you're visiting for business or pleasure, Intercontinental LA Westlake
                                            Hotel ensures a memorable stay with personalized service and exceptional
                                            hospitality. Conveniently located in the heart of the city, we are just minutes
                                            away from popular attractions, shopping districts, and vibrant nightlife.
                                            At Sona.com, we make booking the perfect accommodation easy and enjoyable.
                                        </p>
                                    )}

                                    {/* Button to toggle the expanded content */}
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleToggleReadMore}
                                    >
                                        {isExpanded ? 'Show Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="about-pic">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <img src="src/assets/imgs/img1.jpg" alt="Hotel Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- About Us Section End --> */}

                <Divider plain style={{ borderColor: '#dfa974' }}></Divider>

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
                                    <i className="bi bi-p-square"></i>
                                    <h4>Travel Plan</h4>
                                    <p>Our expert team can help you craft the perfect travel itinerary tailored to your preferences, ensuring you experience the best attractions and hidden gems.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-item">
                                    <i className="bi bi-duffle"></i>
                                    <h4>Catering Service</h4>
                                    <p>Indulge in a variety of culinary delights with our catering service, offering local and international cuisines prepared by our skilled chefs for any occasion.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-item">
                                    <i className="bi bi-usb-mini"></i>
                                    <h4>Babysitting</h4>
                                    <p>Enjoy peace of mind while you relax or attend meetings. Our qualified babysitters are available to take care of your little ones, allowing you to enjoy your stay.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-item">
                                    <i className="bi bi-person-standing-dress"></i>
                                    <h4>Laundry</h4>
                                    <p>Take advantage of our laundry service to keep your clothes fresh and clean during your stay, so you can focus on enjoying your time with us.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-item">
                                    <i className="bi bi-car-front"></i>
                                    <h4>Hire Driver</h4>
                                    <p>Explore the city with convenience by hiring one of our professional drivers. They will ensure you arrive at your destination safely and on time.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-item">
                                    <i className="bi bi-cup-straw"></i>
                                    <h4>Bar & Drink</h4>
                                    <p>Unwind at our bar with a wide selection of drinks, from refreshing cocktails to premium wines, all served in a vibrant atmosphere perfect for relaxation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Services Section End --> */}

                <Divider plain style={{ borderColor: '#dfa974' }}></Divider>

                <div className="row justify-content-center w-100">
                    {loading ? (<Loader />) : (
                        roomList.map((room, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <Room rooms={room} fromdate={fromdate} todate={todate} key={index} />
                            </div>
                        ))
                    )}
                </div>

                <Divider plain style={{ borderColor: '#dfa974' }}></Divider>

                <Review />

                <Divider plain style={{ borderColor: '#dfa974' }}></Divider>

                {/* <!-- Blog Section Begin --> */}
                <section className="blog-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <span>Hotel News</span>
                                    <h2>Our Blog & Event</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-3">
                                <div className="blog-item set-bg">
                                    <img src="src/assets/Hotels/img1.jpg" alt="Tremblant In Canada" style={{ width: '100%', height: '350px', display: 'block' }} />
                                    <div className="bi-text">
                                        <Tag color="#dfa974">Travel Trip</Tag>
                                        <h4><a href="#">Tremblant In Canada</a></h4>
                                        <p>Explore the breathtaking landscapes of Mont Tremblant, where adventure meets relaxation. Discover skiing, hiking, and gourmet dining in this picturesque resort town.</p>
                                        <div className="b-time"><i className="bi bi-clock"></i> 15th April, 2019</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <div className="blog-item set-bg">
                                    <img src="src/assets/Hotels/img1.jpg" alt="Choosing A Static Caravan" style={{ width: '100%', height: '350px', display: 'block' }} />
                                    <div className="bi-text">
                                        <Tag color="#dfa974">Camping</Tag>
                                        <h4><a href="#">Choosing A Static Caravan</a></h4>
                                        <p>Thinking of a getaway? Learn how to choose the perfect static caravan for your family vacation, ensuring comfort and adventure at every stop along the way.</p>
                                        <div className="b-time"><i className="bi bi-clock"></i> 15th April, 2019</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog-item set-bg">
                                    <img src="src/assets/Hotels/img1.jpg" alt="Copper Canyon" style={{ width: '100%', height: '350px', display: 'block' }} />
                                    <div className="bi-text">
                                        <Tag color="#dfa974">Event</Tag>
                                        <h4><a href="#">Copper Canyon</a></h4>
                                        <p>Join us for a journey through Copper Canyon, one of the largest canyons in the world. Experience the rich culture, stunning views, and thrilling adventures awaiting you.</p>
                                        <div className="b-time"><i className="bi bi-clock"></i> 21st April, 2019</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-8 mb-3">
                                <div className="blog-item set-bg">
                                    <img src="src/assets/Hotels/img1.jpg" alt="Trip To Iqaluit" style={{ width: '100%', height: '350px', display: 'block' }} />
                                    <div className="bi-text">
                                        <Tag color="#dfa974">Travel Event</Tag>
                                        <h4><a href="#">Trip To Iqaluit In Nunavut A Canadian Arctic City</a></h4>
                                        <p>Discover the unique beauty and culture of Iqaluit, the capital of Nunavut. From indigenous art to stunning Arctic landscapes, this trip offers unforgettable experiences.</p>
                                        <div className="b-time"><i className="bi bi-clock"></i> 08th April, 2019</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog-item set-bg">
                                    <img src="src/assets/Hotels/img1.jpg" alt="Traveling To Barcelona" style={{ width: '100%', height: '350px', display: 'block' }} />
                                    <div className="bi-text">
                                        <Tag color="#dfa974">Travel</Tag>
                                        <h4><a href="#">Traveling To Barcelona</a></h4>
                                        <p>From stunning architecture to vibrant nightlife, uncover the top attractions and hidden gems that make Barcelona a must-visit destination for travelers.</p>
                                        <div className="b-time"><i className="bi bi-clock"></i> 12th April, 2019</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Blog Section End --> */}

            </div >
        </>
    );

}

export default Hotel


