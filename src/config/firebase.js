import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyARbt423q886JWW0mFtf8npqhW-XkztnN0",
    authDomain: "chat-application-react-2c746.firebaseapp.com",
    projectId: "chat-application-react-2c746",
    storageBucket: "chat-application-react-2c746.appspot.com",
    messagingSenderId: "128551585008",
    appId: "1:128551585008:web:645ea8cc54607675f0ee35"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to handle user signup
const signup = async (username, email, password) => {
    try {
        // Create a new user with email and password using Firebase Authentication
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        // Add user data to the "users" collection in Firestore
        await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "",
            lastSeen: Date.now(),
        });

        // Add an empty chatData array to the "chats" collection for the new user
        await setDoc(doc(db, "chats", user.uid), {
            chatsData: [], // Empty array to store chat data
        });
    } catch (error) {
        console.error(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
};

// Function to handle user login
const login = async (email, password) => {
    try {
        // Attempt to sign in the user with the provided email and password using Firebase Authentication
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
};

const logout = async () => {
    // Sign out the user using Firebase Authentication
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
};

export { signup, login, logout, auth, db };