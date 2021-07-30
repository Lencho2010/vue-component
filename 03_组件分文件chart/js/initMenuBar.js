export default function () {
    Vue.component("menuBar", {
        template: '#menuBar',
        data() {
            return {
                itemList: [{
                        itemName: "林地",
                        id: "1"
                    },
                    {
                        itemName: "草地",
                        id: "2"
                    },
                    {
                        itemName: "园地",
                        id: "3"
                    },
                    {
                        itemName: "耕地",
                        id: "4"
                    },
                ]
            }
        },
        props: ["title"],
        methods: {
            removeAt(index) {
                this.itemList.splice(index,1)
            },
            clear() {
                this.itemList=[]
            }
        }
    })
}