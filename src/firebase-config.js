import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC0xALOk4htfVkMB9iQ0TzCheX3senjlOA",
  authDomain: "beautify-dee6d.firebaseapp.com",
  projectId: "beautify-dee6d",
  storageBucket: "beautify-dee6d.appspot.com",
  messagingSenderId: "965047406880",
  appId: "1:965047406880:web:5b14456a88130133df4745",
  measurementId: "G-R6QNZD39DR"
};

  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app);