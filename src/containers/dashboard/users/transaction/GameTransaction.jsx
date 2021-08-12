import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";

const GameTransaction = ()=> {
    return(
        <div className="w-full ">
            <HeadingDashboard title={'Game Transaction'}/>
        </div>
    )
}

GameTransaction.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(GameTransaction))
