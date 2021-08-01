export default function () {

    Vue.config.productionTip = false

    // 注册全局工具栏组件
    Vue.component("mymenu", {
        template: "#mymenu"
    })

    Vue.component("column_2", {
        template: '#column_2',
        mounted() {
            this.$bus.$on('hello',data=>{
                console.log('我是column_2组件，收到了数据：',data)
            })
        },
        data() {
            return {
                chartKey:'',
                chartTitle: "我是column_2标题",
                chartContent: "我是饼状图",
                titleData: {
                    text: '耕地'
                }
            }
        }
    })

    Vue.component("column_3", {
        template: '#column_3',
        mounted() {
            this.$bus.$on('hello',data=>{
                console.log('我是column_3组件，收到了数据：',data)
            })
        },
        data() {
            return {
                chartKey:'',
                chartTitle: "我是column_3标题",
                chartContent: "我是桑基图",
                titleData: {
                    text: '草地'
                }
            }
        }
    })

}