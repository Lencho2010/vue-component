const storeOption = {
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
}

const store = new Vuex.Store(storeOption)

export default store