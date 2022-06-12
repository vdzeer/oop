import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { MinHeightWrapper } from './styled'
import { RoutesTree } from './routes'

const Navigation: FC = () => {
  return (
    <MinHeightWrapper>
      <Switch>
        <Route
          exact
          path={RoutesTree.home.path}
          component={RoutesTree.home.component}
        />

        <Route
          exact
          path={RoutesTree.login.path}
          component={RoutesTree.login.component}
        />

        <Route
          exact
          path={RoutesTree.registration.path}
          component={RoutesTree.registration.component}
        />

        <Route
          exact
          path={RoutesTree.about.path}
          component={RoutesTree.about.component}
        />
        <Route
          exact
          path={RoutesTree.modules.path}
          component={RoutesTree.modules.component}
        />
        <Route
          exact
          path={RoutesTree.user.path}
          component={RoutesTree.user.component}
        />

        <Route
          exact
          path={RoutesTree.order.path}
          component={RoutesTree.order.component}
        />

        <Route
          exact
          path={RoutesTree.forgot.path}
          component={RoutesTree.forgot.component}
        />

        <Redirect to={RoutesTree.home.path} />
      </Switch>
    </MinHeightWrapper>
  )
}

export default Navigation
