import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzKOt6WNYKXaaByDoxmu4dv9-_162k3ik",
    authDomain: "tcc-67ec9.firebaseapp.com",
    databaseURL: "https://tcc-67ec9.firebaseio.com",
    projectId: "tcc-67ec9",
    storageBucket: "tcc-67ec9.appspot.com",
    messagingSenderId: "343986253540",
    appId: "1:343986253540:web:b49dd69467ef7e6e7b86f1"
  };

  const fire =firebase.initializeApp(firebaseConfig);

  
  export default fire;

