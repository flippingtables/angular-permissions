import { Injectable, effect, signal } from "@angular/core";
import { everyone } from "../user/user-types";
import { Role, User } from "../user/user";

@Injectable({providedIn: 'root'})
export class SignalStore {
    currentUser = signal<User>(everyone);

    setUser(newUser: User) {
        this.currentUser.set(newUser);
    }
    
    hasAnyRole(role: Role | Role[] | undefined) {
        if (!role) { return false; }
        if (this.currentUser().isAdmin) {return true;}
        const roles: Role[] = Array.isArray(role) ? role : [role];
        return (roles.length === 0 || this.currentUser()?.roles.some((r) => roles.indexOf(r) !== -1));
    }
} 
