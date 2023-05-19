import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map } from 'rxjs';
import { Role, User } from './user';
import { everyone } from './user-types';

export interface UserState {
  user: User;
}

@Injectable()
export class UserStore extends ComponentStore<UserState> {
  constructor() {
    super({ user: everyone });
  }

  readonly user$ = this.select((state) => state.user);
  readonly isAdmin$ = this.select((state) => state.user.isAdmin);
  readonly setUser = this.updater((state, user: User) => ({
    user: user
  }));

  readonly hasAnyRole = (role: Role | Role[]) =>
    this.user$.pipe(
      map((user) => {
        if (user.isAdmin) {
          return true;
        }

        const roles: Role[] = Array.isArray(role) ? role : [role];
        return (
          roles.length === 0 || user?.roles.some((r) => roles.indexOf(r) !== -1)
        );
      })
    );
}