import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* postBeerSaga() {
    yield takeEvery('POST_BEERINFO', postBeerLogSaga);
}


function* postBeerLogSaga() {
    try {
        const response = yield axios.post('/api/postbeer');
        yield put({ type: 'POST_BEERLOG', payload: response.data });
        console.log('in postBeerLogSaga', response.data)
    }
    catch (error) {
        console.log('Error in postBeerLogSaga', error);
    }
}




export default postBeerSaga;