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
          path={RoutesTree.about.path}
          component={RoutesTree.about.component}
        />
        <Route
          exact
          path={RoutesTree.modules.path}
          component={RoutesTree.modules.component}
        />

        <Redirect to={RoutesTree.home.path} />
      </Switch>
    </MinHeightWrapper>
  )
}

export default Navigation
