import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";

const LayoutHistory = ()=> {
    return(
        <div className="w-full ">
            <HeadingDashboard title={'Change Password'}/>
        </div>
    )
}

LayoutHistory.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(LayoutHistory))
