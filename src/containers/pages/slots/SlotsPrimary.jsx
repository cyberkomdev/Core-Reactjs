import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Containers from "../../main/Containers";
import HeadingPrimary from "../../../component/heading/HeadingPrimary";
import SidebarDealer from "../../main/sidebar/SidebarDealer";
import IconPromo from "../../../assets/icons/fogma.png";
import ImgBuiliding from "../../../assets/img/human_fm.png";
import IconASK from "../../../assets/icons/questionspng.png";
import Image1 from "../../../assets/img/dummy/dealer/1.jpg";
import Image2 from "../../../assets/img/dummy/dealer/2.jpg";
import Image3 from "../../../assets/img/dummy/dealer/3.jpg";
import Image4 from "../../../assets/img/dummy/dealer/4.jpg";
import Image5 from "../../../assets/img/dummy/dealer/5.jpg";
import Image6 from "../../../assets/img/dummy/dealer/6.jpg";
import Image7 from "../../../assets/img/dummy/dealer/7.jpg";
import TheSidebar from "../../main/sidebar/TheSidebar";

const SlotsPrimary = () => {


    const [dealer, setDealer] = useState(
        [
            {images: Image1, name: 'Game name'},
            {images: Image2, name: 'Game name'},
            {images: Image3, name: 'Game name'},
            {images: Image4, name: 'Game name'},
            {images: Image5, name: 'Game name'},
            {images: Image6, name: 'Game name'},
            {images: Image7, name: 'Game name'},
        ]
    )

    const [tab, setTab] = useState(1)

    const [most, setMost] = useState(false)
    const [prov,setProv] = useState(false)

    const handleSelect = (param) => {
        if (param === "most"){
            setMost(!most)
        }else{
            setProv(!prov)
        }

    }


    const handleTab = (id) => {
        if (tab !== id) {
            setTab(id)
        }
    }


    return (
        <Containers>
            <div className="w-full grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <TheSidebar/>


                <div className="w-full col-span-9">

                    <div className="w-full relative">

                        {/* Heading */}
                        <div className="h-24 border-b-2 border-scheme-gold w-full bg-gray-700 mb-8 flex items-center">

                            <div className="w-full flex items-center h-full">
                                <div className="mr-4 w-full flex items-center px-4">
                                    <div className="mr-4 rounded-full p-2">
                                        <img src={IconPromo} alt="icon-fogma" className="w-8"/>
                                    </div>
                                    <h1 className="text-scheme-gold text-2xl leading-4 font-medium  whitespace-nowrap">ALL
                                        SLOTS</h1>
                                </div>

                                <div className="w-full block relative h-full flex items-center mx-4">
                                    <button onClick={()=> (handleSelect('most'))} className="
                                    text-gray-200 uppercase text-base
                                    border-b border-gray-200 h-10 my-auto w-full text-left
                                    relative block
                                    ">{`Most Popular`}
                                        <div
                                            className={`
                                            transition duration-200
                                            transform 
                                             flex items-center justify-center h-10 w-10
                                             absolute top-0 right-0 z-10 bg-gray-300
                                            `}>
                                            <svg
                                                className={`transform transition duration-200 ${most ? 'rotate-0' : '-rotate-90'}`}
                                                version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                                y="0px"
                                                width="15" height="15" viewBox="0 0 444.819 444.819"
                                                style={{enableBackground: 'new 0 0 444.819 444.819'}}>
                                                <g>
                                                    <path d="M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561
                                                    L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416
                                                    C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848
                                                    c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693
                                                    C444.819,130.287,441.295,121.629,434.252,114.203z"/>
                                                </g>
                                            </svg>

                                        </div>
                                    </button>


                                    <ul className={`
                                    transition duration-200
                                        ${most ? "h-auto opacity-100 block ease-out" : "h-0 opacity-0 hidden ease-out"}
                                        w-full shadow-2xl absolute z-20 bg-white left-0
                                        rounded-bl-lg rounded-br-lg top-20 p-2 bg-scheme-primary
                                    `}>
                                        {[
                                            "2 BY 2 GAMES",
                                            "BETSOFT",
                                            "EZUGI",
                                            "LEANDER",
                                            "MULTICOMMERCE",
                                            "NETENT",
                                            "QUICKSPIN",
                                            "WHG"].map((item, index) => (
                                            <li key={index}
                                                className="
                                                duration-200 transition cursor-pointer rounded
                                                text-gray-200
                                                hover:bg-scheme-primary_light
                                                w-full px-4 py-2
                                                " onClick={() => {
                                                console.log('clicked')
                                            }}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="w-full block relative h-full flex items-center mx-4">
                                    <button onClick={()=> (handleSelect('provider'))} className="
                                    text-gray-200 uppercase text-base
                                    border-b border-gray-200 h-10 my-auto w-full text-left
                                    relative block
                                    ">{`PROVIDER`}
                                        <div
                                            className={`
                                            transition duration-200
                                            transform 
                                             flex items-center justify-center h-10 w-10
                                             absolute top-0 right-0 z-10 bg-gray-300
                                            `}>
                                            <svg
                                                className={`transform transition duration-200 ${prov ? 'rotate-0' : '-rotate-90'}`}
                                                version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                                y="0px"
                                                width="15" height="15" viewBox="0 0 444.819 444.819"
                                                style={{enableBackground: 'new 0 0 444.819 444.819'}}>
                                                <g>
                                                    <path d="M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561
                                                    L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416
                                                    C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848
                                                    c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693
                                                    C444.819,130.287,441.295,121.629,434.252,114.203z"/>
                                                </g>
                                            </svg>

                                        </div>
                                    </button>


                                    <ul className={`
                                    transition duration-200
                                        ${prov ? "h-auto opacity-100 block ease-out" : "h-0 opacity-0 hidden ease-out"}
                                        w-full shadow-2xl absolute z-20 bg-white left-0
                                        rounded-bl-lg rounded-br-lg top-20 p-2 bg-scheme-primary
                                    `}>
                                        {[
                                            "2 BY 2 GAMES",
                                            "BETSOFT",
                                            "EZUGI",
                                            "LEANDER",
                                            "MULTICOMMERCE",
                                            "NETENT",
                                            "QUICKSPIN",
                                            "WHG"].map((item, index) => (
                                            <li key={index}
                                                className="
                                                duration-200 transition cursor-pointer rounded
                                                text-gray-200
                                                hover:bg-scheme-primary_light
                                                w-full px-4 py-2
                                                " onClick={() => {
                                                console.log('clicked')
                                            }}>{item}</li>
                                        ))}
                                    </ul>
                                </div>


                            </div>

                        </div>


                        <div className="w-full grid grid-cols-4 gap-4">

                            {dealer.length > 0 && dealer.map((item, index) => (

                                <div className="w-full h-full relative mb-2 " key={index}>

                                    <div className="w-full relative">

                                        <div
                                            className="w-full h-40 bg-scheme-primary_dark rounded-md relative overflow-hidden hover-opacity">

                                            <img src={item.images} alt=""
                                                 className="absolute z-0 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-full h-auto"/>

                                            <div
                                                className="w-full h-full absolute top-0 left-0 flex items-center   justify-center z-10">

                                                <button className="px-4 py-2 bg-green-600 text-white rounded">PLAY NOW
                                                </button>

                                            </div>

                                        </div>

                                        <div className="w-full flex items-center">

                                            <p className="text-white font-medium">{item.name}</p>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>


                    </div>
                </div>

            </div>
        </Containers>
    )
}


SlotsPrimary.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(SlotsPrimary)
