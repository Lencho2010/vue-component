import initComm from './initComponent.js'
import initTopBar from './initTopBar.js'
import initMenuBar from './initMenuBar.js'

initMenuBar()
initComm()
initTopBar()

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
        fullTitle:"全国土地利用结构汇总统计"
    },
    methods: {
    }
}

export default function () {
    const vueInstance = new Vue(option)
}