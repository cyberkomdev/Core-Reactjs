import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Containers from "../../main/Containers";
import IconPromo from "../../../assets/icons/forgma_mobiles.png";
import ImgBuiliding from "../../../assets/icons/building.png";
import Games2 from "../../../assets/img/games2.jpg";
import {Link} from "react-router-dom";

import BannerSidebar from '../../../assets/img/banner/sidebar/page_mobile.png'

const PageMobiles = ()=> {
    return(
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
                        <Link to={'/'} className="block relative w-full h-full  ">
                            <img src={BannerSidebar} alt="banner-sidebar" className="h-full"/>
                        </Link>
                    </div>
                    <div className="col-span-9 block relative">
                        <div className="w-full block relative mb-4">
                            <h2 className="text-scheme-gold font-medium text-2xl">YOU'RE ALWAYS ONLINE WITH BITEVO CASINO</h2>
                        </div>
                        <div className="w-full block relative mb-8">
                            <p className="text-gray-300 mb-4">Play Mobile Slots,  Scratch Cards, Roulette And Blackjack Straight From Your iPhone, Tablet or Android Device!</p>
                            <p className="text-gray-300 mb-4"><Link to={'/'} className="text-scheme-gold  transition duration-300 hover:text-scheme-gold_light">Bitevo</Link> Play Mobile Slots,  Scratch Cards, Roulette And Blackjack Straight From Your iPhone, Tablet or Android Device!</p>
                            <p className="text-gray-300 mb-4">Enjoy popular slot machine games, including favourites Queen of Legends, Treasures of Egypt and many more.</p>
                            <p className="text-gray-300 mb-4">
                                Bitevo mobile casino is accessible from any mobile device; it’s quick and easy to use. Already a <Link to={'/'} className="text-scheme-gold  transition duration-300 hover:text-scheme-gold_light">free member</Link> of Bitevo Casino? Then just login to our site from your smartphone. If we see you’re an expert slots player,
                                we may even offer you a special VIP casino membership, with lots of bonus features for free!
                            </p>
                            <p className="text-gray-300 mb-4">
                                Start playing these top mobile games now, including Scratch Cards and Blackjack! Just {' '}
                                <Link to={'/'} className={'text-green-400 transition duration-300 hover:text-green-500'}>click here and get started now!</Link>
                            </p>



                        </div>
                    </div>
                </div>
            </div>
        </Containers>
    )
}

PageMobiles.propTypes ={

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(React.memo(PageMobiles))
