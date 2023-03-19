import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentStore } from '@ngrx/component-store';
import { UserStore } from '../user-store';
import { User, userTypes } from '../user';
import { FormsModule, NgModel, UntypedFormBuilder } from '@angular/forms';

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
