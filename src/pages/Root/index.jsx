import React from 'react'
import PropTypes from 'prop-types'
import { Page } from '../../layout'
import { Outlet } from 'react-router-dom'

const RootPage = props => {
    return (
        <Page>
            <Outlet />
        </Page>
    )
}

RootPage.propTypes = {}

export default RootPage