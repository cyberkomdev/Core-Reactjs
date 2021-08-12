import React from 'react'
import PropTypes from 'prop-types'

const HeadingDashboard = ({title = "Home"})=> {
    return(
        <div className="w-full mb-8 py-2 block relative">
            <h1 className="text-dashboard-blue-light text-2xl">{title}</h1>
        </div>
    )
}

export default HeadingDashboard
