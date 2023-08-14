import {
    EditOutlined
} from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import React from 'react';
import { useId } from 'react';

const columns = [
    {
        title: 'No',
        dataIndex: 'key',
        rowScope: 'row',
        render: (key) => key + 1,
    },
    {
        title: 'Fila Name',
        dataIndex: 'fileName',
    },
];

const UploadGrid = props => {
    const { items } = props;

    const data = items.map((item, index) => ({
        key: index,
        fileName: item.name,
    }));

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