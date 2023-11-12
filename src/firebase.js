import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUULVUniwhXmOocVx0VYze3ED0D-lIX2Y",
  authDomain: "facebook-clone-by-mladen.firebaseapp.com",
  projectId: "facebook-clone-by-mladen",
  storageBucket: "facebook-clone-by-mladen.appspot.com",
  messagingSenderId: "909377873418",
  appId: "1:909377873418:web:2cc3c7c5aa54fd2cf6e1f3",
  measurementId: "G-PLN8CKQB3H",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export default db;