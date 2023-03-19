import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HasRoleDirective } from './has-role.directive';
import { UserStore } from './user-store';
import { UserSwitcherComponent } from './user-switcher/user-switcher.component';

@Component({
  selector: 'app-has-role-component',
  standalone: true,
  imports: [CommonModule, HasRoleDirective, UserSwitcherComponent],
  providers: [UserStore],
  template: `
    <app-user-switcher></app-user-switcher>
    
    <h1>Information Panel</h1>
    <p *hasRoleIsAdmin="true">visible only for super admin</p>
    <p *hasRole="'MANAGER'; isAdmin: true">visible if manager</p>
    <p *hasRole="['MANAGER', 'READER']">visible if manager and/or reader</p>
    <p *hasRole="['MANAGER', 'WRITER']">visible if manager and/or writer</p>
    <p *hasRole="'CLIENT'">visible if client</p>
    <p>Visible for everyone</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HasRoleComponentComponent {
  constructor() {}
}
