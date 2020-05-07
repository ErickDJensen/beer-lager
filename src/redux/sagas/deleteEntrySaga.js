import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* deleteEntrySaga() {
    yield takeEvery('DELETE_ENTRY', deleteBeerEntrySaga);
  }

function* deleteBeerEntrySaga(action) {
  try {
    yield axios.delete('/api/delete', {data: action.payload});

 
    // hopefully the type below will go get the shelf items from the database again.
    yield put({ type: 'FETCH_BEERLOG'});
  } catch (error) {
    console.log('delete beer to server failed', error);
  }
}



export default deleteEntrySaga;