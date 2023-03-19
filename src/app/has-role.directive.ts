import { NgIf } from '@angular/common';
import { Directive, inject, Input } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { pipe, tap } from 'rxjs';
import { Role } from './user';
import { UserStore } from './user-store';

@Directive({
  selector: '[hasRole], [hasRoleIsAdmin]',
  standalone: true,
  hostDirectives: [NgIf], // 👈🏼 the beauty of Angular v15 is located here
  providers: [ComponentStore],
})
export class HasRoleDirective {
  private store = inject(UserStore);
  private componentStore = inject(ComponentStore);
  private ngIf = inject(NgIf, { host: true });

  @Input('hasRole') set role(role: Role | Role[] | undefined) {
    if (role) {
      this.showTemplate(this.store.hasAnyRole(role));
    }
  }

  @Input('hasRoleIsAdmin') set isAdmin(isAdmin: boolean) {
    if (isAdmin) {
      this.showTemplate(this.store.isAdmin$);
    }
  }

  private readonly showTemplate = this.componentStore.effect<
    boolean | undefined
  >(
    pipe(
      tap((showTemplate) => (this.ngIf.ngIf = showTemplate)) // 🥰
    )
  );
}
