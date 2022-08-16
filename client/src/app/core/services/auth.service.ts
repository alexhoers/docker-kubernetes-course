import { Injectable } from "@angular/core";
import { Auth, EmailAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { User } from "src/app/shared/models/user";

@Injectable()
export class AuthService {
    currentUser: User;

    constructor(private afAuth: Auth, private router: Router) {
        
    }

     loginUser(email: string, password: string){
         return signInWithEmailAndPassword(this.afAuth, email, password).then((userCredential) => {
            console.log(userCredential.user);
            this.currentUser = new User({email: email});
            this.router.navigate(['/home']);
         }).catch((error) => {
             return error;
         });

    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}