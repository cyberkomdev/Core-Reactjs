import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TheHeaders from "./main/TheHeaders";
import HeadingDashboard from "../../../component/heading/HeadingDashboard";
import Containers from "../../main/Containers";

const TheUsers = (props)=> {

    let {children} = props
    return(
        <div className="w-full block relative bg-dashboard-primary min-h-screen">
            <TheHeaders/>
            <Containers>
                <div className="w-full  py-8 px-2">
                    {children}
                </div>
            </Containers>
        </div>
    )
}

TheUsers.propTypes = {
    children : PropTypes.node.isRequired
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(TheUsers)
