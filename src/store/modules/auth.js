import {getCookie} from "../../utils/cookie";



export default {
    namespaced: true,
    state: () => ({
        token: getCookie('token') || '',
        error: ''
    }),
    getters: {
        isAuthenticated: state => Boolean(state.token),
        error: state => state.error,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setError(state, error) {
            state.error = error;
        },
    },
    actions: {
        request: ({commit, dispatch}, {username, password}) => {
            return new Promise((res, rej) => {
                if(username == 'root' && password == 'root') {
                    const token = 111
                    document.cookie = 'token='+token+'; max-age=3600';
                    commit('setToken', token)
                    res();
                } else {
                    commit('setError', 'Incorrect login or password');
                    rej();
                }
            })
        },
        logout: ({commit}) => {
            document.cookie = 'token=; max-age=0';
            commit('setToken', '');
        }
    }
}