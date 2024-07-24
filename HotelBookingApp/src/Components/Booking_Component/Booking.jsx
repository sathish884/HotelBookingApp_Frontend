import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { prepareDataForValidation } from 'formik';
import { Rate } from 'antd';


function Booking() {

  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    country: ''
  });


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const steps = [
    {
      title: `Customer information`,
      text: 'Who’s the lead guest?',
      input1: true,  // Indicate that this card has an input field
    },
    {
      title: 'Payment information',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      input2: true,
    },
    {
      title: 'Booking is confirmed',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));


  return (
    <>
      <div className="row" style={{ width: '100%' }}>
        <div className='p-5'>
          <Steps current={current} items={items} />
        </div>

        <div className='p-3 text-center' style={{ backgroundColor: 'rgb(215 228 231)' }} >We are holding your price </div>


        <div className='p-5 d-flex' style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <div className='d-flex' style={{ flexDirection: 'column', gap: '30px' }}>
            <div>
              {/*---------------- 1 card ------------------ */}

              {current < steps.length && (
                <div className="card p-3" style={{ width: '50rem' }}>
                  <div className="card-body">
                    <h4 className="card-title pb-3">{steps[current].text}</h4>
                    <p className="card-text">{steps[current].text}</p>
                    {steps[current].input1 && (
                      <div>
                        <form action="">

                          <div className='row'>
                            <div className="col">
                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={formData.firstName} onChange={handleInputChange} />
                                <label htmlFor="floatingInput">First Name</label>
                              </div>
                            </div>
                          </div>

                          <div className='row'>
                            <div className="col">
                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={formData.lastName} onChange={handleInputChange} />
                                <label htmlFor="floatingInput">Last Name</label>
                              </div>
                            </div>
                          </div>

                          <div className='row'>
                            <div className="col">
                              <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={formData.email} onChange={handleInputChange} />
                                <label htmlFor="floatingInput">Email address</label>
                              </div>
                            </div>
                          </div>
                          <p>If you enter your email address and do not complete your reservation, we may send you reminders to help you resume your booking</p>

                          <div className='row'>
                            <div className="col">
                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={formData.mobileNumber} onChange={handleInputChange} />
                                <label htmlFor="floatingInput">Mobile Number</label>
                              </div>
                            </div>
                          </div>

                          <div className='row'>
                            <div className="col">
                              <div class="form-floating">
                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                                <label for="floatingSelect">Country</label>
                              </div>
                            </div>
                          </div>

                        </form>
                      </div>
                    )}

                    {/*---------------- 2 card ------------------ */}
                    {steps[current].input2 && (
                      <div>
                        <form action="">

                          <div className='row'>
                            <div className="col">
                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={formData.firstName} onChange={handleInputChange} />
                                <label htmlFor="floatingInput">First Name</label>
                              </div>
                            </div>
                          </div>

                          <div className='row'>
                            <div className="col">
                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={formData.lastName} onChange={handleInputChange} />
                                <label htmlFor="floatingInput">Last Name</label>
                              </div>
                            </div>
                          </div>

                          <div className='row'>
                            <div className="col">
                              <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={formData.email} onChange={handleInputChange} />
                                <label htmlFor="floatingInput">Email address</label>
                              </div>
                            </div>
                          </div>
                          <p>If you enter your email address and do not complete your reservation, we may send you reminders to help you resume your booking</p>

                          <div className='row'>
                            <div className="col">
                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={formData.mobileNumber} onChange={handleInputChange} />
                                <label htmlFor="floatingInput">Mobile Number</label>
                              </div>
                            </div>
                          </div>

                          <div className='row'>
                            <div className="col">
                              <div class="form-floating">
                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                                <label for="floatingSelect">Country</label>
                              </div>
                            </div>
                          </div>

                        </form>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="pb-3" style={{ width: '50rem' }}>
                <p>By proceeding with this booking, I agree to Agoda’s <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>
                </p>
              </div>

              <div>
                <div className="card p-3" style={{ width: '50rem' }}>
                  {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()} style={{ borderRadius: '50px', fontSize: '20px' }}>
                      Next
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')} style={{ borderRadius: '50px', fontSize: '20px' }}>
                      Done
                    </Button>
                  )}
                  {current > 0 && (
                    <Button type='primary'
                      style={{ borderRadius: '50px', fontSize: '20px', marginTop: '10px' }}
                      onClick={() => prev()}
                    >
                      Previous
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>



          <div className="d-flex" style={{ flexDirection: 'column', gap: '20px' }}>

            <div className="card p-3 d-flex" style={{ width: '40rem' }}>
              <div className='pb-3'>
                <img className='img-thumbnail img-fluid' src="imgs/img1.jpg" alt="" height={100} width />
              </div>
              <div className='row'>
                <div className="col-6">
                  <h5>TULIP INN EINDHOVEN AIRPORT</h5>
                  <Rate disabled defaultValue={3} />
                  <p><b>8.4 Excellent </b>344 reviews <br />
                    Luchthavenweg 27, Strijp, Eindhoven, North</p>
                </div>
                <div className="col-6">
                  <span className="badge text-bg-secondary " style={{ padding: '5px', fontSize: '14px', float: 'right' }}>Free wi-fi</span>
                  <span className="badge text-bg-primary" style={{ padding: '5px', fontSize: '14px', float: 'right', marginRight: '10px' }}>Best Seller</span>
                </div>

              </div>
              <hr />
              <div style={{ textAlign: 'center' }}>
                <h6>1 x Standard Room, 2</h6>
                <p><span>Wed, Jul 24 02:00 PM</span>&nbsp; <b>{`->`}</b> &nbsp;<span>Thu, Jul 25 12:00 PM</span></p>
                <p style={{ float: 'right' }}> <a href="">Cancellation Policy</a></p>
              </div>

            </div>

            <div className="alert alert-info rounded-pill" role="alert">
              Great choice on price – this is the lowest rate at TULIP INN EINDHOVEN AIRPORT.
            </div>
            <div className="alert alert-secondary rounded-pill" role="alert">
              Great choice of property – with an average guest rating of 8.4
            </div>
            <div className="alert alert-warning rounded-pill" role="alert">
              We have limited availability at this price - book now!
            </div>
            <div className="alert alert-danger rounded-pill" role="alert">
              Your check-in date is today.
            </div>
          </div>
        </div >
      </div >
    </>
  );

}

export default Booking