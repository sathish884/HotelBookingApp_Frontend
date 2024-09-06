import React, { useState } from 'react'
import { Layout, Spin, Badge, Avatar, Space, Form, Input, Button, Select, DatePicker } from 'antd';
import { StarFilled, WifiOutlined, LoadingOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem';
import { useNavigate } from 'react-router-dom';
const { Content } = Layout;
import './Home.css';

const onFinish = (values) => {
  console.log(values);
}

function Home() {

  // const [value, setValue] = useState(3);
  const onOk = (value) => {
    console.log('onOk: ', value);
  };

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true)
    navigate('hotel')
    
  }

  return (
    <>
      <Layout>
        <Content>
          <div className="row bg-img">
            <img src="imgs/background1.jpg" alt="" style={{ width: '100%', height: "700px" }} />
            <div className='filter-form'>
              <Form onFinish={onFinish}>
                <div className="row filter-form-row">
                  <div className="col-3">
                    <FormItem name="city">
                      <Select className="custom-select" labelInValue placeholder="Select the city" options={[{ value: 'Chennai', label: 'chennai' }, { value: 'Bangalore', label: 'bangalore' }]}></Select>
                    </FormItem>
                  </div>
                  <div className="col-3">
                    <FormItem name="checkindate">
                      <DatePicker className="custom-select" placeholder='CheckIn'
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        onOk={onOk}
                      />
                    </FormItem>
                  </div>
                  <div className="col-3">
                    <FormItem name="checkoutdate">
                      <DatePicker className="custom-select" placeholder='CheckOut'
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        onOk={onOk}
                      />
                    </FormItem>
                  </div>
                  <div className="col-3">
                    <Button className="custom-select" type="primary" htmlType="submit" style={{ fontSize: "20px" }}>
                      Search
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>

          <div className="row">
            {/* <div className="col-2" style={{ backgroundColor: 'lightcoral', minHeight: '30rem' }}></div> */}
            <div className="col-12 p-5" style={{ backgroundColor: 'lightblue', minHeight: '30rem' }}>

              <Badge.Ribbon text="Hippies" color="red">
                <div className="card mb-3" style={{ maxWidth: "50%" }}>
                  {loading && <Spin size="large" />}
                  <div className="row g-0">
                    <div className="col-md-4" style={{ display: 'flex', flexDirection: 'column', gap: "10px", padding: '5px' }}>
                      <div>

                        <img src="imgs/img1.jpg" className="img-fluid rounded" alt="..." style={{ width: '100%', height: "200px" }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: "center", gap: '10px' }}>
                        <img src="imgs/img1.jpg" className="img-fluid rounded" alt="..." style={{ width: '50px', height: "50px" }} />
                        <img src="imgs/img1.jpg" className="img-fluid rounded" alt="..." style={{ width: '50px', height: "50px" }} />
                        <img src="imgs/img1.jpg" className="img-fluid rounded" alt="..." style={{ width: '50px', height: "50px" }} />
                        <img src="imgs/img1.jpg" className="img-fluid rounded" alt="..." style={{ width: '50px', height: "50px" }} />
                        <img src="imgs/img1.jpg" className="img-fluid rounded" alt="..." style={{ width: '50px', height: "50px" }} />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" onClick={handleClick}>
                        <div style={{ textAlign: 'left' }}>
                          <h5 className="card-title">Super OYO Karapakkam, Chennai</h5>
                          <p className="card-text"><i class="bi bi-geo-alt-fill"></i>&nbsp;Sholinganallur,Karapakkam,Chennai.</p>
                          <p><Avatar shape="square" size="large" style={{ backgroundColor: '#52c41a', width: "50px", height: '25px' }}>6 <StarFilled /></Avatar>&nbsp;<span>(850 rating)&nbsp; . <span>very good</span></span></p>
                          <ul style={{ display: 'flex', gap: '20px', listStyleType: 'none' }}>
                            <li style={{ marginLeft: '-30px' }}><WifiOutlined />&nbsp;Free Wifi</li>
                            <li><i class="bi bi-cup-hot"></i>&nbsp;Geyser</li>
                            <li><i className="bi bi-battery-charging"></i>&nbsp;Power Backup</li>
                          </ul>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ textAlign: 'left' }}>
                            <h4><i class="bi bi-currency-rupee"></i>486</h4>
                            <p>+Tax, per room per night</p>
                          </div>
                          <div>
                            <Space>
                              <button type="button" className="btn btn-outline-secondary">View Details</button>
                              <button type="button" className="btn btn-success" style={{ backgroundColor: 'red' }}>Book Now</button>
                            </Space>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Badge.Ribbon>

            </div>
          </div>
        </Content>
      </Layout >
    </>
  )
}

export default Home