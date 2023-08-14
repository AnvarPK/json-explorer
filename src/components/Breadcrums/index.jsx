import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom';
import {
    HomeOutlined
} from '@ant-design/icons';

const Breadcrumbs = props => {
    const { items } = props;
    const location = useLocation();
    const { label } = { ...(items.filter(item => item.path === location.pathname)?.[0]) };
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
            <Breadcrumb.Item>{label}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

Breadcrumbs.propTypes = {}

export default Breadcrumbs