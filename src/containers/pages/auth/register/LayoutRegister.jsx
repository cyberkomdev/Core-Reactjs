import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const LayoutRegister = ()=> {
    return(
        <div className="w-full block relative">

        </div>
    )
}

LayoutRegister.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{})(React.memo(LayoutRegister))
