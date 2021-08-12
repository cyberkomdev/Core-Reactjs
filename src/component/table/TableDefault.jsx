import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const TableDefault = ()=> {
    return(
        <div className="w-full h-80 border border-pink-500">
            <h1>Table Default</h1>
        </div>
    )


}
TableDefault.propTypes = {

}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {})(React.memo(TableDefault))
