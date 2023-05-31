const firebase = require('firebase/app')
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyA22jPvnGv7NLKalZGOfVI8TW1VG-W6d_A",
    authDomain: "apiexpress-147f6.firebaseapp.com",
    projectId: "apiexpress-147f6",
    storageBucket: "apiexpress-147f6.appspot.com",
    messagingSenderId: "170699140414",
    appId: "1:170699140414:web:471d45ce1e56c677e5906f",
    measurementId: "G-18XS101RVL"
}

firebase.initializeApp(firebaseConfig)

module.exports = firebase