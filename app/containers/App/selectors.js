/**
 * The global state selectors
 */

import { createSelector } from 'reselect'

const selectGlobal = state => state.get('global')

const selectRouter = state => state.get('router')

const selectHeader = state => state.get('header')

const selectSchoolCount = state => state.get('schoolCount')

const selectSchoolSearchForm = state => state.get('schoolSearchForm')

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentUser'))

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'))

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'))

const makeSelectRepos = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['userData', 'repositories']),
  )

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  )

const makeSelectCity = () =>
  createSelector(selectHeader, headerState => headerState.get('city'))

const makeSelectSchoolSearchForm = () =>
  createSelector(selectSchoolSearchForm, formState => formState)

const makeSlectSchoolCount = () =>
  createSelector(selectSchoolCount, schoolCount => schoolCount)

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectCity,
  makeSelectSchoolSearchForm,
  makeSlectSchoolCount,
}
