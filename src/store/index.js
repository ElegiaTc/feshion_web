import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
}

const mutations = {
    CHANGE_LOGIN(state) {
        state.isLogin = !state.isLogin
    },
    CHANGE_USERMESSAGE(state,[nickname,username,userId]) {
        state.nickname = nickname;
        state.username = username;
        state.userId = userId;
    },
    ADD_MODELFILE(state,modelArr) {
        state.modelFile.length = 0
        state.modelFile[0] = modelArr
    }
}

const state = {
    isLogin: false,
    nickname:'',
    username:'',
    userId:-1,
    modelFile: [],
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})