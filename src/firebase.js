import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {  
	apiKey: "AIzaSyBXQjXR0vCDVs_vsBii9WHf7Da-UeBMsXo",  
	authDomain: "yuvati-ca4b0.firebaseapp.com",  
	projectId: "yuvati-ca4b0",  
	storageBucket: "yuvati-ca4b0.appspot.com",  
	messagingSenderId: "762101177289",  
	appId: "1:762101177289:web:d031dbeaa274c76d496618",  
	measurementId: "G-THT3K1CHEL"   
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//Firebase Authentication
const auth = getAuth(app);

export { auth };
