export default function () {

    Vue.config.productionTip = false

    Vue.component("mytitle", {
        template: "#mytitle",
        data() {
            return {
                titleName: this.titleData.text,
                isCanClick: this.titleTag.isCanClick,
                isChecked: this.titleTag.isChecked
            }
        },
        props: ["titleData","titleTag"],
        methods: {
            titleClick() {
                if (!this.isCanClick) return
                console.log(this.titleData);
                this.isChecked = !this.isChecked
                //console.log(this.titleTag);
            }
        }
    })

    // 注册全局工具栏组件
    Vue.component("mymenu", {
        template: "#mymenu"
    })

    Vue.component("column_1", {
        template: '#column_1',
        mounted() {
            console.log("column_1模块挂载上了");
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
        methods: {
            async gainData() {
                const retData = await this.gainDataFromServer()
                this.chartContent = retData.chartContent
            },

            // 异步从后台获取数据
            gainDataFromServer() {
                return new Promise(function (resolve, reject) {
                    resolve({
                        chartContent: "我是柱状图"
                    })
                });
            }
        }
    })

    Vue.component("column_2", {
        template: '#column_2',
        data() {
            return {
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
        data() {
            return {
                chartTitle: "我是column_3标题",
                chartContent: "我是桑基图",
                titleData: {
                    text: '草地'
                }
            }
        }
    })

}