export default function () {
    Vue.component("menuBar", {
        template: '#menuBar',
        data() {
            return {
            }
        },
        mounted() {
            
        },
        computed: {
            ...Vuex.mapState({itemList:'itemList'}),
        },
        props: ["title"],
        methods: {
            ...Vuex.mapActions({removeAt:'removeItemAt',clearItems:'clearItems'}),
            clear(){
                this.clearItems()
                this.$bus.$emit('hello','lencho')
            }
        }
    })
}