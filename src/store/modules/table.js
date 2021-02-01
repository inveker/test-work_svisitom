import * as DB from "../../db";



DB.init();


export default {
    namespaced: true,
    state: () => ({
        rows: []
    }),
    mutations: {
        setRows(state, rows) {
            state.rows = rows;
        },
        updateRow(state, newItem) {
            for(let i = 0; i < state.rows.length; i++)
                if(state.rows[i].number == newItem.number) {
                    state.rows[i] = Object.assign(state.rows[i], newItem);
                    break;
                }
        }
    },
    actions: {
        fetchRows({commit}) {
            DB.getAll().then(db => {
                commit('setRows', db);
            });
        },
        update({commit}, newItem) {
            DB.updateOne(newItem).then(() => {
                commit('updateRow', newItem);
            });
        }
    }
}
