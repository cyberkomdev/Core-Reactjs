import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TheHeader from "./headers/TheHeader";
import TheSidebar from "./sidebar/TheSidebar";

import SecondMenus from "./menus/SecondMenus";
import TheFooter from "./footer/TheFooter";
import BannerPrimary from "../../component/banner/BannerPrimary";

const TheMain = ({children}) => {

    return (
        <div className="w-full bg-scheme-primary">
            <TheHeader/>
            <div className="min-h-screen mt-20">
                <BannerPrimary/>

                {/* Second Menu*/}
                <SecondMenus/>


                {/* Content */}
                <div className="w-full max-w-6xl mx-auto mb-12">
                    {children}
                </div>
                <TheFooter/>
            </div>
        </div>
    )
}

TheMain.propTypes = {
    children: PropTypes.element.isRequired
}

const mapStateToProps = state => ({
    Auth: state.Auth
})

export default connect(mapStateToProps, {})(React.memo(TheMain))
