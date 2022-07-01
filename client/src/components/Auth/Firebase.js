import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyD_fjCQn5KtUai2BBGndXmoXjU0HqWnk9U',
    authDomain: 'mern-project-353319.firebaseapp.com',
    projectId: 'mern-project-353319',
    storageBucket: 'mern-project-353319.appspot.com',
    messagingSenderId: '975961905907',
    appId: '1:975961905907:web:d5b92911d691e1e496f586',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const provider = new GoogleAuthProvider();
