import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";

const LayoutHome = ()=> {
    return(
        <div className="w-full">
            <HeadingDashboard title={'Home'} desc={'Lorem ipsum dolor sit amet'}/>
        </div>
    )
}

LayoutHome.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(LayoutHome))
