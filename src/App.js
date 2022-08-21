import React from 'react';
import { Layout } from 'antd';
import Basemap from './components/Basemap';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <div className="main" >
      <Layout className="main-app" >
        <Layout>
          {/* <Header style={{ background: '#fff', width: "100vw" }} /> */}
          <Content className="main-map">
            <Basemap />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
