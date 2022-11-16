import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {}

const mutations = {
    CHANGE_LOGIN() {
        state.isLogin = !state.isLogin
    }
}

const state = {
    isLogin: false
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})