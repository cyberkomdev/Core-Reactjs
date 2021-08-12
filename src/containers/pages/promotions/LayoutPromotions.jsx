import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Containers from "../../main/Containers";
import HeadingPrimary from "../../../component/heading/HeadingPrimary";
import IconPromo    from '../../../assets/icons/fogma.png'

import Games2 from '../../../assets/img/games2.jpg'

import ImgBuiliding from '../../../assets/icons/building.png'


const LayoutPromotions = ()=> {
    return(
        <Containers>
            <div className="w-full block relative">
                {/* Heading */}
                <div className="h-24 border-b-2 border-scheme-gold w-full bg-gray-700 mb-8 flex items-center">

                    <div className="w-full flex items-center h-full">
                        <div className="mr-4 w-full flex items-center px-4">
                            <div className="mr-4 rounded-full p-2">
                                <img src={IconPromo} alt="icon-fogma" className="w-8"/>
                            </div>

                            <h1 className="text-scheme-gold text-2xl leading-4 font-medium  whitespace-nowrap">PROMOTIONS</h1>
                        </div>

                        {/* Spacers */}
                        {/*<div className="w-full block"/>*/}

                        <div className="w-full block relative h-full">
                            <img src={ImgBuiliding} alt="building" className="absolute bottom-0 right-4 h-20"/>
                        </div>
                    </div>

                </div>

                <div className="w-full block relative">
                    {[0,1,2,3,4,5].map((items,index)=> (
                        <div className="w-full mb-8 bg-scheme-primary_dark grid rounded grid-cols-12 gap-4" key={index}>
                            <div className="col-span-4 h-60 relative overflow-hidden rounded">
                                <img src={Games2} alt="games" className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-full"/>
                            </div>
                            <div className="col-span-8 px-4">
                                <div className="w-full py-2">
                                    <h3 className="text-scheme-gold font-medium text-3xl truncate">100% WELCOME DEPOSIT BONUS</h3>
                                </div>
                                <div className="w-full block relative">
                                    <p className="text-xl text-green-500 text-white">Bonus Policy</p>
                                </div>
                                <div className="w-full block relative">
                                    <p className="text-gray-300 font-light text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                </div>
                                <div className="w-full block relative mb-4">
                                    <button className="text-scheme-gold text-base">Read More...</button>
                                </div>
                                <div className="w-full block relative">
                                    <button className="text-white bg-green-500 transition duration-300 hover:bg-green-600 px-4 py-2 text-sm rounded">DEPOSIT NOW</button>
                                </div>


                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </Containers>
    )
}

LayoutPromotions.propTypes ={}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(React.memo(LayoutPromotions))
