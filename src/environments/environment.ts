// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC94VIjur64XNIQRMsOe5_UUAavEUIL5mM",
  authDomain: "kepsa-event.firebaseapp.com",
  projectId: "kepsa-event",
  storageBucket: "kepsa-event.appspot.com",
  messagingSenderId: "304162847855",
  appId: "1:304162847855:web:78fa9571f56474c4f3a19a",
  measurementId: "G-GDX38F7V6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const environment = {
    production: false,
    useEmulators: true,
    firebase: {
        projectId: 'kepsa-event',
        appId: '1:304162847855:web:78fa9571f56474c4f3a19a',
        storageBucket: 'kepsa-event.appspot.com',
        locationId: 'us-central',
        apiKey: 'AIzaSyC94VIjur64XNIQRMsOe5_UUAavEUIL5mM',
        authDomain: 'kepsa-event.firebaseapp.com',
        messagingSenderId: '304162847855',
        measurementId: 'G-GDX38F7V6Y',
    },
  };
  