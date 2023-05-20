import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { userTypes } from '../user/user-types';
import { User } from '../user/user';
import { SignalStore } from '../signal-store/signal-store';

@Component({
  selector: 'signal-app-user-switcher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signal-user-switcher.component.html',
})
export class SignalUserSwitcherComponent {
  store = inject(SignalStore);

  allUsers = userTypes;

  set(user: User){
    this.store.setUser(user);
  }
}
