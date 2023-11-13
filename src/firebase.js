import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAP7RmdkJxusvR4sU8prEfMIRfUH1UQBw",
  authDomain: "fb-clone-by-mladen.firebaseapp.com",
  projectId: "fb-clone-by-mladen",
  storageBucket: "fb-clone-by-mladen.appspot.com",
  messagingSenderId: "1096434679488",
  appId: "1:1096434679488:web:ece06e17a590d4d702f725",
  measurementId: "G-BH7517291R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export default db;