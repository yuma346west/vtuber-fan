export const state = () => ({
    imgCounter: 1
})

export const mutations = {
    increment(state) {
        state.imgCounter++
    },
    reset(state) {
        state.imgCounter = 1
    }
}

export const actions = {
    count ({state, commit}) {
        if (state.imgCounter == 3) {
            commit('reset')
        } else {
            commit('increment')
        }
    }
}

export const getters = {
    getImgCounter: state => {
        return state.imgCounter
    }
}