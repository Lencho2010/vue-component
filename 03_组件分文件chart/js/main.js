import initComm from './initComponent.js'
import initTopBar from './initTopBar.js'
import initMenuBar from './initMenuBar.js'
import vueStore from './initVuex.js'
import initColumn_1 from './chart/column_1.js'

initColumn_1()

initMenuBar()
initComm()
initTopBar()

axios.defaults.baseURL = 'http://127.0.0.1:5500/03_%E7%BB%84%E4%BB%B6%E5%88%86%E6%96%87%E4%BB%B6chart';

const option = {
    el: '#root',
    store: vueStore,
    beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
    mounted() {
        this.initData()
    },
    data: {
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
            console.log(this.arr);
        }
    }
}



export default function () {
    const vueInstance = new Vue(option)

}