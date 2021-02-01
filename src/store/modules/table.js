


export default {
    namespaced: true,
    state: () => ({
        rows: [
            {number: 0, name: 'Name1', date: '2021', status: 'on'},
            {number: 1, name: 'Name2', date: '2021', status: 'of'},
            {number: 2, name: 'Name3', date: '2021', status: 'of'},
            {number: 3, name: 'Name4', date: '2021', status: 'on'},
            {number: 4, name: 'Name5', date: '2021', status: 'on'},
            {number: 5, name: 'Name1', date: '2021', status: 'on'},
            {number: 6, name: 'Name2', date: '2021', status: 'of'},
            {number: 7, name: 'Name3', date: '2021', status: 'of'},
            {number: 8, name: 'Name4', date: '2021', status: 'on'},
            {number: 9, name: 'Name5', date: '2021', status: 'on'},
            {number: 10, name: 'Name1', date: '2021', status: 'on'},
            {number: 11, name: 'Name2', date: '2021', status: 'of'},
            {number: 12, name: 'Name3', date: '2021', status: 'of'},
            {number: 13, name: 'Name4', date: '2021', status: 'on'},
            {number: 14, name: 'Name5', date: '2021', status: 'on'},
            {number: 15, name: 'Name1', date: '2021', status: 'on'},
            {number: 16, name: 'Name2', date: '2021', status: 'of'},
            {number: 17, name: 'Name3', date: '2021', status: 'of'},
            {number: 18, name: 'Name4', date: '2021', status: 'on'},
            {number: 19, name: 'Name5', date: '2021', status: 'on'},
            {number: 20, name: 'Name1', date: '2021', status: 'on'},
        ]
    }),
    mutations: {
        updateRow(state, newItem) {
            for(let i = 0; i < state.rows.length; i++)
                if(state.rows[i].number == newItem.number) {
                    state.rows[i] = Object.assign(state.rows[i], newItem);
                    break;
                }
        }
    },
    actions: {
        update({commit}, newItem) {
            return new Promise((res, rej) => {
                commit('updateRow', newItem);
                res();
            });
        }
    }
}
