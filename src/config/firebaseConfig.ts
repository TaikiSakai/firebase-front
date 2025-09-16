import firebase from 'firebase/compat/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

if (location.hostname === import.meta.env.VITE_FIREBASE_AUTH_DOMAIN) {
    connectAuthEmulator(auth, import.meta.env.VITE_FIREBASE_AUTH_HOST);
}

export { auth };