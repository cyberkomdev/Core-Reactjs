import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";

const LayoutSettings = ()=> {
    return(
        <div className="w-full ">
            <HeadingDashboard title={'Settings'}/>
        </div>
    )
}

LayoutSettings.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(LayoutSettings))
