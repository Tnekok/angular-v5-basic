import * as firebase from 'firebase';

export class AuthService {

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => console.log('signupUser error: ', error));
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => console.log('login success: ', response))
            .catch(error => console.log('login error: ', error));
    }
}
