import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: 'confused'
    },
    mutations: {
        play (state) {
            state.status = 'Playing'
        },
        pause (state) {
            state.status = 'Paused'
        }
    },
    actions: {
        play: ({ commit }) => commit('play'),
        pause: ({ commit }) => commit('pause'),
    },
    modules: {
    }
})
