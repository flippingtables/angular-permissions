import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HasRoleDirective } from './directives/has-role.directive';
import { UserStore } from './store/user-store';
import { UserSwitcherComponent } from './user-switcher/user-switcher.component';
import { SignalHasRoleDirective } from './directives/signal-has-role.directive';
import { SignalUserSwitcherComponent } from './signal-user-switcher/signal-user-switcher.component';

@Component({
  selector: 'app-has-role-component',
  standalone: true,
  imports: [
    CommonModule,
    HasRoleDirective,
    SignalHasRoleDirective,
    UserSwitcherComponent,
    SignalUserSwitcherComponent,
  ],
  providers: [UserStore],
  templateUrl: './has-role.component.html',
  styleUrls: ['./has-role.component.scss']
})
export class HasRoleComponentComponent {}
