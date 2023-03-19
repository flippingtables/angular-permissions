import { UserStore } from './user-store';
import { admin, client, everyone } from './user-types';

describe('MoviesComponentStore', () => {

    describe('setUser reducer', () => {
        it('should set user to the store', (done) => {
            const userStore = new UserStore();
            userStore.setState({ user: everyone });

            userStore.setUser(admin);

            userStore.state$.subscribe((state) => {
                expect(state.user.name).toBe('admin');
                done();
            });
        });
    });

    describe('user$ selector', () => {
        it('should return everyone as default state', (done) => {
            const userStore = new UserStore();

            userStore.user$.subscribe(user => {
                expect(user.name).toBe('everyone');
                done();
            });
        });

        it('should return the correct user in the store', (done) => {
            const userStore = new UserStore();
            userStore.setUser(admin);

            userStore.user$.subscribe(user => {
                expect(user).toEqual(admin);
                done();
            });
        });
    });
});