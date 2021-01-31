

export default {
    namespaced: true,
    state: () => ({
        token: getCookie('token') || '',
        status: '',
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
        request: ({commit, dispatch}, user) => {
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
        },
        logout: () => {
            document.cookie = 'token=';
        }
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}