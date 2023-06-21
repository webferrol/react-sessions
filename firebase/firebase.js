// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBer3u9UeKq6rr3ThZ-YA84JAyK0dWIXW8',
  authDomain: 'webferrol-app.firebaseapp.com',
  projectId: 'webferrol-app',
  storageBucket: 'webferrol-app.appspot.com',
  messagingSenderId: '333482588665',
  appId: '1:333482588665:web:92ed7fba0d6376a9b1a528',
  measurementId: 'G-0DVHLVC3CQ'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Authentication and get a reference to the service
const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export {
  app,
  auth,
  db
}
