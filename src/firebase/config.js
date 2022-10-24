import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBDWG7srEJsGnP3rDt--B82MH3abgCOreY',
  authDomain: 'find-waldo-677d2.firebaseapp.com',
  projectId: 'find-waldo-677d2',
  storageBucket: 'find-waldo-677d2.appspot.com',
  messagingSenderId: '931946837480',
  appId: '1:931946837480:web:567226a942710579e7605d',
  measurementId: 'G-F6R40JJCYK',
};

firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, firestore };
