import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";

const LayoutVerification = ()=> {
    return(
        <div className="w-full ">
            <HeadingDashboard title={'Verification'}/>
        </div>
    )
}

LayoutVerification.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(LayoutVerification))
