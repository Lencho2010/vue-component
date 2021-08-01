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
            ...Vuex.mapActions({removeAt:'removeItemAt',clear:'clearItems'}),
        }
    })
}