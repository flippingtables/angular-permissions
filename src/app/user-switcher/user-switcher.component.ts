import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStore } from '../store/user-store';
import { User } from '../store/user';
import { FormsModule } from '@angular/forms';
import { userTypes } from '../store/user-types';

@Component({
  selector: 'app-user-switcher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-switcher.component.html',
  styleUrls: ['./user-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
