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
  imports: [CommonModule, HasRoleDirective, SignalHasRoleDirective, UserSwitcherComponent, SignalUserSwitcherComponent],
  providers: [UserStore],
  template: `
    <h1>NGRX Component Store</h1>
    <app-user-switcher></app-user-switcher>
    
    <h2>Information Panel</h2>
    <p *hasRoleIsAdmin="true">visible only for super admin</p>
    <p *hasRole="'MANAGER'; isAdmin: true">visible if manager</p>
    <p *hasRole="['MANAGER', 'READER']">visible if manager and/or reader</p>
    <p *hasRole="['MANAGER', 'WRITER']">visible if manager and/or writer</p>
    <p *hasRole="'CLIENT'">visible if client</p>
    <p>Visible for everyone</p>

    <h1>Signal Store</h1>
    <signal-app-user-switcher></signal-app-user-switcher>
    <h2>Information Panel</h2>
    <p *signalHasRoleIsAdmin="true">visible only for super admin</p>
    <p *signalHasRole="'MANAGER'; isAdmin: true">visible if manager</p>
    <p *signalHasRole="['MANAGER', 'READER']">visible if manager and/or reader</p>
    <p *signalHasRole="['MANAGER', 'WRITER']">visible if manager and/or writer</p>
    <p *signalHasRole="'CLIENT'">visible if client</p>
    <p>Visible for everyone</p>
  `
})
export class HasRoleComponentComponent {}
