import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";

const LayoutLimit = ()=> {
    return(
        <div className="w-full ">
            <HeadingDashboard title={'Limits'}/>
        </div>
    )
}

LayoutLimit.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(LayoutLimit))
