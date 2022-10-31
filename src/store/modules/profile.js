export default {
    state: {
        profile: [],
    },
    getters: {
        getProfile(state) {
            return state.profile;
        },
    },
    mutations: {
        updateProfile(state, profile) {
            state.profile = profile;
        },
    },
    actions: {
        fetchProfile(ctx) {
            const payload = {
                avatar: './src/assets/images/nophoto.png',
                full_name: 'Elias Torres',
                gender: 'male',
                email: 'elias_torres@gmail.com',
                password: '12345678',
                company: 'Google',
            };

            ctx.commit('updateProfile', payload);
        },
        changeProfile(ctx, payload) {
            ctx.commit('updateProfile', payload);
        },
    }
}