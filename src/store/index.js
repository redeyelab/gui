import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: 'confused'
    },
    mutations: {
        setPlayState (state) {
            state.status = 'Playing'
        },
        setPauseState (state) {
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
