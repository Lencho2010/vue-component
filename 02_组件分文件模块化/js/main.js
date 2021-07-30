import initComm from './initComponent.js'

initComm()

const option = {
    el: '#root',
    data: {
        arr: [{
            name: 'column_1',
            showMenu: true
        }, {
            name: 'column_2',
            showMenu: false
        }, {
            name: 'column_3',
            showMenu: true
        }],
        curName: 'home'
    },
    methods: {
    }
}

export default function () {
    const vueInstance = new Vue(option)
}