import React from 'react'
import {
    Sidebar,
    Navbar,
    Content
} from './Index'

const TheLayout = () => {

    return (
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheLayout
