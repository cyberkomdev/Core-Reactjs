import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import Containers from "../../../main/Containers";
import {Link, withRouter} from "react-router-dom";
import {useLocation} from "react-router";

const TheHeaders = ()=> {

    const [Menus,setMenus] = useState([
        {label:"Home", url:"/user"},
        {label:"Balance", url:"/user/balance"},
        {label:"Rewards", url:"/user/rewards"},
        {label:"Bonuse", url:"/user/bonuse"},
        {label:"Game Transactions", url:"/user/game-transactions"},
        {label:"Verification", url:"/user/verification"},
        {label:"Limits", url:"/user/limits"},
        {label:"Personal Settings", url:"/user/settings"},
        {label:"Change Password", url:"/user/change-password"},
        {label:"Login History", url:"/user/login-history"},
    ])

    const location = useLocation();
    const { pathname } = location;
    return(
        <div className="w-full bg-dashboard-secondary block relative">
            <div className="relative mx-auto h-full">
                <div className="w-full block h-16 ">
                    <div className="relative flex items-center justify-between h-full">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <button type="button"
                                    className="hidden sm:hidden
                                        inline-flex items-center justify-center p-2 rounded-md
                                         text-gray-400 hover:text-white hover:bg-gray-700
                                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>


                        <div className="flex-1  flex items-center h-full justify-center sm:items-stretch sm:justify-start">
                            <div className=" sm:ml-6 block relative h-full">
                                <div className="flex h-full">
                                    {
                                        Menus.map((item,index)=> (
                                            <Link to={item.url}
                                                  className={`
                                                    ${item.url === pathname ? 'text-dashboard-blue-light border-b border-dashboard-blue-light ': 'text-gray-300'}
                                                    text-white px-6 py-2
                                                    flex items-center block h-full
                                                    text-sm font-medium
                                                  `} key={index}
                                                  aria-current="page">{item.label}</Link>
                                        ))
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#"
                           className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                           aria-current="page">Dashboard</a>

                        <a href="#"
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                        <a href="#"
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                        <a href="#"
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
TheHeaders.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(withRouter(TheHeaders))
