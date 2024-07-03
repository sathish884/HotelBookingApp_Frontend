import React from 'react'
import { Layout } from 'antd';
import NavRouters from '../../Routers/NavRouters';
import { BrowserRouter as Router } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

function Headers() {

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          style={{
            color:'white',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
        </Header>


        <NavRouters />


        <Footer
          style={{
            backgroundColor: '#001529',
            color:'white',
            position: 'fixed',
            bottom: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center'
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
}

export default Headers