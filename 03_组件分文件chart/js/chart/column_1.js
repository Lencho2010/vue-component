import initChart from './column_1_chart.js'

export default function () {
    Vue.component("column_1", {
        template: '#column_1',
        mounted() {
            this.$bus.$on('hello',data=>{
                console.log('我是column_1组件，收到了数据：',data)
            })
            this.gainData()
        },
        data() {
            return {
                chartTitle: "我是column_1标题",
                chartContent: "",
                titleData: {
                    text: '种植园用地'
                }
            }
        },
        props: ["chartKey"],
        computed:{

        },
        methods: {
            // 异步从后台获取数据
            gainDataFromServer() {
                return axios.get('/data/column_1.json')
            },
            async gainData() {
                //通过布局数据中传递过来的key值作为参数从后台请求对应数据
                console.log(this.chartKey);
                const { data: retData } = await this.gainDataFromServer()
                this.titleData.text = retData.title
                initChart(this)
            },

        }
    })
}