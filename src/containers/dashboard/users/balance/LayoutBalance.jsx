import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";

const LayoutBalance = ()=> {
    return(
        <div className="w-full ">
            <HeadingDashboard title={'Balance'} desc={'Checkout out your balance and pending transactions'}/>

            <section className="grid grid-cols-2 gap-4 w-full">
                <div className="col-span-1 p-6 rounded bg-scheme-primary">
                    <div className="w-full mb-4">
                        <h2 className="text-white text-2xl mb-2">Total Balance</h2>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="w-full block flex items-center justify-between bg-cyan-default rounded-full">
                        <button className="w-full py-3 px-4 text-left">
                            <span className="text-gray-800 font-bold mr-2 text-base">USD</span>
                            <span className="text-gray-800 text-base">0.0</span>
                        </button>
                        <div className="px-4 h-8 mr-2 rounded-full bg-white">

                        </div>
                    </div>
                </div>
                <div className="col-span-1 p-6 rounded bg-scheme-primary">
                    <div className="w-full mb-4">
                        <h2 className="text-white text-2xl mb-2">Total Balance</h2>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="w-full block flex flex-shrink bg-dashboard-cards rounded-full">
                        <button className="w-full py-3 px-4 text-left">
                            <span className="text-cyan-default mr-2 text-base">USD</span>
                            <span className="text-cyan-default mr-2 text-base">0.0</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-1 p-6 rounded bg-scheme-primary">
                    <div className="w-full mb-4">
                        <h2 className="text-white text-2xl mb-2">Total Balance</h2>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="w-full block flex flex-shrink bg-dashboard-cards rounded-full">
                        <button className="w-full py-3 px-4 text-left">
                            <span className="text-cyan-default mr-2 text-base">USD</span>
                            <span className="text-cyan-default mr-2 text-base">0.0</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

LayoutBalance.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(LayoutBalance))
