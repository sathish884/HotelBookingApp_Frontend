import React from 'react'
import { Layout } from 'antd';
const { Sider, Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

function Home() {
  return (
      <>
      <Layout>
        <div className="row"></div>
        <Sider width="20%" style={siderStyle}>
          Sider
        </Sider>
        <Content style={contentStyle}>Content</Content>
         </Layout>
    </>
  )
}

export default Home