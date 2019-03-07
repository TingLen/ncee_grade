/**
 * The global state selectors
 */

import { createSelector } from 'reselect'

const selectGlobal = state => state.get('global')

const selectRouter = state => state.get('router')

const selectHeader = state => state.get('header')

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

// const makeSelectSchoolSearchSubject = () =>
//   createSelector(selectSchoolSearchForm, formState => formState.get('subject'))

// const makeSelectSchoolSearchWay = () =>
// createSelector(selectSchoolSearchForm, formState => formState.get('way'))

// const makeSelectSchoolSearchScore = () =>
//   createSelector(selectSchoolSearchForm, formState => formState.get('score'))

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectCity,
  makeSelectSchoolSearchForm,
  // makeSelectSchoolSearchSubject,
  // makeSelectSchoolSearchWay,
  // makeSelectSchoolSearchScore,
}
