import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingPrimary from "../../../component/heading/HeadingPrimary";

const LayoutEditUser = ()=> {
    const [Position,setPosition] = useState([])
    const [formData,setFormData] = useState({
        username:null,
        password:null,
        retype:null,
        position: "Active",
        status: "pending"
    })
    useEffect(()=> {
        setFormData({
            username:"John Doe",
            password:"1291512",
            retype:"",
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




    const [showPass,setShowPass] = useState(true)

    const handleShowPass = (pass)=> {
        if (showPass !== pass){
            setShowPass(!showPass)
        }
    }

    const handleChange = (e)=> {setFormData({...formData, [e.target.name]: e.target.value})}

    const handleSubmit = (e)=> {
        e.preventDefault()
    }

    return(
        <div className="w-full block relative">
            {/* Heading */}
            <HeadingPrimary title={"Edit User"}/>

            {/* Content */}
            <div className="w-full h-auto block relative">

                {/* Grid Layout */}
                <div className="grid grid-cols-2 gap-4">

                    {/* [Col 1]*/}
                    <form onSubmit={handleSubmit} className="w-full col-span-1">

                        {/* Grid - input Username */}
                        <div className="grid grid-cols-6 mb-4 items-center">
                            {/* Left */}
                            <div className="w-full col-span-1 h-full flex items-center">
                                <p className="text-white text-lg font-medium">{'Username'}</p>
                            </div>

                            {/* Right */}
                            <div className="w-full col-span-4">
                                <input
                                    autoComplete={"off"}
                                    spellCheck={false}
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Input username"
                                    className="
                                        rounded
                                        bg-scheme-primary
                                        transition duration-200
                                        w-full border-0 ring-0 text-white
                                        focus:border-transparent focus:border-0 focus:ring-transparent
                                    "
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
                                    autoComplete={"off"}
                                    spellCheck={false}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    type={`${showPass ? "text":"password"}`}
                                    placeholder={`${showPass ? "Password":"*****"}`}
                                    className="
                                        rounded
                                        bg-scheme-primary
                                        transition duration-200
                                        w-full border-0 ring-0 text-white
                                        focus:border-transparent focus:border-0 focus:ring-transparent
                                    "
                                />
                                <div className="relative block">
                                    <button
                                        onClick={()=> handleShowPass(!showPass)}
                                        className={`
                                        ${showPass ? 'bg-scheme-blue hover:bg-scheme-blue-light' :'bg-scheme-primary hover:bg-scheme-secondary'}
                                        transition duration-200
                                        group
                                        text-white
                                        text-white
                                        h-10 w-12 rounded
                                        transform
                                        flex items-center justify-center
                                    `}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor"
                                             className={`
                                             ${showPass ? 'group-hover:text-blue-700 ':'group-hover:text-yellow-300 '}
                                             group-hover:scale-110 transform transition duration-200 w-6
                                             `}>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Grid - input Password */}
                        <div className="grid grid-cols-6 mb-4 items-center">
                            {/* Left */}
                            <div className="w-full col-span-1 h-full flex items-center">
                                <p className="text-white text-lg font-medium">{'Retype Password'}</p>
                            </div>

                            {/* Right */}
                            <div className="w-full col-span-4 flex items-center gap-4">
                                <input
                                    autoComplete={"off"}
                                    spellCheck={false}
                                    name="retype"
                                    onChange={handleChange}
                                    type={`${showPass ? "text":"password"}`}
                                    placeholder={`${showPass ? "Password":"*****"}`}
                                    className="
                                        rounded
                                        bg-scheme-primary
                                        transition duration-200
                                        w-full border-0 ring-0 text-white
                                        focus:border-transparent focus:border-0 focus:ring-transparent
                                    "
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
                                    name="position" value={formData.position} onChange={handleChange}>
                                    {
                                        Position.length > 0 ? Position.map((item,index)=> (
                                                <option value={item.value}>{item.label}</option>
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
                                <p className="text-white text-lg font-medium">Status</p>
                            </div>

                            {/* Right */}
                            <div className="w-full col-span-4">
                                <input
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="username"
                                    className="
                                        w-full
                                        text-white
                                        border-0 ring-0
                                        focus:border-transparent focus:border-0 focus:ring-transparent
                                        bg-scheme-primary
                                    "
                                    autoComplete="off"
                                    spellCheck="false"
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
                                <button className="
                                bg-scheme-blue text-white px-12 rounded py-2
                                hover:bg-scheme-blue-light
                                transition duration-200
                                ">{'Submit'}</button>
                            </div>
                        </div>


                    </form>


                </div>

            </div>

        </div>
    )
}

LayoutEditUser.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(React.memo(LayoutEditUser))
