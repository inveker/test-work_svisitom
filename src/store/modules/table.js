

export default {
    namespaced: true,
    state: () => ({
        rows: [
            {number: 0, name: 'Name1', date: '2021', status: 'on'},
            {number: 1, name: 'Name2', date: '2021', status: 'of'},
            {number: 2, name: 'Name3', date: '2021', status: 'of'},
            {number: 3, name: 'Name4', date: '2021', status: 'on'},
            {number: 4, name: 'Name5', date: '2021', status: 'on'},
        ]
    }),
    getters: {
        isAuthenticated: state => Boolean(state.token),
        authStatus: state => state.status,
    },
    mutations: {
        AUTH_SUCCESS: (state, token) => {
            state.status = 'success'
            state.token = token
        },
        AUTH_ERROR: (state) => {
            state.status = 'error'
        },
    },
    actions: {
        AUTH_REQUEST: ({commit, dispatch}, user) => {
            return new Promise((resolve, reject) => { // The Promise used for router redirect in login
                if(user.username == 'root' && user.password == 'root') {
                    const token = 111
                    document.cookie = 'token='+token
                    commit('AUTH_SUCCESS', token)
                    resolve();
                } else {
                    commit('AUTH_ERROR');
                    reject();
                }
            })
        }
    }
}
