// @flow

import React from 'react'
import { applyRouterMiddleware, Router, Route, browserHistory, IndexRoute } from 'react-router'
import useRelay from 'react-router-relay'
import Relay from 'react-relay'
import App from './App'
import SampleQuery from './queries/SampleQuery'
import Index from './components/Index'

Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer("https://www.graphqlhub.com/graphql")
)

const getRoutes: any = () => {
    return (
        <Router
            history={browserHistory}
            render={applyRouterMiddleware(useRelay)}
            environment={Relay.Store}
        >
            <Route
                path="/"
                component={App}
            >
                <IndexRoute component={Index} queries={SampleQuery}/>
            </Route>
        </Router>
    )
}

export default getRoutes