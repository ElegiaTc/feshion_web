import Vue from 'vue'
import Vuex from 'vuex'
import {getShowList} from '.././api'

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
    }
}

const state = {
    isLogin: false,
    nickname:'',
    username:'',
    userId:-1,
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})