import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HeadingDashboard from "../../../../component/heading/HeadingDashboard";

const LayoutBonuse = ()=> {
    return(
        <div className="w-full ">
            <HeadingDashboard title={'Bonuse'} desc={'See you recent game transactions'}/>

            <section className="grid grid-cols-12 gap-4 mb-4 w-full block relative">
                <div className="col-span-3 p-2 bg-dashboard-cards rounded-lg h-20 block">
                    <div className="h-full w-full px-4 items-center flex">
                        <div className="text-gray-400 ">
                            <svg className="fill-current w-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                 y="0px" viewBox="0 0 36.447 36.447" style={{enableBackground:"new 0 0 36.447 36.447"}}
                            >
                                <g>
                                    <path d="M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75
			c0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75
			c-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v24c0,2.343,1.907,4.25,4.25,4.25h24
			c2.344,0,4.25-1.907,4.25-4.25v-24C34.474,5.855,32.567,3.948,30.224,3.948z M25.286,2.75c0-0.689,0.525-1.25,1.17-1.25
			c0.646,0,1.17,0.561,1.17,1.25v4.896c0,0.689-0.524,1.25-1.17,1.25c-0.645,0-1.17-0.561-1.17-1.25V2.75z M17.206,2.75
			c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z M9.125,2.75
			c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z
			 M31.974,32.198c0,0.965-0.785,1.75-1.75,1.75h-24c-0.965,0-1.75-0.785-1.75-1.75v-22h27.5V32.198z"/>
                                    <rect x="6.724" y="14.626" width="4.595" height="4.089"/>
                                    <rect x="12.857" y="14.626" width="4.596" height="4.089"/>
                                    <rect x="18.995" y="14.626" width="4.595" height="4.089"/>
                                    <rect x="25.128" y="14.626" width="4.596" height="4.089"/>
                                    <rect x="6.724" y="20.084" width="4.595" height="4.086"/>
                                    <rect x="12.857" y="20.084" width="4.596" height="4.086"/>
                                    <rect x="18.995" y="20.084" width="4.595" height="4.086"/>
                                    <rect x="25.128" y="20.084" width="4.596" height="4.086"/>
                                    <rect x="6.724" y="25.54" width="4.595" height="4.086"/>
                                    <rect x="12.857" y="25.54" width="4.596" height="4.086"/>
                                    <rect x="18.995" y="25.54" width="4.595" height="4.086"/>
                                    <rect x="25.128" y="25.54" width="4.596" height="4.086"/>
                                </g>
                            </svg>
                        </div>
                        <div className="w-full block relative  px-4">
                            <h3 className="text-gray-500 text-base font-medium leading-4">Start Date</h3>
                            <p className="text-gray-300 font-bold text-lg">2021.02.25</p>
                        </div>
                    </div>

                </div>

                <div className="col-span-3 p-2 bg-dashboard-cards rounded-lg h-20 block">
                    <div className="h-full w-full px-4 items-center flex">
                        <div className="text-gray-400 ">
                            <svg className="fill-current w-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                 y="0px" viewBox="0 0 36.447 36.447" style={{enableBackground:"new 0 0 36.447 36.447"}}
                            >
                                <g>
                                    <path d="M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75
			c0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75
			c-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v24c0,2.343,1.907,4.25,4.25,4.25h24
			c2.344,0,4.25-1.907,4.25-4.25v-24C34.474,5.855,32.567,3.948,30.224,3.948z M25.286,2.75c0-0.689,0.525-1.25,1.17-1.25
			c0.646,0,1.17,0.561,1.17,1.25v4.896c0,0.689-0.524,1.25-1.17,1.25c-0.645,0-1.17-0.561-1.17-1.25V2.75z M17.206,2.75
			c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z M9.125,2.75
			c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z
			 M31.974,32.198c0,0.965-0.785,1.75-1.75,1.75h-24c-0.965,0-1.75-0.785-1.75-1.75v-22h27.5V32.198z"/>
                                    <rect x="6.724" y="14.626" width="4.595" height="4.089"/>
                                    <rect x="12.857" y="14.626" width="4.596" height="4.089"/>
                                    <rect x="18.995" y="14.626" width="4.595" height="4.089"/>
                                    <rect x="25.128" y="14.626" width="4.596" height="4.089"/>
                                    <rect x="6.724" y="20.084" width="4.595" height="4.086"/>
                                    <rect x="12.857" y="20.084" width="4.596" height="4.086"/>
                                    <rect x="18.995" y="20.084" width="4.595" height="4.086"/>
                                    <rect x="25.128" y="20.084" width="4.596" height="4.086"/>
                                    <rect x="6.724" y="25.54" width="4.595" height="4.086"/>
                                    <rect x="12.857" y="25.54" width="4.596" height="4.086"/>
                                    <rect x="18.995" y="25.54" width="4.595" height="4.086"/>
                                    <rect x="25.128" y="25.54" width="4.596" height="4.086"/>
                                </g>
                            </svg>
                        </div>
                        <div className="w-full block relative  px-4">
                            <h3 className="text-gray-500 text-base font-medium leading-4">End Date</h3>
                            <p className="text-gray-300 font-bold text-lg">2021.07.25</p>
                        </div>
                    </div>

                </div>

            </section>

            <section className="w-full block relative">
                <div className="w-full block relative mb-8">
                    <p className="text-gray-200 font-medium text-lg">* You can select date range 2 month max</p>
                </div>

                <div className="w-full h-20 rounded-lg px-2 py-4 flex items-center justify-center bg-dashboard-cards">
                    <p className="text-gray-400">Nothing was found</p>
                </div>


            </section>
        </div>
    )
}

LayoutBonuse.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(LayoutBonuse))
