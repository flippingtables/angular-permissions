import { Role, User } from './user';

export function hasAnyRole(user: User, role: Role | Role[] | undefined) {
  if (!role) {
    return false;
  }
  if (user.isAdmin) {
    return true;
  }
  const roles: Role[] = Array.isArray(role) ? role : [role];
  return roles.length === 0 || user.roles.some((r) => roles.indexOf(r) !== -1);
}
