import { Card, Layout, theme } from 'antd'
import React from 'react'
import { Uploader, UploadGrid } from '../../components'
const { Content } = Layout;

const Upload = props => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            <Layout style={{ marginBottom: '16px', background: colorBgContainer }}>
                <Card bordered={false}>
                    <Uploader />
                </Card>
            </Layout>
            <Layout style={{ background: colorBgContainer }}>
                <Card bordered={false}>
                    <UploadGrid />
                </Card>
            </Layout>
        </>
    )
}

Upload.propTypes = {}

export default Upload