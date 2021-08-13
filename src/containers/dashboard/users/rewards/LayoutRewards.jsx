import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";

const LayoutRewards = ()=> {
    return(
        <div className="w-full h-auto">
            <HeadingDashboard title={'Loyalty Bonuses'} desc={'Manage my super awesome twintastic loyalty bonuses'}/>

            <div className="w-full mb-8 block realtive">
                <div className="w-52 h-52 flex items-center p-4 justify-center rounded bg-scheme-primary">
                    <p className="text-white text-center font-medium leading-5">You don't have any pending rewards right now</p>
                </div>
            </div>

            <section className="w-full block relative mb-8">
                <div className="w-full block relative mb-4">
                    <h2 className="text-2xl mb-2 text-white font-medium">Active Loyalitas Bonuses</h2>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet lorem ipsum dolor sit amet </p>
                </div>
                <div className="w-full rounded bg-scheme-primary py-6 flex items-center justify-center">
                    <p className="text-white">No active Bonuses found</p>
                </div>
            </section>

            <section className="w-full block relative mb-8">
                <div className="w-full block relative mb-4">
                    <h2 className="text-2xl mb-2 text-white font-medium">Available Rewards</h2>
                    <p className="text-gray-400">These bonuses are available for you - just click activate if you'd like to take them</p>
                </div>
                <div className="w-full rounded bg-scheme-primary py-6 flex items-center justify-center">
                    <p className="text-white">No active Bonuses found</p>
                </div>
            </section>

            <section className="w-full block relative mb-8">
                <div className="w-full block relative mb-4">
                    <h2 className="text-2xl mb-2 text-white font-medium">Used Loyalty Bonuses</h2>
                    <p className="text-gray-400">Bonuses you have already rocked</p>
                </div>
                <div className="w-full rounded bg-scheme-primary py-6 flex items-center justify-center">
                    <p className="text-white">No active Bonuses found</p>
                </div>
            </section>

        </div>
    )
}

LayoutRewards.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(LayoutRewards))
