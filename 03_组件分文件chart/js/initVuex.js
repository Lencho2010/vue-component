const storeOption = {
    state: {
        count: 0
    },
    actions: {
        addAct(context, val) {
            console.log('addAct');
            context.commit('addMut', val)
        }
    },
    mutations: {
        addMut(state, val) {
            console.log('addMut');
            state.count += val
        }
    }
}

const store = new Vuex.Store(storeOption)

export default store