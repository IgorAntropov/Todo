import {createStore} from 'vuex';
import Tasks from './modules/tasks';
import Profile from './modules/profile';

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        Tasks,
        Profile,
    }
})