import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* breweriesSaga() {
    yield takeEvery('FETCH_BREWERIES', fetchBreweriesSaga);
}


function* fetchBreweriesSaga() {
    try {
        const response = yield axios.get('/api/breweries');
        yield put({ type: 'SET_BREWERIES', payload: response.data });
        console.log('in fetchBreweriesSaga', response.data)
    }
    catch (error) {
        console.log('Error in fetchBreweriesSaga', error);
    }
}




export default breweriesSaga;