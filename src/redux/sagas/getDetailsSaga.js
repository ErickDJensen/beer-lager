import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getDetailsSaga(action) {
    // console.log('In getDetailsSaga', action.payload)
    yield takeEvery('GET_DETAILS', getEntryDetailsSaga);
}


function* getEntryDetailsSaga(action) {
    console.log('in detail saga', action.payload);
    try {
        const response = yield axios.get(`/api/entrydetails?q=${action.payload}`);
        yield put({ type: 'SET_ENTRYDETAILS', payload: response.data });
        console.log('in getEntryDetailsSaga', response.data)
    }
    catch (error) {
        console.log('Error in getEntryDetailsSaga', error);
    }
}




export default getDetailsSaga;