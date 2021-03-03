import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAHr1tdITp4w4GAa6auYMLq3Hfps5NuNME',
  authDomain: 'sandy-crab.firebaseapp.com',
  databaseURL: 'https://sandy-crab-default-rtdb.firebaseio.com',
  projectId: 'sandy-crab',
  storageBucket: 'sandy-crab.appspot.com',
  messagingSenderId: '420793433498',
  appId: '1:420793433498:web:8c963f591f0727edbb4e23',
  measurementId: 'G-Q6KGB0R8C5'
};

firebase.initializeApp(config);

export default firebase;
