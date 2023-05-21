import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map } from 'rxjs';
import { everyone } from '../user/user-types';
import { Role, User } from '../user/user';
import { hasAnyRole } from '../user/user-functions';

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
  readonly setUser = this.updater((_, user: User) => ({
    user: user,
  }));

  readonly hasAnyRole$ = (role: Role | Role[] | undefined) =>
    this.user$.pipe(map((user) => hasAnyRole(user, role)));
}
