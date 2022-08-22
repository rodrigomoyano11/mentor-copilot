import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC0uQbn2Z_nxyd-HCoh9oT8t2oNFJhROA4',
  authDomain: 'mentor-copilot.firebaseapp.com',
  projectId: 'mentor-copilot',
  storageBucket: 'mentor-copilot.appspot.com',
  messagingSenderId: '515283048940',
  appId: '1:515283048940:web:7c83412177663d9936c8c9',
  measurementId: 'G-8LSQDBM7HJ',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
