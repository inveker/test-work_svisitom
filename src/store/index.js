import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth";
import table from "./modules/table";



Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        table
    }
});

export default store;