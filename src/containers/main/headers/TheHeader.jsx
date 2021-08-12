import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import FlagsUK from '../../../assets/icons/flags/uk.svg'
import Logos from '../../../assets/img/bitevo.svg'
import {useLocation} from "react-router";
const TheHeader = ()=> {

    const [menus,setMenus] = useState([
            {
                url:'/',
                label: 'Home'
            },
            {
                url:'/casino-games',
                label: 'Casino Games'
            },
            {
                url:'/slots',
                label: 'Slots'
            },
            {
                url:'/live-dealer',
                label: 'Live Dealer'
            },
            {
                url:'/promotions',
                label: 'Promotions'
            },
            {
                url:'/vip-club',
                label: 'VIP Club'
            },
            {
                url:'/mobile',
                label: 'Mobile'
            },

        ])
    const location = useLocation();
    const { pathname } = location;
    const page = pathname.split('/')[1];

    return(
        <div className="h-24 w-full fixed top-0 left-0 z-40 block border-b-2 bg-scheme-primary_dark border-scheme-gold">
            <div className="w-full mx-auto max-w-6xl relative">
                <div className="w-full flex items-center relative">
                    <Link to={'/'} className="w-48 h-24 relative overflow-hidden flex items-center">
                        <img src={Logos} alt="logos" className="w-full"/>
                    </Link>
                    <div className="w-full block relative">
                        <div className="h-12 flex items-center">
                            {/* Spacers */}
                            <div className="w-full"/>
                            <div className="pl-10 h-full flex relative items-center">
                                <div className="w-auto h-full mr-4">
                                    <button className="px-4 h-full text-white flex items-center">
                                        <img src={FlagsUK} alt="" className="m-0 p-0 mr-2"/>
                                        <span>EN</span>
                                    </button>
                                </div>
                                <div className="w-full flex gap-4 h-full  py-2 whitespace-nowrap">
                                    <Link to={'/login'} className="bg-scheme-gold text-white rounded px-6 flex items-center justify-center h-full">Login</Link>
                                    <button className="bg-green-500 text-white rounded px-6 h-full">Join Now</button>
                                </div>
                            </div>

                        </div>
                        <div className="h-12">
                            <ul className="flex h-full">
                                {menus.map((item,index)=> (
                                    <li className={`h-full w-full flex items-center  transition duration-200
                            ${item.url !== "/"+page ?"border-b-0":"border-b-8 border-scheme-gold"}`} key={index}>
                                        <Link to={item.url} className="text-white text-center w-full">{item.label}</Link>
                                    </li>
                                ))}


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
TheHeader.propTypes  = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(TheHeader)
