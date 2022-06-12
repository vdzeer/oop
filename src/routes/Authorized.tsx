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
          path={RoutesTree.cabinet.path}
          component={RoutesTree.cabinet.component}
        />

        <Route
          exact
          path={RoutesTree.settings.path}
          component={RoutesTree.settings.component}
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
          path={RoutesTree.about.path}
          component={RoutesTree.about.component}
        />

        <Route
          exact
          path={RoutesTree.finances.path}
          component={RoutesTree.finances.component}
        />

        <Route
          exact
          path={RoutesTree.createEditOrder.path}
          component={RoutesTree.createEditOrder.component}
        />

        <Redirect to={RoutesTree.home.path} />
      </Switch>
    </MinHeightWrapper>
  )
}

export default Navigation
