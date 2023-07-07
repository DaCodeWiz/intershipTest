/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA31bHzaRl_YpN1QHjT4W2O8C8r5nKi88c',
	authDomain: 'intern-797e7.firebaseapp.com',
	projectId: 'intern-797e7',
	storageBucket: 'intern-797e7.appspot.com',
	messagingSenderId: '816199382526',
	appId: '1:816199382526:web:beef04f2de2c020a8bbcaf',
	measurementId: 'G-5DG0L0V08J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
