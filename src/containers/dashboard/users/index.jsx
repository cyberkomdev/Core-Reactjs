import React, {Fragment, Suspense} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TheUsers from "./TheUsers";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "../../../inc/router/PrivateRoute";
import {
    ChangePassword,
    GameTransaction,
    LayoutBalance,
    LayoutBonuse, LayoutHistory,
    LayoutHome,
    LayoutLimit,
    LayoutRewards, LayoutSettings
} from "./TheIndex";
import LayoutVerification from "./verification/LayoutVerification";

const MainUsers = ()=> {
    return(
        <TheUsers>
            <Fragment>
                <Suspense fallback={<div>...</div>}>
                    <Switch>
                        <PrivateRoute path={'/user'} exact  component={LayoutHome}/>
                        <PrivateRoute path={'/user/settings'} exact  component={LayoutSettings}/>
                        <PrivateRoute path={'/user/login-history'} exact  component={LayoutHistory}/>
                        <PrivateRoute path={'/user/change-password'} exact  component={ChangePassword}/>
                        <PrivateRoute path={'/user/balance'} exact  component={LayoutBalance}/>
                        <PrivateRoute path={'/user/bonuse'} exact  component={LayoutBonuse}/>
                        <PrivateRoute path={'/user/limits'} exact  component={LayoutLimit}/>
                        <PrivateRoute path={'/user/rewards'} exact  component={LayoutRewards}/>
                        <PrivateRoute path={'/user/game-transactions'} exact  component={GameTransaction}/>
                        <PrivateRoute path={'/user/verification'} exact  component={LayoutVerification}/>
                    </Switch>
                </Suspense>
            </Fragment>
        </TheUsers>
    )
}
MainUsers.propTypes ={

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(MainUsers)
