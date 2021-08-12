import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ChevronLeft from "../../../../assets/icons/chevron-left.svg";
import ChevronRight from "../../../../assets/icons/chevron-right.svg";

const CardSection = (props)=> {
    let {title, icons, data} = props

    const [currentImage, setCurrentImage] = useState(0);

    const refs = data.reduce((acc, val, i) => {
        acc[i] = React.createRef();
        return acc;
    }, {});

    const scrollToImage = i => {
        setCurrentImage(i);
        refs[i].current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
            alignToTop : false
        });
    };

    const totalImages = data.length;


    const nextImage = () => {
        if (currentImage >= totalImages - 4) {
            scrollToImage(0);
        } else {
            scrollToImage(currentImage + 4);
        }
    };

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImages - 4);
        } else {
            scrollToImage(currentImage - 4);
        }
    };

    const arrowStyle    = "absolute mt-4 top-0 h-40 w-10 border-0 flex items-center justify-center focus:border-0 active:border-0 active:ring-0 active:ring-transparent";

    const sliderControl = isLeft => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-0' : 'right-0'}`}
        >
            <img src={isLeft ? ChevronLeft : ChevronRight} alt={isLeft ? 'PREV':'NEXT'} className="w-5"/>
        </button>
    );

    return (
        <div className="w-full h-auto block relative mb-8">
            <div className="w-full border-b border-scheme-gold py-1 pb-2 flex items-center">
                <div className="w-8 h-8 bg-white mr-2 rounded-full"/>
                <h2 className="text-white font-medium text-xl">{title}</h2>
            </div>
            <div className="w-full block relative py-4 px-12 ">
                {sliderControl(true)}
                {sliderControl(false)}
                <div className="w-full flex items-center flex-auto overflow-hidden">
                    {data.map((items,idx)=> (
                        <div className="w-full " key={idx} ref={refs[idx]} style={{minWidth: 'calc(100% / 4 - 20px)', margin:'0 10px'}}>
                            <div className="h-40 w-full rounded overflow-hidden relative">
                                <img src={items.images} alt="" className="w-full absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-full object-cover "/>
                            </div>
                            <div className="h-8 w-full">
                                <p className="text-white ">{items.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )


}

CardSection.propTypes = {

}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {})(CardSection)
