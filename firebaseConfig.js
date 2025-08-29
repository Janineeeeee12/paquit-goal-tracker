
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVFPIGvKOQajIPxhSOuc1_l_KGNzmJ0Jg",
  authDomain: "goalproject-jsp.firebaseapp.com",
  projectId: "goalproject-jsp",
  storageBucket: "goalproject-jsp.firebasestorage.app",
  messagingSenderId: "295140943702",
  appId: "1:295140943702:web:b14343a87cde68d44658f7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)