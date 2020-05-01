import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* postBeerSaga() {
    yield takeEvery('POST_BEERINFO', postBeerLogSaga);
}


function* postBeerLogSaga(action) {
    try {
        yield axios.post('/api/postbeer', action.payload);
        yield put({ type: 'FETCH_BEERLOG'});
        
    }
    catch (error) {
        console.log('Error in postBeerLogSaga', error);
    }
}




export default postBeerSaga;