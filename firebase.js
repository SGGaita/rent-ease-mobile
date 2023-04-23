import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKaxmd1AG6nRR9eyQAU3_IxF5z1UXIF_U",
    authDomain: "rentease-115a6.firebaseapp.com",
    databaseURL: "https://rentease-115a6-default-rtdb.firebaseio.com",
    projectId: "rentease-115a6",
    storageBucket: "rentease-115a6.appspot.com",
    messagingSenderId: "641452250702",
    appId: "1:641452250702:android:b6ebb969d3fb4ea4a0151f",
    measurementId: "G-ZE801MZBCD"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;






