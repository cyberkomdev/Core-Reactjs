import React from 'react'
import PropTypes from 'prop-types'

const HeadingDashboard = ({title = "Home", desc=null})=> {
    return(
        <div className="w-full mb-4 py-2 block relative">
            <h1 className="text-dashboard-blue-light text-3xl mb-2">{title}</h1>
            {
                desc !== null && <p className="text-gray-400">{desc}</p>
            }
        </div>
    )
}

export default HeadingDashboard
