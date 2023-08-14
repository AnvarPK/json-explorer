import {
    LaptopOutlined, NotificationOutlined, UserOutlined
} from '@ant-design/icons';
import { Card, Layout, Menu, theme } from 'antd';
import React, { createElement, useState } from 'react';
import { DataGrid, DetailGrid, InfoEdit, Stastitics } from '../../components';
import Page from '../../layout/page';

const { Header, Sider, Content } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: createElement(icon),
        label: `subnav ${key}`,
    };
});

const Explorer = props => {
    const [isInfoeDrawerOpen, showInfoDrawer] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const showInfo = () => {
        console.log("asas");
        showInfoDrawer(prev => !prev)
    }

    return (
        <>
            {/* <Layout style={{ padding: '24px 0', marginBottom: '16px', background: colorBgContainer }}>
                <Content style={{ padding: '0 24px', }}>
                    <Stastitics />
                </Content>
            </Layout> */}
            <InfoEdit open={isInfoeDrawerOpen} setOpen={showInfoDrawer} />
            <Layout style={{ marginBottom: '16px', background: colorBgContainer }}>
                <Card bordered={false}>
                    <DetailGrid showInfo={showInfo} />
                </Card>
            </Layout>
            <Card bordered={false}>
                <Layout style={{ background: colorBgContainer }}>
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                        />
                    </Sider>
                    <Content>
                        <DataGrid showInfo={showInfo} />
                    </Content>
                </Layout>
            </Card>
        </>
    )
}

Explorer.propTypes = {}

export default Explorer