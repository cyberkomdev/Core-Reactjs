import React from 'react'
import PropTypes from 'prop-types'

const Containers = ({children})=>{
    return(
        <div className="w-full max-w-6xl block mx-auto">
            {children}
        </div>
    )
}

Containers.propTypes = {
    children: PropTypes.node.isRequired
}

export default Containers
