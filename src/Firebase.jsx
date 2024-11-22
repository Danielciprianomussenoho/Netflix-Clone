import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBllTcKugrI7NPhoFFrNj2QAWblkfAINgg",
  authDomain: "netflix-clone-7705c.firebaseapp.com",
  projectId: "netflix-clone-7705c",
  storageBucket: "netflix-clone-7705c.appspot.com",
  messagingSenderId: "742796677395",
  appId: "1:742796677395:web:bbe1c553d0c53d866bcae6"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })

    } catch (error) {
        console.log(error)
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

const login = async(email, password) =>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error)
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};