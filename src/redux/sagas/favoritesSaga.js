import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* favoritesSaga() {
    yield takeEvery('GET_FAVORITES', fetchFavoritesSaga);
}


function* fetchFavoritesSaga() {
    try {
        const response = yield axios.get('/api/favorites');
        yield put({ type: 'SET_FAVORITES', payload: response.data });
        console.log('in fetchBeerLogSaga', response.data)
    }
    catch (error) {
        console.log('Error in fetchBeerLogSaga', error);
    }
}




export default favoritesSaga;