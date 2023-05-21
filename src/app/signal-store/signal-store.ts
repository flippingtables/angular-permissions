import { Injectable, signal } from "@angular/core";
import { everyone } from "../user/user-types";
import { User } from "../user/user";

@Injectable({providedIn: 'root'})
export class SignalStore {
  currentUser = signal<User>(everyone);
  
  setUser(newUser: User) {
    this.currentUser.set(newUser);
  }
}