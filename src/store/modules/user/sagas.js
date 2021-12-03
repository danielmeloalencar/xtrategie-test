import { call, put, all, takeLatest } from 'redux-saga/effects'
import { loginSuccess } from './actions'
import api from '../../../services/api'
function* login({ values }) {
  console.log(
    'Enviando dados para fakeApi (setTimeOut 3 segundos). Veja services/api.js'
  )
  const response = yield call(api.post, values)
  yield put(loginSuccess(response))
}

export default all([takeLatest('LOGIN_REQUEST', login)])
