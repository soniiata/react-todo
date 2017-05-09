import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAl45khSi3uM7e_xQRocyQkwhkPKc6RZlg",
  authDomain: "mead-todo-app-f3b67.firebaseapp.com",
  databaseURL: "https://mead-todo-app-f3b67.firebaseio.com",
  projectId: "mead-todo-app-f3b67",
  storageBucket: "mead-todo-app-f3b67.appspot.com",
  messagingSenderId: "173708255170"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user:{
    name: 'Nopvi',
    age: 24
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('new Todos Add', snapshot.key, snapshot.val());
});

todosRef.push({
  id: 1,
  text: 'Todos 1'
});

todosRef.push({
  id: 2,
  text: 'Todos 2'
});
