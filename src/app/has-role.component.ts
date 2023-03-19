import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HasRoleDirective } from './has-role.directive';
import { UserStore } from './user-store';

@Component({
  selector: 'app-has-role-component',
  standalone: true,
  imports: [CommonModule, HasRoleDirective],
  providers: [UserStore],
  template: `
    <h2>Information Panel</h2>

    <div>Actual testing:</div>
    <div *hasRoleIsAdmin="true">visible only for super admin</div>
    <div *hasRole="'MANAGER'; isAdmin: true">visible if manager</div>
    <div *hasRole="['MANAGER', 'READER']">visible if manager and/or reader</div>
    <div *hasRole="['MANAGER', 'WRITER']">visible if manager and/or writer</div>
    <div *hasRole="'CLIENT'">visible if client</div>
    <div>Visible for everyone</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HasRoleComponentComponent {
  constructor() {}
}
