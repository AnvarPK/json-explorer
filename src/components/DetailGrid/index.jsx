import React from 'react';
import {
    EditOutlined
} from '@ant-design/icons';
import { Badge, Button, Descriptions } from 'antd';

const items = [
    {
        key: '1',
        label: 'Product',
        children: 'Cloud Database',
    },
    {
        key: '2',
        label: 'Billing Mode',
        children: 'Prepaid',
    },
    {
        key: '3',
        label: 'Automatic Renewal',
        children: 'YES',
    },
    {
        key: 'a4',
        label: 'Automatic Renewal',
        children: 'YES',
    },
    {
        key: '5',
        label: 'Automatic Renewal',
        children: 'YES',
    },
];
const DetailGrid = (props) => {
    const { showInfo } = props;
    return <>
        <Descriptions
            column={{ xs: 2, sm: 3, md: 3 }}
            title="Object Info"
            bordered items={items}
            extra={<Button type="primary" icon={<EditOutlined />} onClick={showInfo} />}
        />
    </>
};
export default DetailGrid;