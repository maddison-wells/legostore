import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfF08Mgk8j4JyK2avd7tUQHdyngwLbD-k",
  authDomain: "lego-store-e598d.firebaseapp.com",
  databaseURL:
    "https://lego-store-e598d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lego-store-e598d",
  storageBucket: "lego-store-e598d.appspot.com",
  messagingSenderId: "127840921893",
  appId: "1:127840921893:web:1efe34e9215bcbd26b52cc",
  measurementId: "G-TB25QMVM86",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
