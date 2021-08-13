import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";
import {Link} from "react-router-dom";

const LayoutVerification = ()=> {
    return(
        <div className="w-full ">
            <HeadingDashboard title={'Verify your identity (KYC)'} desc="We need to your account for you to be able to make withdrawals"/>

            <section className="w-full grid grid-cols-3 gap-4 pb-16 mb-12 border-b border-gray-600">
                <div className="w-full col-span-1 rounded-lg bg-dashboard-cards flex items-center p-6">
                    <div className="w-full h-full bg-dashboard-cards ">
                        <div className="flex items-center justify-center mb-2">
                            <div className="h-16 w-16 rounded bg-white">

                            </div>
                        </div>
                        <div className="w-full block relative mb-2">
                            <h2 className="text-gray-100 text-center text-xl font-medium">Scan or Take a Photo</h2>
                        </div>
                        <div className="w-full block relative">
                            <p className="text-gray-400 text-center">Please use pdf, png, jpg, or gif formats when uploading</p>
                        </div>
                    </div>
                </div>


                <div className="w-full col-span-1 rounded-lg bg-dashboard-cards flex items-center p-6">
                    <div className="w-full h-full bg-dashboard-cards ">
                        <div className="flex items-center justify-center mb-2">
                            <div className="h-16 w-16 rounded bg-white">

                            </div>
                        </div>
                        <div className="w-full block relative mb-2">
                            <h2 className="text-gray-100 text-center text-xl font-medium">Confidential Documents</h2>
                        </div>
                        <div className="w-full block relative">
                            <p className="text-gray-400 text-center">we are conscious of your privacy and take data protection seriously. All of your documents will be kept confidential</p>
                        </div>
                    </div>
                </div>


                <div className="w-full col-span-1 rounded-lg bg-dashboard-cards flex items-center p-6">
                    <div className="w-full h-full bg-dashboard-cards ">
                        <div className="flex items-center justify-center mb-2">
                            <div className="h-16 w-16 rounded bg-white">

                            </div>
                        </div>
                        <div className="w-full block relative mb-2">
                            <h2 className="text-gray-100 text-center text-xl font-medium">Payment Verification</h2>
                        </div>
                        <div className="w-full block relative">
                            <p className="text-gray-400 text-center">Verification per payment method</p>
                        </div>
                    </div>
                </div>



            </section>
            <section className="w-full pb-16 mb-8 border-b border-gray-600">
                <div className="w-full block relative mb-8 ">
                    <h2 className="text-gray-100 text-2xl mb-2 font-medium">Necessary documents</h2>
                    <p className="text-gray-400 font-medium">Please upload your documents below or send them to <Link to={'/'} >dodocuments@twin.com</Link></p>
                </div>

                <div className="w-full grid grid-cols-4 gap-4 relative">
                    <div className="col-span-1 p-4 bg-dashboard-cards rounded-lg h-32 flex items-center">
                        <div className="w-full block relative">
                            <h2 className="text-gray-100 text-xl text-center font-medium my-1">Proof of Address</h2>
                            <p className="text-gray-400 font-medium text-center">Click to upload or drag file here</p>
                        </div>

                    </div>
                    <div className="col-span-1 p-4 bg-dashboard-cards rounded-lg h-32 flex items-center">
                        <div className="w-full block relative">
                            <h2 className="text-gray-100 text-xl text-center font-medium my-1">Photo ID</h2>
                            <p className="text-gray-400 font-medium text-center">Click to upload or drag file here</p>
                        </div>

                    </div>
                    <div className="col-span-1 p-4 bg-dashboard-cards rounded-lg h-32 flex items-center">
                        <div className="w-full block relative">
                            <h2 className="text-gray-100 text-xl text-center font-medium my-1">Photo ID</h2>
                            <p className="text-gray-400 font-medium text-center">Click to upload or drag file here</p>
                        </div>

                    </div>

                </div>

            </section>
            <section className="w-full pb-16">
                <div className="w-full block relative mb-8 ">
                    <h2 className="text-gray-100 text-2xl mb-2 font-medium">Uploaded Documents</h2>
                    <p className="text-gray-400 font-medium">Here's list of documents you've uploaded</p>
                </div>

                <div className="w-full h-20 bg-dashboard-cards rounded-lg flex items-center justify-center">
                    <p className="text-gray-400  text-sm">
                        No document uploaded yet. if you wish to start your verifications process now please send your documents to <Link to={'/'} className="text-indigo-400">documents@twin.com</Link>
                        {' '} or contact us via chat
                    </p>
                </div>

            </section>


        </div>
    )
}

LayoutVerification.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(LayoutVerification))
