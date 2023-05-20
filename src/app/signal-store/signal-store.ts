import { Injectable, signal } from "@angular/core";
import { everyone } from "../user/user-types";
import { Role, User } from "../user/user";

@Injectable({ providedIn: 'root' })
export class SignalStore {
    #currentUser = signal<User>(everyone);
    
    user(): User {
        return this.#currentUser();
    }
    
    isAdmin(): boolean {
        return this.user().isAdmin;
    }
    
    setUser(newUser: User) {
        this.#currentUser.set(newUser);
    }
    
    hasAnyRole(role: Role | Role[]) {
        if (this.user().isAdmin) {return true;}
        
        const roles: Role[] = Array.isArray(role) ? role : [role];
        return (roles.length === 0 || this.user()?.roles.some((r) => roles.indexOf(r) !== -1)
        );
    }
} 
