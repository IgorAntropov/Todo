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
        },
        changeTask(state, payload) {
            state.fullTasksList = state.fullTasksList.map(task => {
                if (task.id === payload.id) {
                    return payload;
                }

                return task;
            });
        },
        addNewTask(state, payload) {
            state.fullTasksList.push(payload);
        },
        removeTask(state, payload) {
            state.fullTasksList.map((task, index) => {
                if (task.id === payload) {
                    state.fullTasksList.splice(index, 1);
                }
            });
        },
    },
    actions: {
        fetchFullTasksList(ctx) {
            const payload = [
                {
                    id: 1,
                    title: 'Create ToDo FIRST',
                    description: 'Create task manager for portfolio',
                    due: new Date(),
                    status: 'common'
                },
                {
                    id: 2,
                    title: 'Create ToDo',
                    description: 'Create task manager for portfolio',
                    due: new Date(),
                    status: 'process'
                },
                {
                    id: 3,
                    title: 'Create ToDo',
                    description: 'Create task manager for portfolio',
                    due: new Date(),
                    status: 'closed'
                },
                {
                    id: 4,
                    title: 'Create ToDo',
                    description: 'Create task manager for portfolio',
                    due: new Date(),
                    status: 'common'
                },
                {
                    id: 5,
                    title: 'Create ToDo',
                    description: 'Create task manager for portfolio',
                    due: new Date(),
                    status: 'process'
                },
                {
                    id: 6,
                    title: 'Create ToDo',
                    description: 'Create task manager for portfolio',
                    due: new Date(),
                    status: 'closed'
                },
                {
                    id: 7,
                    title: 'Create ToDo',
                    description: 'Create task manager for portfolio',
                    due: new Date(),
                    status: 'common'
                },
                {
                    id: 8,
                    title: 'Create ToDo',
                    description: 'Create task manager for portfolio',
                    due: new Date(),
                    status: 'process'
                },
                {
                    id: 9,
                    title: 'Create ToDo LAST',
                    description: 'Create task manager for portfolio',
                    due: new Date(),
                    status: 'closed'
                },
            ];

            ctx.commit('updateFullTasksList', payload);
        },
        changeTask(ctx, payload) {
            ctx.commit('changeTask', payload);
        },
        addTask(ctx, payload) {
            ctx.commit('addNewTask', payload);
        },
        deleteTask(ctx, payload) {
            ctx.commit('removeTask', payload);
        }
    }
}