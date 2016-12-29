import userSagas from './containers/Identity/sagas';

export default function configureSaga(store) {
  userSagas.map(store.runSaga);
}
