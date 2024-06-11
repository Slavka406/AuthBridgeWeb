import { GoogleAuthProvider, getAuth } from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDy5g1xAlkM4pgSBTIkMXtbWV9xKpfmPuU",
  authDomain: "webview-b5158.firebaseapp.com",
  projectId: "webview-b5158",
  storageBucket: "webview-b5158.appspot.com",
  messagingSenderId: "306919167987",
  appId: "1:306919167987:web:ccf502c2d39d49e727a486",
}

// Initialize Firebase
const app = initializeApp(config)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

const firebaseConfig = {
  apiKey: "AIzaSyDy5g1xAlkM4pgSBTIkMXtbWV9xKpfmPuU",
  authDomain: "webview-b5158.firebaseapp.com",
  projectId: "webview-b5158",
  storageBucket: "webview-b5158.appspot.com",
  messagingSenderId: "306919167987",
  appId: "1:306919167987:web:ccf502c2d39d49e727a486",
}

export default firebaseConfig
