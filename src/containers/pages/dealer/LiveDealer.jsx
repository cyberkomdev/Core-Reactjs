import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Image1 from '../../../assets/img/dummy/dealer/1.jpg'
import Image2 from '../../../assets/img/dummy/dealer/2.jpg'
import Image3 from '../../../assets/img/dummy/dealer/3.jpg'
import Image4 from '../../../assets/img/dummy/dealer/4.jpg'
import Image5 from '../../../assets/img/dummy/dealer/5.jpg'
import Image6 from '../../../assets/img/dummy/dealer/6.jpg'
import Image7 from '../../../assets/img/dummy/dealer/7.jpg'
import SidebarDealer from "../../main/sidebar/SidebarDealer";
import IconPromo from "../../../assets/icons/fogma.png";
import ImgBuiliding from "../../../assets/img/human_fm.png";

import IconASK from '../../../assets/icons/questionspng.png'

const LiveDealer = ()=> {

    const [dealer,setDealer] = useState(
        [
            {images:Image1,name:'Game name'},
            {images:Image2,name:'Game name'},
            {images:Image3,name:'Game name'},
            {images:Image4,name:'Game name'},
            {images:Image5,name:'Game name'},
            {images:Image6,name:'Game name'},
            {images:Image7,name:'Game name'},
        ]
    )
    return(
        <div className="w-full grid grid-cols-12 gap-4">
            {/* Sidebar */}
            <SidebarDealer/>


            <div className="w-full col-span-9">

                <div className="w-full relative">

                    {/* Heading */}
                    <div className="h-24 border-b-2 border-scheme-gold w-full bg-gray-700 mb-8 flex items-center">

                        <div className="w-full flex items-center h-full">
                            <div className="mr-4 w-full flex items-center px-4">
                                <div className="mr-4 rounded-full p-2">
                                    <img src={IconPromo} alt="icon-fogma" className="w-8"/>
                                </div>

                                <h1 className="text-scheme-gold text-2xl leading-4 font-medium  whitespace-nowrap">LIVE DEALERS</h1>
                            </div>

                            <div className="w-full block relative h-full">
                                <img src={ImgBuiliding} alt="building" className="absolute bottom-0 right-4 h-28"/>
                            </div>
                            {/* Spacers */}
                            <div className="w-60 min-w-60 block whitespace-nowrap mr-4 relative">
                                <img src={IconASK} alt="building" className="h-12 mx-auto"/>
                                <p className="text-white font-medium">HOW DOES IT WORK ?</p>
                            </div>
                        </div>

                    </div>



                    <div className="w-full grid grid-cols-4 gap-4">

                        {dealer.length > 0 && dealer.map((item,index)=> (

                            <div className="w-full h-full relative mb-2 " key={index}>

                                <div className="w-full relative">

                                    <div className="w-full h-40 bg-scheme-primary_dark rounded-md relative overflow-hidden hover-opacity">

                                        <img src={item.images} alt="" className="absolute z-0 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-full h-auto"/>

                                        <div className="w-full h-full absolute top-0 left-0 flex items-center   justify-center z-10">

                                            <button className="px-4 py-2 bg-green-600 text-white rounded">PLAY NOW</button>

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
    )
}

LiveDealer.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(LiveDealer)
