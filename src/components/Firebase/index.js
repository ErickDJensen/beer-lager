import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: `${process.env.GOOGLE_API_KEY}`,
    authDomain: "weekend-spike-project.firebaseapp.com",
    databaseURL: "https://weekend-spike-project.firebaseio.com",
    projectId: "weekend-spike-project",
    storageBucket: "weekend-spike-project.appspot.com",
    messagingSenderId: "476074905028",
    appId: "1:476074905028:web:d634018bb7879cc4ff2891",
    measurementId: "G-H2J1QJJ43D"
  };
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }