import React, { useState } from 'react'
import { Layout, Flex, Rate, Badge, Avatar, Space } from 'antd';
import { StarFilled, WifiOutlined } from '@ant-design/icons'
const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  color: '#fff',
  backgroundColor: '#0958d9',
};

// const desc = ['terrible', 'bad', 'normal', 'good', 'very-good'];

function Home() {

 // const [value, setValue] = useState(3);

  return (
    <>
      <Layout>
        <Content style={contentStyle}>

          <div className="row">
            <img src="imgs/background1.jpg" alt="" style={{ width: '100%', height: "700px" }} />
          </div>

          <div className="row">

            <div className="col-2" style={{ backgroundColor: 'lightcoral', minHeight: '30rem' }}></div>

            <div className="col-10 p-5" style={{ backgroundColor: 'lightblue', minHeight: '30rem' }}>

              <Badge.Ribbon text="Hippies" color="red">
                <div className="card mb-3" style={{ maxWidth: "100%" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="imgs/img1.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div style={{ textAlign: 'left' }}>
                          <h5 className="card-title">Super OYO Karapakkam, Chennai</h5>
                          <p className="card-text">Sholinganallur,Karapakkam,Chennai.</p>
                          <p><Avatar shape="square" size="large" style={{ backgroundColor: '#52c41a', width: "50px", height: '25px' }}>6 <StarFilled /></Avatar>&nbsp;<span>(850 rating)&nbsp; . <span>very good</span></span></p>
                          <ul style={{ display: 'flex', textAlign: 'left', gap: '20px', listStyleType: 'none' }}>
                            <li><WifiOutlined />&nbsp;Free Wifi</li>
                            <li><i class="bi bi-cup-hot"></i>&nbsp;Geyser</li>
                            <li><i className="bi bi-battery-charging"></i>&nbsp;Power Backup</li>
                          </ul>
                          {/* <p><Flex gap="middle" vertical>
                          <Rate tooltips={desc} onChange={setValue} value={value} />
                          {value ? <span>{desc[value - 1]}</span> : null}
                        </Flex></p> */}
                          {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ textAlign: 'left' }}>
                            <h4>486</h4>
                            <p>+Tax, per room per night</p>
                          </div>
                          <div>
                            <Space>
                              <button type="button" className="btn btn-outline-secondary">Secondary</button>
                              <button type="button" className="btn btn-success">Success</button>
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