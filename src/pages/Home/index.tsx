import React from 'react'
import { Layout } from 'antd';
import './home.less'
const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <Layout className='main'>
      <Header className='header'>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}
