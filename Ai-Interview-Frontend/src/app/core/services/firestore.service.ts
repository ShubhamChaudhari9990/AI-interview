import { Injectable, inject } from '@angular/core';

import {
    Firestore,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    query,
    where
} from '@angular/fire/firestore';

import { AppUser } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {

    private firestore = inject(Firestore);

    // USER APIs

    async createUser(user: AppUser) {

        const userRef = doc(
            this.firestore,
            `users/${user.uid}`
        );

        return setDoc(userRef, user);
    }

    async getUser(uid: string) {

        const userRef = doc(
            this.firestore,
            `users/${uid}`
        );

        const snapshot = await getDoc(userRef);

        return snapshot.data();
    }

    async updateUser(
        uid: string,
        data: Partial<AppUser>
    ) {

        const userRef = doc(
            this.firestore,
            `users/${uid}`
        );

        return updateDoc(userRef, data);
    }

    async deleteUser(uid: string) {

        const userRef = doc(
            this.firestore,
            `users/${uid}`
        );

        return deleteDoc(userRef);
    }
}