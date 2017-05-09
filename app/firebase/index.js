import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAl45khSi3uM7e_xQRocyQkwhkPKc6RZlg",
    authDomain: "mead-todo-app-f3b67.firebaseapp.com",
    databaseURL: "https://mead-todo-app-f3b67.firebaseio.com",
    projectId: "mead-todo-app-f3b67",
    storageBucket: "mead-todo-app-f3b67.appspot.com",
    messagingSenderId: "173708255170"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
