import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

const Uploader = (props) => {
    const { addFile } = props;
    const draggerProps = {
        name: 'file',
        multiple: true,
        defaultFileList: [],
        fileList: [],
        beforeUpload: (file) => {
            const reader = new FileReader();
            reader.onload = e => {
                addFile({ name: file.name, content: JSON.parse(e.target.result) });
            };
            reader.readAsText(file);
            return false
        },
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <Dragger {...draggerProps} accept=".json">
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload.
            </p>
        </Dragger>
    )
};
export default Uploader;