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

    Vue.component("column_2", {
        template: '#column_2',
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