import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Image0 from '../../assets/img/banner/banner_home.png'
import Image1 from '../../assets/img/banner/home_banner_11.png'
import Image2 from '../../assets/img/banner/craps_banner_1980x800_2020_08_01.png'
import Image3 from '../../assets/img/banner/crazy_time_banner_1980x800_2020_05_05.png'
import Image4 from '../../assets/img/banner/gonzos_treasure_hunt.png'
import Image5 from '../../assets/img/banner/dragon_tiger_banner_1980x800_2021_02_01.png'
import Image6 from '../../assets/img/banner/red_envelope_baccarat_banner_simchi_1980x800_2021_01_02.png'

import Slider from 'react-slick';

import ChevronLeft from "../../assets/icons/chevron-left.svg";
import ChevronRight from "../../assets/icons/chevron-right.svg";

function NextArrow(props) {
    const { onClick } = props;
    return (
        <button
            className="
            w-20 absolute right-0 top-0 h-full
            flex items-center justify-center
            transition duration-300
            opacity-0
            group-hover:opacity-100
            "
            onClick={onClick}
        >
            <img src={ChevronRight} alt="chevron-right" className="w-10 z-10"/>
            <div className="absolute w-full right-0 top-0 h-full z-0 opacity-0 group-hover:opacity-50 transition duration-300 bg-black"/>
        </button>
    );
}
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button
            className=" z-10
            w-20 absolute left-0 top-0 h-full
            flex items-center justify-center
            transition duration-300
            opacity-0
            group-hover:opacity-100
            "
            onClick={onClick}
        >
            <img src={ChevronLeft} alt="chevron-left" className="w-10 z-10"/>
            <div className="absolute w-full right-0 top-0 h-full z-0 opacity-0 group-hover:opacity-50 transition duration-300 bg-black"/>
        </button>
    );
}

const BannerPrimary = () => {
    const [bImage, setBImage] = useState([Image0, Image1, Image2, Image3, Image4, Image5, Image6])

    const [states,setStates] = useState({
        active:0
    })

    const DotsAppend = ({dots})=> (
        <div className="w-full h-10  absolute z-10 bottom-5 left-0">
            <ul className="h-full flex px-4 items-center gap-2">{dots}</ul>
        </div>
    )

    const [settings, setSettings] = useState({
        className: 'w-full relative h-full group block',
        dots: true,
        lazyload:true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow:<PrevArrow/>,
        beforeChange: (current, next) => {
            setStates({
                active: next
            })
        },

        appendDots: dots => (
           <DotsAppend dots={dots}/>
        ),
        customPaging: i => (
            <button
                className={`cursor-pointer rounded-full bg-gray-500 w-3 h-3`}
            >
            </button>
        )

    })
    console.log(states)


    return (
        <div className=" w-full relative max-w-6xl mx-auto group" style={{height: '380px'}}>
            <div className="flex w-full mx-auto relative overflow-hidden h-full">
            <Slider {...settings}>
                {bImage.map((item, index) => (

                    <div className="w-full h-full relative overflow-hidden">
                        <img src={item} alt={`banner-image-${index}`}
                             className="w-full h-full object-cover"/>
                    </div>
                ))}
            </Slider>
            </div>

        </div>
    )
}

BannerPrimary.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(React.memo(BannerPrimary))
