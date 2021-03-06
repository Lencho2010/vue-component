export default function () {
    Vue.component("mytitle", {
        template: "#mytitle",
        data() {
            return {
                // titleName: this.titleData.text,
                isCanClick: this.titleTag.isCanClick,
                isChecked: this.titleTag.isChecked
            }
        },
        props: ["titleData", "titleTag"],
        methods: {
            titleClick() {
                if (!this.isCanClick) return
                console.log(this.titleData);
                this.titleTag.isChecked = this.isChecked = !this.isChecked
            }
        },
        computed: {
            
        }
    })
}