import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBDWG7srEJsGnP3rDt--B82MH3abgCOreY',
  authDomain: 'find-waldo-677d2.firebaseapp.com',
  projectId: 'find-waldo-677d2',
  storageBucket: 'find-waldo-677d2.appspot.com',
  messagingSenderId: '931946837480',
  appId: '1:931946837480:web:567226a942710579e7605d',
  measurementId: 'G-F6R40JJCYK',
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

// const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = getStorage(app, 'gs://find-waldo-677d2.appspot.com/');

export { firebase, firestore, db, storage };
