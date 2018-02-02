import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

    public token: string = null;

    constructor(private router: Router) { }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => console.log('signupUser error: ', error));
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log('login success: ', response);
                firebase.auth().currentUser.getIdToken()
                    .then((token: string) => this.token = token);
                this.router.navigate(['/']);
            })
            .catch(error => console.log('login error: ', error));
    }

    getToken() {
        // this is an asynchronous action because it also checks the validity of the token
        // and if its not valid, it tries to retrieve a new one
        firebase.auth().currentUser.getIdToken()
            .then((token: string) => this.token = token)
            .catch(error => console.log('getToken() error: ', error));
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
}
