export default {
    state: {
        fullTasksList: [],
    },
    getters: {
        getFullTasksList(state) {
            return state.fullTasksList;
        },
    },
    mutations: {
        updateFullTasksList(state, tasks) {
            state.fullTasksList = tasks;
        }
    },
    actions: {
        fetchFullTasksList(ctx) {
            const payload = [
                {
                    title: 'Create ToDo',
                    description: 'Create task manager for portfolio',
                    due: '2022-10-13T06:53:44',
                    status: 'common'
                },
                {
                    title: 'Create ToDo',
                    description: 'Create task manager for portfolio',
                    due: '2022-10-13T06:53:44',
                    status: 'process'
                },
                {
                    title: 'Create ToDo',
                    description: 'Create task manager for portfolio',
                    due: '2022-10-13T06:53:44',
                    status: 'closed'
                },
            ];

            ctx.commit('updateFullTasksList', payload);
        }
    }
}