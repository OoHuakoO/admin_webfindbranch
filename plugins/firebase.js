import  firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCvv1GToVl9evc7l3KvevJVTRFe1FNkuDg',
  authDomain: 'projectming-2f158.firebaseapp.com',
  projectId: 'projectming-2f158',
  storageBucket: 'projectming-2f158.appspot.com',
  messagingSenderId: '216600402205',
  appId: '1:216600402205:web:86c50441f8dcbe853929f4',
}

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig)
}

export default firebase
