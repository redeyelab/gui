import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        playerState: 'unknown',
    },
    mutations: {

        play (state) {
            state.playerState = 'Playing'
        },

        pause (state) {
            state.playerState = 'Paused'
        }
    },

    actions: {
        play: ({ commit }) => commit('play'),
        pause: ({ commit }) => commit('pause'),
    },
    getters: {
        playerStatus: state => {
            return state.playerState
        }
    },
    modules: {
    }
})
