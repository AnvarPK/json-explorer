import { Card, Layout, theme } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Uploader, UploadGrid } from '../../components'
import { addFile } from '../../redux/slices/files';
const { Content } = Layout;

const Upload = props => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const files = useSelector((state) => state.files.items)
    const dispatch = useDispatch();

    const addFileHandler = (file) => {
        dispatch(addFile(file))
    }

    return (
        <>
            <Layout style={{ marginBottom: '16px', background: colorBgContainer }}>
                <Card bordered={false}>
                    <Uploader addFile={addFileHandler} />
                </Card>
            </Layout>
            <Layout style={{ background: colorBgContainer }}>
                <Card bordered={false}>
                    <UploadGrid items={files} />
                </Card>
            </Layout>
        </>
    )
}

Upload.propTypes = {}

export default Upload