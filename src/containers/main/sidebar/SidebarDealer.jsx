import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import imgCard from "../../../assets/img/imgcard.jpg";
import {Link} from "react-router-dom";


import Image1 from "../../../assets/img/dummy/dealer/1.jpg";
import Image2 from "../../../assets/img/dummy/dealer/2.jpg";
import Image3 from "../../../assets/img/dummy/dealer/3.jpg";
import Image4 from "../../../assets/img/dummy/dealer/4.jpg";
import Image5 from "../../../assets/img/dummy/dealer/5.jpg";
import Image6 from "../../../assets/img/dummy/dealer/6.jpg";
import Image7 from "../../../assets/img/dummy/dealer/7.jpg";

const SidebarDealer = ()=> {

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
        <div className="col-span-3">

            {/* Section 1*/}
            <div className="grid grid-cols-1 w-full mb-4">
                <div className="w-full rounded h-60 mb-2 relative overflow-hidden">
                    <img src={Image2} alt="" className="w-full absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-full object-cover "/>
                </div>

                <div className="w-full rounded h-60 mb-2 relative overflow-hidden">
                    <img src={Image4} alt="" className="w-full absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-full object-cover "/>
                </div>

                <div className="w-full rounded h-60 mb-2 relative overflow-hidden">
                    <img src={Image7} alt="" className="w-full absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-full object-cover "/>
                </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-2">
                {dealer.map((item,index)=> (
                    <div className="col-span-1 rounded h-40 mb-2 relative overflow-hidden" key={index}>
                        <img src={item.images} alt="" className="w-full absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-full object-cover "/>
                    </div>
                ))}
            </div>
        </div>
    )
}

SidebarDealer.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(React.memo(SidebarDealer))
