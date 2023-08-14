import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../../components';
import { routes } from '../../router';

const { Header, Sider, Content } = Layout;

const Page = (props) => {
    const { children } = props;
    const navigate = useNavigate();
  
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const menuItems = routes[0].children;

    const handleMenuClick = ({ key }) => {
        navigate(key);
    };

    return (
        <Layout>
            <Sider trigger={null}  collapsed={true}>
                <div className="logo-vertical" >
                    LOGO
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={menuItems[0].key}
                    items={menuItems}
                    onClick={handleMenuClick}
                    itemActiveBg="#4e627d"
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{ padding: '0 25px', minHeight: 'calc( 100vh - 64px )' }}
                >
                    <Breadcrumbs items={menuItems} />
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default Page;