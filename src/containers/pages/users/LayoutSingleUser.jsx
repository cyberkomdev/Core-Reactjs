import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingPrimary from "../../../component/heading/HeadingPrimary";
import {Link} from "react-router-dom";

const LayoutSingleUser = ()=> {

    const [Position,setPosition] = useState([])
    const [formData,setFormData] = useState({
        username:null,
        password:null,
        position: "Active",
        status: "pending"
    })
    useEffect(()=> {
        setFormData({
            username:"John Doe",
            password:"1291512",
            position:"Active",
            status: "pending"
        })
        setPosition([
            {
                value:'A',
                label:"Active"
            },
            {
                value:'B',
                label:"Pending"
            },
            {
                value:'C',
                label:"Not Verify"
            },

        ])

    },[])



    return(
        <div className="w-full block relative">
            {/* Heading */}
            <HeadingPrimary title={`Single - ${formData.username}`}/>

            {/* Content */}
            <div className="w-full h-auto block relative">

                {/* Grid Layout */}
                <div className="grid grid-cols-2 gap-4">

                    {/* [Col 1]*/}
                    <div className="w-full col-span-1">

                        {/* Grid - input Username */}
                        <div className="grid grid-cols-6 mb-4 items-center">
                            {/* Left */}
                            <div className="w-full col-span-1 h-full flex items-center">
                                <p className="text-white text-lg font-medium">{'Username'}</p>
                            </div>

                            {/* Right */}
                            <div className="w-full col-span-4">
                                <input
                                    name="username"
                                    value={formData.username}
                                    type="text"
                                    placeholder="Input username"
                                    className="
                                          bg-scheme-primary
                                        hover:bg-scheme-secondary
                                        transition duration-200
                                        w-full border-0 ring-0 text-white
                                        focus:border-transparent focus:border-0 focus:ring-transparent
                                    "
                                    disabled
                                />
                            </div>
                        </div>

                        {/* Grid - input Password */}
                        <div className="grid grid-cols-6 mb-4 items-center">
                            {/* Left */}
                            <div className="w-full col-span-1 h-full flex items-center">
                                <p className="text-white text-lg font-medium">{'Password'}</p>
                            </div>

                            {/* Right */}
                            <div className="w-full col-span-4 flex items-center gap-4">
                                <input
                                    name="password"
                                    type="text"
                                    value={formData.password}
                                    className="
                                        rounded
                                        bg-scheme-primary
                                        hover:bg-scheme-secondary
                                        transition duration-200
                                        w-full border-0 ring-0 text-white
                                        focus:border-transparent focus:border-0 focus:ring-transparent
                                    "
                                    disabled
                                />
                            </div>
                        </div>

                        {/* Grid - Select Position */}
                        <div className="grid grid-cols-6 mb-4 items-center">
                            {/* Left */}
                            <div className="w-full col-span-1 h-full flex items-center">
                                <p className="text-white text-lg font-medium">{'Position'}</p>
                            </div>

                            {/* Right */}
                            <div className="w-full col-span-4">
                                <select
                                    className="
                                        w-full rounded
                                        bg-scheme-primary
                                        border-0 ring-0
                                        text-white
                                        transition duration-100
                                        hover:bg-scheme-secondary
                                        focus:border-0 focus:ring-0
                                    "
                                    disabled
                                    name="position" value={formData.position}>
                                    {
                                        Position.length > 0 ? Position.map((item,index)=> (
                                                <option value={item.value}>{item.value}</option>
                                            )):
                                            <option value="default">{'Default'}</option>
                                    }
                                </select>
                            </div>
                        </div>

                        {/* Grid - Status */}
                        <div className="grid grid-cols-6 mb-4 items-center">
                            {/* Left */}
                            <div className="w-full col-span-1 h-full flex items-center">
                                <p className="text-white text-lg font-medium">{'Status'}</p>
                            </div>

                            {/* Right */}
                            <div className="w-full col-span-4">
                                <input
                                    name="status"
                                    value={formData.status}
                                    type="text"
                                    placeholder="username"
                                    className="
                                        w-full
                                        text-white
                                        border-0 ring-0
                                        focus:border-transparent focus:border-0 focus:ring-transparent
                                        bg-scheme-primary
                                    "
                                    disabled
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="grid grid-cols-6 mb-4 items-center">
                            {/* Left */}
                            <div className="w-full col-span-1 h-full flex items-center"/>

                            {/* Right */}
                            <div className="w-full col-span-4">
                                <Link to={'/user/edit/1093125'} className="
                                bg-scheme-blue text-white px-12 rounded py-2
                                hover:bg-scheme-blue-light
                                transition duration-200
                                ">{'Edit'}</Link>
                            </div>
                        </div>


                    </div>


                </div>

            </div>

        </div>
    )
}

LayoutSingleUser.propTypes = {

}

const mapStateToProps =state => ({

})

export default connect(mapStateToProps, {})(React.memo(LayoutSingleUser))
