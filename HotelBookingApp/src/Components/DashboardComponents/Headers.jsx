import React from 'react'
import Home from '../HomeComponents/Home';
import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: 'black',
};


const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'black',
};
const layoutStyle = {
  overflow: 'hidden',
  minHeight: '100vh'
};

function Headers() {


  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
           <Home />
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>

    </>
  )
}

export default Headers