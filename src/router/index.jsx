import {
    FolderOpenOutlined, UploadOutlined
} from '@ant-design/icons';
import { avatarGroupClasses } from '@mui/material';
import { getElementError } from '@testing-library/react';
import { default as React } from 'react';
import { createBrowserRouter, Link } from 'react-router-dom';
import { Explorer, Upload } from '../pages';
import RootPage from '../pages/Root';


export const routes = [
    {
        key: '/',
        path: "/",
        element: <RootPage />,
        children: [
            {
                key: '/',
                path: "/",
                element: <Upload />,
                icon: <UploadOutlined />,
                label: 'Upload',

            },
            {
                key: 'explorer',
                path: "/explorer",
                element: <Explorer />,
                icon: <FolderOpenOutlined />,
                label: 'Explorer',
            },
        ]

    },

];

export default createBrowserRouter(routes);
