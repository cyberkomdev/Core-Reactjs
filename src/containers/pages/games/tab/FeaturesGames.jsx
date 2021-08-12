import React, {useState,Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Image1 from "../../../../assets/img/dummy/dealer/1.jpg";
import Image2 from "../../../../assets/img/dummy/dealer/2.jpg";
import Image3 from "../../../../assets/img/dummy/dealer/3.jpg";
import Image4 from "../../../../assets/img/dummy/dealer/4.jpg";
import Image5 from "../../../../assets/img/dummy/dealer/5.jpg";
import Image6 from "../../../../assets/img/dummy/dealer/6.jpg";
import Image7 from "../../../../assets/img/dummy/dealer/7.jpg";

const FeaturesGames = ()=> {
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

    return(
        <Fragment>
            {
                dealer.length > 0 && dealer.map((item, index) => (

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

                ))
            }
        </Fragment>
    )
}

FeaturesGames.propTypes ={

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(React.memo(FeaturesGames))
