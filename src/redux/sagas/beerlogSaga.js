import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* BeerLogSaga() {
    yield takeEvery('FETCH_BEERLOG', fetchBeerLogSaga);
}


function* fetchBeerLogSaga() {
    try {
        const response = yield axios.get('/api/beerlog');
        yield put({ type: 'SET_BEERLOG', payload: response.data });
        console.log('in fetchBeerLogSaga', response.data)
    }
    catch (error) {
        console.log('Error in fetchBeerLogSaga', error);
    }
}




export default BeerLogSaga;