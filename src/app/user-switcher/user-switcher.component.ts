import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStore } from '../store/user-store';
import { FormsModule } from '@angular/forms';
import { userTypes } from '../user/user-types';
import { User } from '../user/user';

@Component({
  selector: 'app-user-switcher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-switcher.component.html'
})
export class UserSwitcherComponent {
  private store = inject(UserStore);

  user$ = this.store.user$;
  allUsers = userTypes;
  selected: User = this.allUsers[0];

  set(user: User){
    this.store.setUser(user);
  }
}
