import React from 'react'
import { Flex, Layout } from 'antd';
const { Header, Footer} = Layout;
//import Headers from '../'

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: 'black',
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
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
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
           <Home />
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Flex>
    </>
  )
}

export default Headers