import React, {useState} from 'react'
import {connect} from 'react-redux'
import imgCard from "../../../assets/img/imgcard.jpg";
import imgCard2 from "../../../assets/img/games.jpg"
import imgCard3 from "../../../assets/img/games2.jpg"

import CardSection from "./component/CardSection";
import TheSidebar from "../../main/sidebar/TheSidebar";

const LayoutHome = ()=> {
    return(
        <div className="w-full grid grid-cols-12 gap-4">
            {/* Sidebar */}
            <TheSidebar/>
            <div className="w-full col-span-9">
                <div className="min-h-full w-full">
                    <CardSection
                        title={"FEATURED GAMED"}
                        icons={""}
                        data={[
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },

                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard2
                            },
                            {
                                label: "Game Name",
                                images:imgCard3
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard2
                            },
                            {
                                label: "Game Name",
                                images:imgCard3
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard2
                            },
                            {
                                label: "Game Name",
                                images:imgCard3
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard2
                            },
                            {
                                label: "Game Name",
                                images:imgCard3
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard2
                            },
                            {
                                label: "Game Name",
                                images:imgCard3
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard2
                            },
                            {
                                label: "Game Name",
                                images:imgCard3
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard2
                            },
                            {
                                label: "Game Name",
                                images:imgCard3
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard2
                            },
                            {
                                label: "Game Name",
                                images:imgCard3
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },

                        ]}
                    />
                    <CardSection
                        title={"SLOT GAMES"}
                        icons={""}
                        data={[
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },

                            {
                                label: "Game Name",
                                images:imgCard2
                            },
                            {
                                label: "Game Name",
                                images:imgCard3
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },

                        ]}
                    />
                    <CardSection
                        title={"CASINO GAMES"}
                        icons={""}
                        data={[
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },

                            {
                                label: "Game Name",
                                images:imgCard2
                            },
                            {
                                label: "Game Name",
                                images:imgCard3
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },

                        ]}
                    />

                    <CardSection
                        title={"JACKPOTS GAMES"}
                        icons={""}
                        data={[
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },

                            {
                                label: "Game Name",
                                images:imgCard2
                            },
                            {
                                label: "Game Name",
                                images:imgCard3
                            },
                            {
                                label: "Game Name",
                                images:imgCard
                            },

                        ]}
                    /></div>
            </div>
        </div>

    )
}
LayoutHome.propTypes = {

}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {})(LayoutHome)
