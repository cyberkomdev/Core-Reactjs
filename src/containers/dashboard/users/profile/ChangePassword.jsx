import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";

const ChangePassword = ()=> {

    const [formdata,setFormdata] = useState({
        cas_old:null,
        cas_password:null,
        cas_retype_password:null
    })

    const handleChange = (e)=> {setFormdata({...formdata, [e.target.name]: e.target.value})}

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <div className="w-full ">
            <HeadingDashboard title={'Change Password'} desc={'Password must be at least 8 characters, at least one digit, one uppercase letter and one lowercase letter'}/>

            <section className="w-full block relative mb-8">
                <div className="w-full grid grid-cols-12 gap-4">
                    <form onSubmit={handleSubmit} className="col-span-6 w-full">
                        <input
                            placeholder="Old Password"
                            autoComplete="off"
                            type="password" name="cas_old" onChange={handleChange} className={`
                                w-full h-16 rounded-lg bg-dashboard-cards mb-4 px-4
                                border-0 ring-0 text-white
                                hover:ring-cyan-default hover:ring-2
                                focus:border-0 focus:ring-cyan-default
                        `}/>
                        <input
                            placeholder="New password"
                            autoComplete="off"
                            type="password" name="cas_password" onChange={handleChange} className={`
                        w-full h-16 rounded-lg bg-dashboard-cards mb-4 px-4
                        border-0 ring-0
                        focus:border-0 focus:ring-cyan-default
                        `}/>
                        <input
                            placeholder="Confirm new password"
                            autoComplete="off"
                            type="password" name="cas_retype_password" onChange={handleChange} className={`
                        w-full h-16 rounded-lg bg-dashboard-cards mb-4 px-4
                        border-0 ring-0
                        focus:border-0 focus:ring-cyan-default
                        `}/>

                        <button className="bg-cyan-default w-full py-4 rounded-lg text-gray-800 font-bold text-lg">
                            Update Password
                        </button>

                    </form>
                </div>
            </section>
        </div>
    )
}

ChangePassword.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(ChangePassword))
