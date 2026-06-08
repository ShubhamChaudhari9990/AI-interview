import { Injectable, inject } from '@angular/core';

import {
    Auth,
    authState,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    signOut,
    User
} from '@angular/fire/auth';

import { Observable } from 'rxjs';
import { FirestoreService } from './firestore.service';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private auth = inject(Auth);
    private firestoreService = inject(FirestoreService);

    currentUser$: Observable<User | null> =
        authState(this.auth);

    register(
        name: string,
        email: string,
        password: string
    ) {
        return createUserWithEmailAndPassword(
            this.auth,
            email,
            password
        ).then(async credential => {

            await this.firestoreService.createUser({
                uid: credential.user.uid,
                name,
                email,
                role: 'candidate',
                createdAt: Date.now()
            });

            return credential;
        });
    }

    login(email: string, password: string) {
        return signInWithEmailAndPassword(
            this.auth,
            email,
            password
        );
    }

    googleLogin() {
        return signInWithPopup(
            this.auth,
            new GoogleAuthProvider()
        );
    }

    forgotPassword(email: string) {
        return sendPasswordResetEmail(
            this.auth,
            email
        );
    }

    logout() {
        return signOut(this.auth);
    }

    getCurrentUser() {
        return this.auth.currentUser;
    }
}