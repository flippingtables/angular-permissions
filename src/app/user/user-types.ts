import { User } from './user';

export const admin: User = {
  name: 'admin',
  isAdmin: true,
  roles: [],
};

export const manager: User = {
  name: 'manager',
  isAdmin: false,
  roles: ['MANAGER'],
};

export const writer: User = {
  name: 'writer',
  isAdmin: false,
  roles: ['WRITER'],
};

export const reader: User = {
  name: 'reader',
  isAdmin: false,
  roles: ['READER'],
};

export const readerAndWriter: User = {
  name: 'readerAndWriter',
  isAdmin: false,
  roles: ['READER', 'WRITER'],
};

export const client: User = {
  name: 'client',
  isAdmin: false,
  roles: ['CLIENT'],
};

export const everyone: User = {
  name: 'everyone',
  isAdmin: false,
  roles: [],
};

export const userTypes: User[] = [
  everyone,
  client,
  readerAndWriter,
  reader,
  writer,
  manager,
  admin,
];
