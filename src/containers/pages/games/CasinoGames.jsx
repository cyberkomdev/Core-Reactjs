import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Containers from "../../main/Containers";
import TheSidebar from "../../main/sidebar/TheSidebar";


import Rocket from '../../../assets/icons/pages/rocket.png'
import Jackpot from '../../../assets/icons/pages/number.png'
import FeaturesGames from "./tab/FeaturesGames";
import JackpotGames from "./tab/JackpotGames";
import TableGames from "./tab/TableGames";
import ScratchGames from "./tab/ScratchGames";

const CasinoGames = () => {

    const [tab, setTab] = useState(0)
    const [tabs, setTabs] = useState({
        active: 0,

        data: [
            {
                icons: Rocket,
                label: "FEATURED GAME"
            },
            {
                icons: Jackpot,
                label: "JACKPOT GAMES"
            },
            {
                icons: Rocket,
                label: "TABLE GAMES"
            },
            {
                icons: Rocket,
                label: "SCRATCH CARD"
            }
        ]
    })

    const handleTabs = (index) => {
        if (index !== tab) {
            setTab(index)
            setTabs({
                ...tabs,
                active: tab
            })
        }
    }



    return (
        <Containers>
            <div className="w-full grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <TheSidebar/>


                <div className="w-full col-span-9">

                    <div className="w-full relative">

                        {/* Tab */}
                        <div className="
                        h-24 border-b-2 border-scheme-gold w-full bg-gray-700 mb-8
                        grid grid-cols-4 gap-2
                        ">
                            {
                                tabs.data.map((item,index)=> (
                                    <button className={`col-span-1 ${index !== tab ?"": "border-b-2 border-scheme-gold"}`} key={index} onClick={()=> handleTabs(index)}>
                                        <div className="w-full h-auto flex items-center justify-center mb-1">
                                            <img src={item.icons} alt="" className={`transition duration-400 h-10 filter transform ${index !== tab && 'grayscale' }`}/>
                                        </div>
                                        <h1 className={`text-scheme-gold ${ index !== tab ? 'font-thin' :"font-bold"}`}>{item.label}</h1>
                                    </button>
                                ))
                            }
                        </div>


                        <div className="w-full grid grid-cols-4 gap-4">
                            { tab === 0 && (<FeaturesGames/>)}
                            { tab === 1 && (<JackpotGames/>)}
                            { tab === 2 && (<TableGames/>)}
                            { tab === 3 && (<ScratchGames/>)}

                        </div>


                    </div>
                </div>

            </div>
        </Containers>
    )
}


CasinoGames.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(CasinoGames)
