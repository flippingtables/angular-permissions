import { NgIf } from '@angular/common';
import { Directive, effect, inject, Input, signal } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { pipe, tap } from 'rxjs';
import { SignalStore } from './signal-store';
import { Role } from '../user/user';


@Directive({
  selector: '[signalHasRole], [signalHasRoleIsAdmin]',
  standalone: true,
  hostDirectives: [NgIf],
})
export class HasRoleDirective {
  private store = inject(SignalStore);
  private ngIf = inject(NgIf, { host: true });
  private showTemplate = signal(false);

  @Input('signalHasRole') set role(role: Role | Role[] | undefined) {
    if (role) {
      this.showTemplate.set(this.store.hasAnyRole(role));
    }
  }

  @Input('hasRoleIsAdmin') set isAdmin(isAdmin: boolean) {
    if (isAdmin) {
      this.showTemplate.set(this.store.isAdmin());
    }
  }

  constructor() {
    effect(()=> {
        console.log(`The showTemplated changed ${this.showTemplate()})`)
    })
  }

//   private readonly showTemplate = this.componentStore.effect<
//     boolean | undefined
//   >(
//     pipe(
//       tap((showTemplate) => (this.ngIf.ngIf = showTemplate))
//     )
//   );
}
