import React, { useState, useEffect } from 'react';
import { Rate, Carousel } from 'antd';
import { addReviews, getReviewsList } from '../../Services/Api';

function Review() {

    const prevArrow = (
        <div className="custom-prev-arrow">
            <i className="bi bi-arrow-left-circle" style={{ fontSize: '44px', color: '#000', fontWeight: 'bolder', position: 'absolute', right: '100%' }}></i>
        </div>
    );

    const nextArrow = (
        <div className="custom-next-arrow">
            <i className="bi bi-arrow-right-circle" style={{ fontSize: '44px', color: '#000', fontWeight: 'bolder', position: 'absolute', left: '100%' }}></i>
        </div>
    );


    const [reviewForm, setReviewForm] = useState({
        username: '',
        email: '',
        rating: 0,
        reviewcomment: '',
    });
    const [reviewList, setReviewList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


    // Handle form field changes
    const handleChangeField = (e) => {
        const { name, value } = e.target;
        setReviewForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    // Handle rating change separately since it's a non-input component
    const handleRatingChange = (value) => {
        setReviewForm((prevForm) => ({
            ...prevForm,
            rating: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Here you can handle form submission, e.g., send data to the server
            console.log('Submitted review:', reviewForm);
            addReviews(reviewForm)
            // Optionally reset the form after submission
            setReviewForm({
                username: '',
                email: '',
                rating: 0,
                reviewcomment: '',
            });
        } catch (error) {
            console.log('Error:', error);
        }

    };

    useEffect(() => {
        const getReview = async () => {
            try {
                setLoading(true);
                const response = await getReviewsList();
                console.log(response);

                setReviewList(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.response.data);
            }
        };
        getReview();
    }, []);


    return (
        <>
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
                                {reviewList.length > 0 && (
                                    <Carousel arrows prevArrow={prevArrow} nextArrow={nextArrow} autoplay>
                                        {reviewList.map((review, index) => (
                                            <div className="ts-item" key={index}>
                                                <p>{review.reviewcomment}</p>
                                                <div className="ti-author">
                                                    <div className="rating">
                                                        <Rate
                                                            allowHalf
                                                            value={review.rating}
                                                            disabled
                                                        />
                                                    </div>
                                                    <h5> - {review.username}</h5>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="review-add">
                    <h4>Add Review</h4>
                    <form className="ra-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Name*"
                                    name="username"
                                    value={reviewForm.username}
                                    style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}
                                    onChange={handleChangeField}
                                />
                            </div>
                            <div className="col-lg-6">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Email*"
                                    name="email"
                                    value={reviewForm.email}
                                    style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}
                                    onChange={handleChangeField}
                                />
                            </div>
                            <div className="col-lg-12">
                                <div>
                                    <h5>Your Rating:</h5>
                                    <div className="rating">
                                        <Rate
                                            className="custom-rate"
                                            allowHalf
                                            value={reviewForm.rating}
                                            onChange={handleRatingChange}
                                        />
                                    </div>
                                </div>
                                <textarea
                                    className="form-control"
                                    placeholder="Your Review"
                                    name="reviewcomment"
                                    value={reviewForm.reviewcomment}
                                    style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}
                                    onChange={handleChangeField}
                                ></textarea>
                                <button className="btn btn-outline-success" type="submit">
                                    Submit Now
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Review