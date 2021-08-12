import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";

const ChangePassword = ()=> {
    return(
        <div className="w-full ">
            <HeadingDashboard title={'Change Password'}/>
        </div>
    )
}

ChangePassword.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(ChangePassword))
