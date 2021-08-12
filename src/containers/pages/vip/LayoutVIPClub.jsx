import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Containers from "../../main/Containers";
import IconPromo from "../../../assets/icons/forgma_mobiles.png";
import ImgBuiliding from "../../../assets/icons/building.png";
import {Link} from "react-router-dom";
import BannerSidebar from "../../../assets/img/banner/sidebar/vip.png";
import VIPLogo  from '../../../assets/icons/other/vip.png'
import Star from '../../../assets/icons/star2.svg'
import StartGold from '../../../assets/icons/star/gold.png'
import StartSilver from '../../../assets/icons/star/silver.png'
import StarBronze from '../../../assets/icons/star/bronze.png'
import StartPlatinum from '../../../assets/icons/star/platinum.png'
import StartDiamon from '../../../assets/icons/star/star_last.png'

const LayoutVIPClub = () => {
    return (
        <Containers>
            <div className="w-full block relative">
                {/* Heading */}
                <div className="h-24 border-b-2 border-scheme-gold w-full bg-gray-700 mb-8 flex items-center">

                    <div className="w-full flex items-center h-full">
                        <div className="mr-4 w-full flex items-center px-4">
                            <div className="mr-4 rounded-full p-2">
                                <img src={IconPromo} alt="icon-fogma" className="w-12"/>
                            </div>

                            <h1 className="text-scheme-gold text-2xl leading-4 font-medium  whitespace-nowrap">{'MOBILE'}</h1>
                        </div>

                        {/* Spacers */}
                        {/*<div className="w-full block"/>*/}

                        <div className="w-full block relative h-full">
                            <img src={ImgBuiliding} alt="building" className="absolute bottom-0 right-4 h-20"/>
                        </div>
                    </div>

                </div>

                <div className="w-full grid grid-cols-12 gap-4">
                    <div className="col-span-3 h-full relative">
                        <div className="w-full relative block">
                            <img src={BannerSidebar} alt="banner-sidebar" className="w-full rounded"/>
                            <div className="absolute bottom-5 w-full flex items-center justify-center">
                                <button className="
                            mx-auto
                            bg-scheme-gold px-10 text-scheme-gold_primary
                            font-medium py-2 rounded-full text-sm
                            transition duration-200 hover:bg-scheme-gold_hover
                            "> JOIN NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-9 block relative">
                        <div className="w-full block relative mb-4">
                            <h2 className="text-scheme-gold font-medium text-2xl uppercase">Astoncasino.com’s Vip
                                room</h2>
                        </div>
                        <div className="w-full block relative mb-8 cursor-default mb-8">
                            <p className="text-gray-300 mb-4 text-justify">
                                The <Link to={'/'}
                                          className="text-scheme-gold  transition duration-300 hover:text-scheme-gold_hover">Aston
                                Casino VIP Club</Link> is a rewards program specially
                                designed for our most loyal Casino and Slots players. The VIP Club offers our members
                                the most generous promotions,
                                discounts and special benefits we have available at Aston Casino. This is our way of
                                thanking all you lovely men and women who make our casino come alive. We want our
                                Members to enjoy the funnest,
                                most fulfilling casino experience possible. Thank you for continuing to play with us.
                            </p>
                            <p className="text-gray-300 mb-4">
                                If you’re confused about exactly what the benefits are for each level, be sure to take a
                                look at our handle VIP table below.
                            </p>
                        </div>

                        <div className="w-full block relative  py-4">
                            <div className="grid grid-cols-12 ">
                                <div className="col-span-3 bg-gray-700 rounded-tl rounded-bl py-4 px-2">
                                    <div className="h-40 w-full mb-4">
                                        <div className="h-32 flex justify-center items-center">
                                            <img src={VIPLogo} alt="benefit" className="w-32"/>
                                        </div>
                                        <div className="h-7">
                                            <p className="uppercase text-scheme-gold font-bold text-2xl text-center">Benefit</p>
                                        </div>
                                    </div>
                                    <div className="border-b border-yellow-300 mb-2"/>
                                    <div className="w-full h-8 flex items-center mb-2">
                                        <p className="text-gray-300 text-sm">Online VIP Club Status</p>
                                    </div>
                                    <div className="w-full h-8 flex items-center mb-2">
                                        <p className="text-gray-300 text-sm">Monthly Newsletter</p>
                                    </div>
                                    <div className="w-full h-8 flex items-center mb-2">
                                        <p className="text-gray-300 text-sm">VIP Customer Support</p>
                                    </div>
                                    <div className="w-full h-8 flex items-center mb-2">
                                        <p className="text-gray-300 text-sm">Convert VIP points to CASH</p>
                                    </div>
                                    <div className="w-full h-8 flex mb-2">
                                        <p className="text-gray-300 text-sm leading-4">Maximum number of VIP points
                                            you can convert in a day</p>
                                    </div>
                                    <div className="w-full h-8 flex items-center mb-2">
                                        <p className="text-gray-300 text-sm">VIP Customer Support</p>
                                    </div>
                                    <div className="w-full h-8 flex items-center mb-2">
                                        <p className="text-gray-300 text-sm">Birthday Presents</p>
                                    </div>
                                    <div className="w-full h-8 flex items-center mb-2">
                                        <p className="text-gray-300 text-sm">VIP Support HOTLINE</p>
                                    </div>
                                    <div className="w-full h-8 flex items-center mb-2">
                                        <p className="text-gray-300 text-sm">Manager</p>
                                    </div>

                                    <div className="w-full h-8 flex items-center mb-2">
                                        <p className="text-gray-300 text-sm">Personalised Gifts</p>
                                    </div>
                                    <div className="w-full h-8 flex items-center mb-2">
                                        <p className="text-gray-300 text-sm">Anniversary Bonus</p>
                                    </div>
                                </div>



                                <div className="col-span-9 flex items-center">
                                    <div className="w-full bg-yellow-800 h-full py-4 px-2">
                                        <div className="h-40 w-full mb-4 relative">
                                            <div className="items-center justify-center flex h-20 w-full">
                                                <img src={StarBronze} alt="gold" className="w-18"/>
                                            </div>
                                            <div className="w-full block">
                                                <h4 className="text-gray-700 uppercase text-center font-bold ">VIP Bronze</h4>
                                            </div>
                                            <div className="w-full block mb-4">
                                                <p className="text-gray-700 uppercase text-center text-xs">0 - 500 Points</p>
                                            </div>
                                            <div className="w-full block absolute bottom-0 left-0">
                                                <p className="text-gray-700 uppercase text-center font-medium text-xs ">ON DISCOUNT</p>
                                            </div>
                                        </div>
                                        <div className="border-b border-gray-700 mb-2"/>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <p className="text-gray-600 font-bold leading-4">500</p>
                                        </div>
                                    </div>


                                    <div className="w-full bg-gray-100 h-full py-4 px-2">
                                        <div className="h-40 w-full mb-4 relative">
                                            <div className="items-center justify-center flex h-20 w-full">
                                                <img src={StartSilver} alt="gold" className="w-18"/>
                                            </div>
                                            <div className="w-full block">
                                                <h4 className="text-gray-700 uppercase text-center font-bold ">VIP Silver</h4>
                                            </div>
                                            <div className="w-full block mb-4">
                                                <p className="text-gray-700 uppercase text-center text-xs">501 - 1000 Points</p>
                                            </div>
                                            <div className="w-full block absolute bottom-0 left-0">
                                                <p className="text-gray-700 uppercase text-center font-medium text-xs ">2% DISCOUNT</p>
                                            </div>
                                        </div>
                                        <div className="border-b border-gray-700 mb-2"/>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <p className="text-gray-600 font-bold leading-4">2,500</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-yellow-600 h-full py-4 px-2">
                                        <div className="h-40 w-full mb-4 relative">
                                            <div className="items-center justify-center flex h-20 w-full">
                                                <img src={StartGold} alt="gold" className="w-18"/>
                                            </div>
                                            <div className="w-full block">
                                                <h4 className="text-gray-700 uppercase text-center font-bold ">VIP GOLD</h4>
                                            </div>
                                            <div className="w-full block mb-4">
                                                <p className="text-gray-700 uppercase text-center text-xs">1001 - 50000 points</p>
                                            </div>
                                            <div className="w-full block absolute bottom-0 left-0">
                                                <p className="text-gray-700 uppercase text-center font-medium text-xs ">4% DISCOUNT</p>
                                            </div>
                                        </div>
                                        <div className="border-b border-gray-700 mb-2"/>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <p className="text-gray-600 font-bold leading-4">5,000</p>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-300 h-full py-4 px-2">
                                        <div className="h-40 w-full mb-4 relative">
                                            <div className="items-center justify-center flex h-20 w-full">
                                                <img src={StartPlatinum} alt="gold" className="w-18"/>
                                            </div>
                                            <div className="w-full block">
                                                <h4 className="text-gray-800 uppercase text-center font-bold ">VIP PLATINUM</h4>
                                            </div>
                                            <div className="w-full block mb-4">
                                                <p className="text-gray-800 uppercase text-center text-xs">50001 - 10,000 points</p>
                                            </div>
                                            <div className="w-full block absolute bottom-0 left-0">
                                                <p className="text-gray-800 uppercase text-center font-medium text-xs ">7% DISCOUNT</p>
                                            </div>
                                        </div>
                                        <div className="border-b border-gray-700 mb-2"/>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <p className="text-gray-600 font-bold leading-4">10,000</p>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                    </div>
                                    <div className="w-full bg-cyan-500 rounded-tr rounded-br h-full py-4 px-2">
                                        <div className="h-40 w-full mb-4 relative">
                                            <div className="items-center justify-center flex h-20 w-full">
                                                <img src={StartDiamon} alt="gold" className="w-18"/>
                                            </div>
                                            <div className="w-full block">
                                                <h4 className="text-gray-800 uppercase text-center font-bold ">VIP DIAMOND</h4>
                                            </div>
                                            <div className="w-full block mb-4">
                                                <p className="text-gray-800 uppercase text-center text-xs">over 10,000 points</p>
                                            </div>
                                            <div className="w-full block absolute bottom-0 left-0">
                                                <p className="text-gray-800 uppercase text-center font-medium text-xs ">10% DISCOUNT</p>
                                            </div>
                                        </div>
                                        <div className="border-b border-gray-700 mb-2"/>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <p className="text-gray-800 font-bold leading-4">30,000</p>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>
                                        <div className="w-full h-8 flex items-center justify-center mb-2">
                                            <img src={Star} alt="" className="w-4"/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Containers>
    )
}
LayoutVIPClub.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(React.memo(LayoutVIPClub))
