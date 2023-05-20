import { NgIf } from '@angular/common';
import { Directive, effect, inject, Input, signal } from '@angular/core';
import { SignalStore } from './signal-store';
import { Role } from '../user/user';


@Directive({
  selector: '[signalHasRole], [signalHasRoleIsAdmin]',
  standalone: true,
  hostDirectives: [NgIf],
})
export class SignalHasRoleDirective {
  private store = inject(SignalStore);
  private ngIf = inject(NgIf, { host: true });
  private showTemplate = signal(false);

  @Input('signalHasRole') set role(role: Role | Role[] | undefined) {
    if (role) {
      this.showTemplate.set(this.store.hasAnyRole(role));
    }
  }

  @Input('signalHasRoleIsAdmin') set isAdmin(isAdmin: boolean) {
    if (isAdmin) {
      this.showTemplate.set(this.store.user().isAdmin);
    }
  }

  constructor() {
    
    effect(()=> {
        this.ngIf.ngIf = this.showTemplate();
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
