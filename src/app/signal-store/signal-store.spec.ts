import { SignalStore } from './signal-store';
import { admin, everyone, readerAndWriter } from '../user/user-types';
import { hasAnyRole } from '../user/user-functions';

describe('SignalStore', () => {
  
  let signalStore: SignalStore;
  
  beforeEach(()=>{
    signalStore = new SignalStore();
  });
  
  it('should be everyone on startup', () => {
    expect(signalStore.currentUser()).toBe(everyone);
  });
  
  it('should be updated on set', () => {
    signalStore.setUser(admin);
    expect(signalStore.currentUser()).toBe(admin);
  });

  describe('hasAnyRole function', () => {
    it('readerAndWriter', () => {

      signalStore.setUser(readerAndWriter);
      let hasRole = hasAnyRole(signalStore.currentUser(), ['READER', 'WRITER']);
      expect(hasRole).toBe(true);

      hasRole = hasAnyRole(signalStore.currentUser(), ['MANAGER', 'CLIENT']);
      expect(hasRole).toBe(false);
    });
  });
});