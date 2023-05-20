import { NgIf } from '@angular/common';
import { computed, Directive, effect, inject, Input, signal } from '@angular/core';
import { SignalStore } from './signal-store';
import { Role } from '../user/user';

@Directive({
  selector: '[signalHasRole], [signalHasRoleIsAdmin]',
  standalone: true,
  hostDirectives: [NgIf]
})
export class SignalHasRoleDirective {
  private store = inject(SignalStore);
  private ngIf = inject(NgIf, { host: true });
  
  private readonly _isAdmin = signal<boolean>(false)
  private readonly _role = signal<Role | Role[] | undefined>(undefined);
  private readonly showTemplate = computed(()=> {
    if (this._isAdmin()) {
      return this.store.currentUser().isAdmin;
    } else {
      return this.store.hasAnyRole(this._role());
    }
  });
  
  @Input('signalHasRole') set role(role: Role | Role[] | undefined) {
    this._role.set(role);
  }
  
  @Input('signalHasRoleIsAdmin') set isAdmin(isAdmin: boolean) {
    this._isAdmin.set(isAdmin);
  }
  
  constructor() {
    effect(()=> {
      this.ngIf.ngIf = this.showTemplate();
    });
  }
}
