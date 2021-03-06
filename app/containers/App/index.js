/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import Header from 'containers/Header'
import Footer from 'containers/Footer'
import HomePage from 'containers/HomePage'
import SchoolPage from 'containers/SchoolPage'
import SchoolListPage from 'containers/SchoolListPage'
import DisciplinePage from 'containers/DisciplinePage'
import ScoreLinePage from 'containers/ScoreLinePage'

import GlobalStyle from '../../global-styles'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0px;
  flex-direction: column;
`

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/school" component={SchoolPage} />
        <Route path="/school/list" component={SchoolListPage} />
        <Route exact path="/discipline" component={DisciplinePage} />
        <Route exact path="/scoreline" component={ScoreLinePage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  )
}
