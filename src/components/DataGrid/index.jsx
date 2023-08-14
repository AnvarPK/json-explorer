import {
    ContainerOutlined,
    DatabaseOutlined,
    EditOutlined
} from '@ant-design/icons';
import React from 'react';

import { Button, Space, Table, Tag } from 'antd';

const data = [
    {
        key: '1',
        keyName: 'John',
        type: 'object',
        childItems: ['cool', 'teacher'],
    },
    {
        key: '2',
        keyName: 'John',
        type: 'array',
        childItems: ['cool',],
    },
    {
        key: '3',
        keyName: 'John',
        type: 'object',
        childItems: [],
    },
];

const columns = [
    {
        title: 'No',
        dataIndex: 'key',
        rowScope: 'row',
    },
    {
        title: 'Key Name',
        dataIndex: 'keyName',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        render: (type) => (<Space>
            {type === 'object' ? <ContainerOutlined /> : <DatabaseOutlined />}{type}
        </Space>
        ),
    },
    {
        title: 'Children',
        dataIndex: 'childItems',
        render: (childItems) => childItems.map((child) => (
            <Tag color="blue" key={child}>
                {child}
            </Tag>
        ))
    },
];

const DataGrid = (props) => {
    const { showInfo } = props;
    const cols = [
        ...columns,
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) => (record.type === 'object' ?
                <Space size="middle">
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        size='small'
                        onClick={showInfo}
                    />
                </Space> :
                null
            ),
        },
    ];

    return (<Table
        columns={cols}
        dataSource={data}
        bordered
        pagination={false}
    />)
};
export default DataGrid;