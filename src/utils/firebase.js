import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDcPIeB_lKEzdA_W7JFt-23lbDuTtfdoPA",
    authDomain: "tiendaexpo-41e14.firebaseapp.com",
    databaseURL: "https://tiendaexpo-41e14.firebaseio.com",
    projectId: "tiendaexpo-41e14",
    storageBucket: "tiendaexpo-41e14.appspot.com",
    messagingSenderId: "527097507093",
    appId: "1:527097507093:web:5ca12d512077e412814d1c"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);