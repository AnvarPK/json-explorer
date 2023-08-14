import {
    EditOutlined
} from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import React from 'react';

const data = [
    {
        key: '1',
        fileName: 'John',
    },
    {
        key: '2',
        fileName: 'John',
    },
    {
        key: '3',
        fileName: 'John',
    },
];

const columns = [
    {
        title: 'No',
        dataIndex: 'key',
        rowScope: 'row',
    },
    {
        title: 'Fila Name',
        dataIndex: 'fileName',
    },
];


const UploadGrid = props => {
    const cols = [
        ...columns,
        {
            title: 'Action',
            dataIndex: 'action',
            render: () => <Space size="middle">
                <Button
                    type="primary"
                    icon={<EditOutlined />}
                    size='small'
                    onClick={() => { }}
                />
            </Space>,
        },
    ];

    return (
        <Table
            dataSource={data}
            bordered
            pagination={false}
            columns={cols}
        />
    )
}

UploadGrid.propTypes = {}

export default UploadGrid