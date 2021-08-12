import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SearchSidebar from "../search/SearchSidebar";
import imgCard from '../../../assets/img/imgcard.jpg'
import {Link} from "react-router-dom";
const TheSidebar = ()=> {
    return(
        <div className="col-span-3">
            <SearchSidebar/>

            {/* Content #1*/}
            <div className="w-full bg-scheme-primary_dark p-2 rounded mb-4">
                <div className="w-full mb-2 flex items-center pt-4 pb-2 border-b border-scheme-gold">
                    <div className="w-10 h-full mr-2 text-scheme-gold flex  items-center justify-center">
                        <svg id="bold" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="50"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none" stroke="currentColor"
                             className="fill-current"
                        >
                            <path d="m8.25 21.25c-2.481 0-4.5-2.019-4.5-4.5 0-.48.071-.937.212-1.357.175-.524.742-.805 1.265-.631.524.175.807.742.631 1.265-.071.216-.108.459-.108.723 0 1.378 1.122 2.5 2.5 2.5 1.146 0 2.167-.807 2.426-1.917.125-.538.666-.874 1.201-.746.538.125.872.664.746 1.201-.476 2.038-2.274 3.462-4.373 3.462z"/>
                            <path d="m23.25 21.5c-.07 0-.14-.01-.208-.029l-22.5-6.5c-.321-.093-.542-.387-.542-.721v-4.5c0-.334.221-.628.542-.721l22.5-6.5c.227-.063.471-.021.659.121s.299.364.299.6v17.5c0 .236-.111.458-.299.6-.132.098-.29.15-.451.15z"/>
                            <path d="m23 22.25c-.552 0-1-.448-1-1v-18.5c0-.552.448-1 1-1s1 .448 1 1v18.5c0 .552-.448 1-1 1z"/>
                            <path d="m1 16.25c-.552 0-1-.448-1-1v-6.5c0-.552.448-1 1-1s1 .448 1 1v6.5c0 .552-.448 1-1 1z"/>
                        </svg>

                    </div>
                    <h3 className="text-white font-medium text-lg">HOT PROMOTIONS</h3>
                </div>
                <div className="w-full p-2">
                    {[0,2,3,4,5].map((item,index)=> (
                        <div className={`w-full grid grid-cols-9 items-center  mb-2 h-24 pb-2 ${index < 4 ? 'border-b border-gray-700' :''}`}>
                            <div className="col-span-3 h-full relative overflow-hidden rounded-lg">
                                <img src={imgCard} alt="" className="w-full absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-full object-cover "/>
                            </div>
                            <div className="col-span-6 h-full px-2">
                                <div className="w-full block relative">
                                    <h4 className="text-scheme-gold whitespace truncate font-medium">PROMOTION TITLE</h4>
                                </div>
                                <div className="w-full h-full overflow-hidden">
                                    <p className="text-white font-thin leading-4">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full bg-scheme-primary_dark p-2 rounded">
                <div className="w-full mb-2 pt-4 pb-2 flex items-center border-b-2 border-scheme-gold">
                    <div className="w-10 h-full mr-2 text-scheme-gold flex  items-center justify-center">
                        <svg id="bold" enableBackground="new 0 0 24 24" height="25" viewBox="0 0 24 24" width="50"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none" stroke="currentColor"
                             className="fill-current"
                        >
                            <path d="m8.25 21.25c-2.481 0-4.5-2.019-4.5-4.5 0-.48.071-.937.212-1.357.175-.524.742-.805 1.265-.631.524.175.807.742.631 1.265-.071.216-.108.459-.108.723 0 1.378 1.122 2.5 2.5 2.5 1.146 0 2.167-.807 2.426-1.917.125-.538.666-.874 1.201-.746.538.125.872.664.746 1.201-.476 2.038-2.274 3.462-4.373 3.462z"/>
                            <path d="m23.25 21.5c-.07 0-.14-.01-.208-.029l-22.5-6.5c-.321-.093-.542-.387-.542-.721v-4.5c0-.334.221-.628.542-.721l22.5-6.5c.227-.063.471-.021.659.121s.299.364.299.6v17.5c0 .236-.111.458-.299.6-.132.098-.29.15-.451.15z"/>
                            <path d="m23 22.25c-.552 0-1-.448-1-1v-18.5c0-.552.448-1 1-1s1 .448 1 1v18.5c0 .552-.448 1-1 1z"/>
                            <path d="m1 16.25c-.552 0-1-.448-1-1v-6.5c0-.552.448-1 1-1s1 .448 1 1v6.5c0 .552-.448 1-1 1z"/>
                        </svg>

                    </div>
                    <h3 className="text-white font-medium text-lg">LATES WINNERS</h3>
                </div>
                <div className="w-full p-2">
                    {[0,2,3,4,5].map((item,index)=> (
                        <Link to={'/'} className={`w-full grid grid-cols-12 items-center  mb-6 pb-2`}>
                            <div className="col-span-3 h-full flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                                    <img src={imgCard} alt="" className="w-full absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-full object-cover "/>
                                </div>

                            </div>
                            <div className="col-span-5 px-2">
                                <div className="w-full block relative">
                                    <h4 className="text-scheme-gold whitespace truncate text-sm">Player Name</h4>
                                </div>
                                <div className="w-full h-full overflow-hidden">
                                    <p className="text-white font-thin leading-4">Game Name</p>
                                </div>
                            </div>

                            <div className="col-span-4">
                                <p className="text-scheme-gold font-medium whitespace-nowrap">$200.000</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

TheSidebar.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(TheSidebar)
