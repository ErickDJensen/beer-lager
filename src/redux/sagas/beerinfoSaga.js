import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* beerInfoSaga() {
    yield takeEvery('FETCH_BEERINFO', fetchBeerInfoSaga);
}


function* fetchBeerInfoSaga() {
    try {
        const response = yield axios.get('/api/beerinfo');
        yield put({ type: 'SET_BEERINFO', payload: response.data });
        console.log('in fetchBeerInfoSaga', response.data)
    }
    catch (error) {
        console.log('Error in fetchBeerInfoSaga', error);
    }
}




export default beerInfoSaga;