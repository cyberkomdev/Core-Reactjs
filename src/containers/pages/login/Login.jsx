import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {SignIn} from "../../../inc/redux/action/auth";
import {Redirect} from "react-router";
import IconImage from '../../../assets/img/casino_icons.png'


const Login = ({isAuthenticated, loading,  SignIn})=> {

    const [formData, setFormData] = useState({
        username:null,
        password:null
    })

    const handleChange = (e)=> {setFormData({...formData, [e.target.name]: e.target.value})}

    const handleSubmit = (e)=> {
        e.preventDefault()
        SignIn()

    }
    if(isAuthenticated){
        return <Redirect to={'/'}/>
    }
    return(
        <div className="relative min-h-screen flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 relative items-center">
            <div className="absolute bg-black opacity-60 inset-0 z-0"/>
            <div className="max-w-md w-full space-y-8 p-10 bg-scheme-primary_light border-2 border-scheme-gold z-10 relative" style={{borderRadius:"10px 100px 10px 100px"}}>
                <img src={IconImage} alt="casino icons" className="absolute z-10 -top-14 -left-14 w-40"/>

                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-scheme-gold">
                        Welcome Back!
                    </h2>
                    <p className="mt-2 text-sm text-white">Please sign in to your account</p>
                </div>

                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true"/>
                    <div className="relative">
                        <label className="text-lg font-bold text-white tracking-wide">Email</label>
                        <input
                            onChange={handleChange}
                            autoComplete="off"
                            spellCheck="false"
                            className="
                            rounded-lg
                             border-0 border-b border-gray-300 form-input focus:ring-transparent
                            w-full text-base py-4  focus:outline-none focus:ring focus:border-scheme-blue "
                             placeholder="username"
                            type="text"
                            name="username"
                        />
                    </div>
                    <div className="mt-8 content-center">
                        <label className="text-lg font-bold text-white tracking-wide">
                            Password
                        </label>
                        <input
                            className="
                            rounded-lg
                            border-0 border-b border-gray-300 form-input outline-none focus:ring-transparent
                            w-full content-center text-base py-4 focus:outline-none focus:border-scheme-blue"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter your password"
                            style={{outline:"0 !important", border:'0 !important'}}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox"
                                   className="h-4 w-4 bg-scheme-gold focus:ring-scheme-gold border-gray-300 rounded"/>
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-200">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-scheme-gold hover:text-scheme-gold">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center bg-scheme-gold text-white p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-scheme-gold shadow-lg cursor-pointer transition ease-in duration-300">
                            Sign in
                        </button>
                    </div>
                    <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-200">
                        <span>Don't have an account?</span>
                        <a href="#"
                           className="text-scheme-gold hover:text-scheme-goldno-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                            up</a>
                    </p>
                </form>
            </div>
        </div>
    )
}


Login.propTypes = {
    SignIn: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    loading: state.Auth.loading,
    user:state.Auth.user,
})
export default connect(mapStateToProps, {SignIn})(React.memo(Login))
