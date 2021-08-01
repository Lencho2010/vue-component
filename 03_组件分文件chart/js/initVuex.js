const storeOption = {
    state: {
        count: 0,
        itemList: [{
            itemName: "林地",
            id: "1"
        },
        {
            itemName: "草地",
            id: "2"
        },
        {
            itemName: "园地",
            id: "3"
        },
        {
            itemName: "耕地",
            id: "4"
        },
        ]
    },
    actions: {
        addAct(context, val) {
            console.log('addAct');
            context.commit('addMut', val)
        },
        addItem(context, val) {
            console.log('addItem');
            context.commit('addItem', val)
        },
        removeItemAt(context, index) {
            console.log('removeItemAt');
            context.commit('removeItemAt', index)
        },
        clearItems(context, val) {
            console.log('clearItems');
            context.commit('clearItems', val)
            Vue.prototype.$bus.$emit('hello','lencho')
        }
    },
    mutations: {
        addMut(state, val) {
            console.log('addMut');
            state.count += val
        },
        addItem(state, val) {
            state.itemList.push(val)
        },
        removeItemAt(state, index) {
            state.itemList.splice(index, 1)
        },
        clearItems(state, val) {
            const len = state.itemList.length
            state.itemList.splice(0, len)
        }
    }
}

const store = new Vuex.Store(storeOption)

export default store