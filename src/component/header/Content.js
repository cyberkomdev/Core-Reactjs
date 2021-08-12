import React, { Suspense } from 'react'
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom'

import { LoadingChild } from '../Loading'
import routes from '../../Routes'

const Content = (props) => {
    return (
        <Suspense fallback={LoadingChild}>
            <Switch>
                {localStorage.isToken ? routes.map((route, idx) => {

                    return route.component && (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                                <route.component {...props} />
                            )} />
                    )
                }) : <Redirect to={
                    {
                        pathname: '/login',
                        state: {
                            from: window.location
                        }
                    }
                } />}
                <Redirect from="/" to="/dashboard" />
            </Switch>
        </Suspense>
    )
}

export default React.memo(Content)
