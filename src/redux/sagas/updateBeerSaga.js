import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* updateBeerSaga() {
    yield takeEvery('PUT_BEERINFO', updateBeerLogSaga);
}


function* updateBeerLogSaga(action) {
    try {
        yield axios.put('/api/putbeer', action.payload);
        yield put({ type: 'FETCH_BEERLOG'});
        
    }
    catch (error) {
        console.log('Error in updateBeerLogSaga', error);
    }
}




export default updateBeerSaga;