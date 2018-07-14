import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './Index.css';
import ShopBasic from './component/ShopBasic';
import FoodInfo from './component/FoodInfo';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            selectedKey: '1'
        };
    }
    render() {
        return (
            <div className="index-container">
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <div className="top-banner">商家管理后台</div>
                    </Header>
                    <Layout>
                        <Sider width={180} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                onSelect={(item, key) => {
                                    this.setState({
                                        selectedKey: item.key
                                    });
                                }}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="user" />店铺管理
                                        </span>
                                    }
                                >
                                    <Menu.Item key="1">门店信息</Menu.Item>
                                    <Menu.Item key="2">菜品管理</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '24px', textAlign: 'left' }}>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280
                                }}
                            >
                                {this.state.selectedKey === '1' && (
                                    <ShopBasic />
                                )}
                                {this.state.selectedKey === '2' && (
                                    <FoodInfo />
                                )}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
