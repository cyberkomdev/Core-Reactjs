import React, {Fragment, Suspense} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Switch, Route} from 'react-router-dom'
import LayoutHome from "../../pages/home/LayoutHome";
import {withRouter} from "react-router";
import TheMain from "../TheMain";
import LiveDealer from "../../pages/dealer/LiveDealer";
import LayoutPromotions from "../../pages/promotions/LayoutPromotions";
import {CasinoGames} from "../../pages/games/index";
import {SlotsPrimary} from '../../pages/slots/index'
import {PageMobiles} from "../../pages/mobile";
import {LayoutVIPClub} from "../../pages/vip";

const TheContent = ({Auth}) => {
    return (
        <TheMain>
            <Fragment>
                <Suspense fallback={<div>...</div>}>
                    <Switch>
                        <Route path={'/'} exact  component={LayoutHome}/>
                        <Route path={"/live-dealer"} exact component={LiveDealer}/>
                        <Route path={"/mobile"} exact component={PageMobiles}/>
                        <Route path={'/promotions'} exact component={LayoutPromotions}/>
                        <Route path={'/casino-games'} exact component={CasinoGames}/>
                        <Route path={'/vip-club'} exact component={LayoutVIPClub}/>
                        <Route path={'/slots'} exact component={SlotsPrimary}/>
                    </Switch>
                </Suspense>
            </Fragment>
        </TheMain>
    )
}
TheContent.propTypes = {}

const mapStateToProps = state => ({
    Auth: state.Auth
})
export default connect(mapStateToProps, {})(withRouter(TheContent))
