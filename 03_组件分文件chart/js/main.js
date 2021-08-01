import initComm from './initComponent.js'
import initTopBar from './initTopBar.js'
import initMenuBar from './initMenuBar.js'
import vueStore from './initVuex.js'

initMenuBar()
initComm()
initTopBar()

axios.defaults.baseURL = 'http://127.0.0.1:5500/03_%E7%BB%84%E4%BB%B6%E5%88%86%E6%96%87%E4%BB%B6chart';

const option = {
    el: '#root',
    store: vueStore,
    mounted() {
        this.initData()
    },
    data: {
        // arr: [{
        //     name: 'column_1',
        //     showMenu: true
        // }, {
        //     name: 'column_2',
        //     showMenu: false
        // }, {
        //     name: 'column_3',
        //     showMenu: true
        // }],
        arr: [],
        fullTitle: "全国土地利用结构汇总统计"
    },
    methods: {
        getDataFromServer() {
            return axios.get('/data/chartLayout.json')
        },

        async initData() {
            const { data: ret } = await this.getDataFromServer()
            this.arr = ret
        }
    }
}



export default function () {
    const vueInstance = new Vue(option)

}