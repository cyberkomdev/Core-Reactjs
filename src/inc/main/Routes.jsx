import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import Login from "../../containers/pages/login/Login";
import TheContent from "../../containers/main/content/TheContent";
import PrivateRoute from "../router/PrivateRoute";
import LayoutRegister from "../../containers/pages/auth/register/LayoutRegister";


const Routes = ()=> {
    return(
        <div className="w-full bg-white min-h-screen">
            <Switch>
                <Route path={'/login'} name="Login" component={Login}/>
                <Route path={'/register'} name="Register" component={LayoutRegister}/>
                <Route path={'/'} name="Dashboard" render={(props)=> <TheContent {...props}/>}/>
            </Switch>
        </div>
    )
}
Routes.propTypes = {

}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {})(React.memo(Routes))
